<template>
  <div class="tomatoleaves-center">
    <img src="./assets/tomatoLeaves.png" alt="" style="width: 10vh; height: 10vh">
  </div>
  <header class="palmodoro">Palmodoro</header>
  <div class="components-center">
    <div class="left">
      <TimerHeader/>
      <PomodoroTimer :time="timerTime"/>
    </div>
    <div class="right">
      <RestartButton @restart="resetTimer"/>
      <StartStopButton :running="isTimerRunning" @start="startTimer" @stop="stopTimer"/>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import PomodoroTimer from './components/PomodoroTimer.vue'
import RestartButton from './components/RestartButton.vue'
import StartStopButton from "./components/StartStopButton.vue"
import TimerHeader from "./components/TimerHeader.vue"

// timer state
const timerTime = ref("25:00")
const isTimerRunning = ref(false)
const remainingSeconds = ref(25 * 60) // Neue Variable für den aktuellen Stand
let intervalId = null

const startTimer = () => {
  if (intervalId) return // Schon laufend

  isTimerRunning.value = true

  intervalId = setInterval(() => {
    if (remainingSeconds.value <= 0) {
      clearInterval(intervalId)
      intervalId = null
      isTimerRunning.value = false
      return
    }

    remainingSeconds.value--
    updateTimerDisplay()
  }, 1000)
}

const updateTimerDisplay = () => {
  const minutes = Math.floor(remainingSeconds.value / 60)
  const seconds = remainingSeconds.value % 60
  timerTime.value = `${minutes}:${seconds.toString().padStart(2, '0')}`
}

const resetTimer = () => {
  stopTimer()
  remainingSeconds.value = 25 * 60
  updateTimerDisplay()
}

const stopTimer = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
  isTimerRunning.value = false
}

onMounted(() => {
  resetTimer()
})
</script>

<style scoped>
#app {
}

.palmodoro {
  margin-top: -10px;
  font-size: 120px;
  color: white;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.components-center {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  margin: 10px;
  height: 50vh;
}

.tomatoleaves-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
}

@media (max-width: 768px) {
  .palmodoro {
    font-size: 70px; /* Kleinere Größe */
    margin-top: 10vh;
  }
  .components-center{
    margin-top: 10vh;
    height: 30vh;
  }
}
@media (orientation: landscape) and (max-height: 500px) {
  .palmodoro{
    font-size: 75px;
  }
}
</style>
