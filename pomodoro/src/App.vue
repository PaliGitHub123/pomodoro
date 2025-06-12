<template>
  <div class="tomatoleaves-center">
    <img src="./assets/tomatoLeaves.png" alt="">
  </div>
  <header class="palmodoro">Palmodoro</header>
  <div class="components-center">
    <div class="left">
      <TimerHeader/>
      <PomodoroTimer :time="timerTime"/>
    </div>
    <div class="right">
      <RestartButton @restart="resetTimer"/>
      <StartStopButton :running="isTimerRunning" @start="start25MinuteTimer" @stop="stopTimer"/>
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
let intervalId = null

const start25MinuteTimer = () => {
  if (intervalId) return // Schon laufend
  let totalSeconds = 25 * 60
  isTimerRunning.value = true
  // optional: clear previous interval if needed
  if (intervalId) clearInterval(intervalId)

  intervalId = setInterval(() => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    timerTime.value = `${minutes}:${seconds.toString().padStart(2, '0')}`

    if (totalSeconds <= 0) {
      clearInterval(intervalId)
      intervalId = null
      isTimerRunning.value = true
    }

    totalSeconds--
  }, 1000)
}

const resetTimer = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
  timerTime.value = "25:00"
}

const stopTimer = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
  isTimerRunning.value = false
}

onMounted(() => {
  stopTimer()
})
</script>

<style scoped>
#app {
}

.palmodoro {
  font-size: 120px;
  color: white;
  display: flex;
  justify-content: center;
  margin: 50px;
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
  justify-content: space-evenly;
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
</style>
