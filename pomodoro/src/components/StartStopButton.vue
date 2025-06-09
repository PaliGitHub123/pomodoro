<script>
export default {
  name: 'StopButton'
}
</script>

<template>
  <div class="startStop" @click="$emit()">
    <font-awesome-icon :icon="['fas', 'circle-play']"/>
  </div>

</template>

<style scoped>
.startStop  {
  border-radius: 10px;
  color: #4c0101;
  margin: 10px;
  font-size: 200px;
}

.startStop:hover{
  color: rgba(76, 1, 1, 0.53);
}
</style>