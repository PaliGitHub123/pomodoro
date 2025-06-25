<template>
  <div class="font">
    <div class="tomatoleaves-center">
      <img src="./assets/tomatoLeaves.png" alt="" style="width: 10vh; height: 10vh">
    </div>
    <header class="palmodoro">Palmodoro</header>
    <div class="components-center">
      <div class="left">
        <TimerHeader/>
        <div class="incrementUpButtons">
          <Vertical_IncrementButton @incrementUp="incrementMinutes"/>
          <Vertical_IncrementButton @incrementUp="incrementSeconds"/>
        </div>
        <PomodoroTimer :time="timerTime"/>
        <div class="incrementDownButtons">
          <Vertical_IncrementButton @incrementUp="decrementSeconds"/>
          <Vertical_IncrementButton @incrementUp="decrementMinutes"/>
        </div>
      </div>
      <div class="right">
        <RestartButton @restart="resetTimer"/>
        <StartStopButton :running="isTimerRunning" @start="startTimer" @stop="stopTimer"/>
      </div>
    </div>
  </div>

</template>

<script setup>
import {onMounted, ref} from 'vue'
import PomodoroTimer from './components/PomodoroTimer.vue'
import RestartButton from './components/RestartButton.vue'
import StartStopButton from "./components/StartStopButton.vue"
import TimerHeader from "./components/TimerHeader.vue"
import Vertical_IncrementButton from "@/components/Vertical_IncrementButton.vue";

// timer state
const timerTime = ref("")
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
  let minutes = Math.floor(remainingSeconds.value/60)
  let seconds = remainingSeconds.value % 60
  timerTime.value = `${minutes}:${seconds.toString().padStart(2, '0')}`
}

const resetTimer = () => {
  stopTimer()
  remainingSeconds.value = 25 * 60
  //remainingMinutes.value = 25
  updateTimerDisplay()
}

const stopTimer = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
  isTimerRunning.value = false
}

const incrementMinutes = () =>{
  if(isTimerRunning.value === false){
    if(remainingSeconds.value < 3600){
      remainingSeconds.value+=60
    }
  }
  updateTimerDisplay()
}

const incrementSeconds = () =>{
  if(isTimerRunning.value === false){
    if(remainingSeconds.value < 3600){
      remainingSeconds.value+=5
    }
  }
  updateTimerDisplay()
}

const decrementSeconds = () => {
  if(isTimerRunning.value === false){
    if(remainingSeconds.value > 0){
      remainingSeconds.value-=5
    }
  }
  updateTimerDisplay()
}

const decrementMinutes = () => {
  if(isTimerRunning.value === false){
    if(remainingSeconds.value > 0){
      remainingSeconds.value-=60
    }
  }
  updateTimerDisplay()
}

onMounted(() => {
  resetTimer()
})
</script>

<style scoped>
#app {
}

.font{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.palmodoro {
  margin-top: -20px;
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

.incrementUpButtons{
  display: flex;
  flex-direction: row;
  gap: 100px;
  justify-content: space-evenly;
}

.incrementDownButtons{
  rotate: 180deg;
  display: flex;
  flex-direction: row;
  gap: 100px;
  justify-content: space-evenly;
}

@media (max-width: 768px) {
  .palmodoro {
    font-size: 60px; /* Kleinere Größe */
    margin-top: 10vh;
  }
  .components-center{
    margin-top: 6vh;
    height: 30vh;
  }
  .incrementUpButtons{
    gap: 20px;
  }
  .incrementDownButtons{
    gap: 20px;
  }
}
@media (orientation: landscape) and (max-height: 500px) {
  .palmodoro{
    font-size: 60px;
  }
  .components-center{
    margin-top: 6vh;
    height: 30vh;
  }
  .incrementUpButtons{
    gap: 50px;
  }
  .incrementDownButtons{
    gap: 50px;
  }
}
</style>
