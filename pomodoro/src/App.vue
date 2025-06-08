<template>
  <header class="palmodoro">Palmodoro</header>
  <div class="components-center">
      <div class="left">
        <TimerHeader/>
        <PomodoroTimer/>
      </div>
      <div class="right">
        <StartButton/>
        <StopButton/>
      </div>
    </div>



</template>

<script>
import PomodoroTimer from './components/PomodoroTimer.vue'
import RestartButton from './components/RestartButton.vue'
import StartStopButton from "./components/StartStopButton.vue"
import TimerHeader from "@/components/TimerHeader.vue";
export default {
  name: 'App',
  components: {
    PomodoroTimer,
    StartButton: RestartButton,
    StopButton: StartStopButton,
    TimerHeader
  }
}
</script>

<style scoped>
#app {
}
.palmodoro{
  font-size: 120px;
  color: white;
  display: flex;
  justify-content: center;
  margin: 50px;
}
.components-center{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 10px;
}
.left{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.right{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
}
</style>
