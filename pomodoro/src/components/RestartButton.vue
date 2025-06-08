<script >
export default {
  name: 'StartButton'
}
</script>

<template>
  <div class="restart">
    <font-awesome-icon :icon="['fas', 'rotate-right']"/>
  </div>

</template>

<style scoped>
.restart{
  border-radius: 10px;
  color: #4c0101;
  margin: 10px;
  font-size: 200px;
}

.restart:hover{
  color: rgba(76, 1, 1, 0.53);
  transition: 300ms ease-in all;
  transform: rotate(90deg);
}
</style>