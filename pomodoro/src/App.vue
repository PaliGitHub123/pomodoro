<template>
  <header class="palmodoro">Palmodoro</header>
  <PomodoroTimer/>
  <StartButton/>
  <StopButton/>
</template>

<script>
import PomodoroTimer from './components/PomodoroTimer.vue'
import StartButton from './components/StartButton.vue'
import StopButton from "@/components/StopButton.vue"
export default {
  name: 'App',
  components: {
    PomodoroTimer,
    StartButton,
    StopButton
  }
}
</script>

<style scoped>
#app {
}
.palmodoro{
  font-size: 50px;
  color: white;
  display: flex;
  justify-content: center;
}
</style>
