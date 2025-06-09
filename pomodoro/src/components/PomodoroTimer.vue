<template>
  <p>{{time}}</p>
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
p{
  color: white;
  margin: 10px;
  font-size: 200px;
}
</style>
