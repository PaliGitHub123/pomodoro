<template>
  <header class="palmodoro">Palmodoro</header>
  <div class="components-center">
      <div class="left">
        <TimerHeader/>
        <PomodoroTimer :time="timerTime"/>
      </div>
      <div class="right">
        <RestartButton @restart="setTime"/>
        <StopButton/>
      </div>
    </div>



</template>

<script>
import PomodoroTimer from './components/PomodoroTimer.vue'
import RestartButton from './components/RestartButton.vue'
import StartStopButton from "./components/StartStopButton.vue"
import TimerHeader from "./components/TimerHeader.vue";
export default {
  name: 'App',
  components: {
    RestartButton,
    PomodoroTimer,
    StopButton: StartStopButton,
    TimerHeader
  },
  data() {
    return {
      timerTime: "25:00"
    }
  },
  methods: {
    setTime(newTime) {
      this.timerTime = newTime;
    }
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
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  margin: 10px;
  height: 50vh;
}
.left{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.right{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
}
</style>
