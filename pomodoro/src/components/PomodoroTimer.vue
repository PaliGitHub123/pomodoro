<template>
  <p class="timer-display">{{ time }}</p>
</template>

<script>
export default {
  name: 'PomodoroTimer',
  props: {
    time: {
      type: Number,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timer-display {
  color: white;
  margin: 10px;
  font-size: 200px;
}

/* Mobile (unter 768px) */
@media (max-width: 768px) {
  .timer-display {
    font-size: 80px; /* Kleinere Schrift */
    margin: 5px;
  }
}


/* Landscape orientation */
@media (orientation: landscape) and (max-height: 500px) {
  .timer-display {
    font-size: 75px;
  }
}
</style>
