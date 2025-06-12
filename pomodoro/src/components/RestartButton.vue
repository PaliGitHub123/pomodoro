<script setup>
let time = "25:00"
</script>

<template>
  <transition name="icon-spin" mode="out-in">
    <div class="restart" @click="$emit('restart', time)">
      <font-awesome-icon :icon="['fas', 'rotate-right']"/>
    </div>
  </transition>


</template>

<style scoped>
.restart {
  border-radius: 10px;
  color: #4c0101;
  margin: 10px;
  font-size: 200px;
  /* Wichtig für smooth transform-Animation */
  transition: transform 0.5s ease-in;
  cursor: pointer; /* Zeigt an, dass es klickbar ist */
}

.icon-spin-enter-active,
.icon-spin-leave-active {
  color: rgba(76, 1, 1, 0.53);
  transition: 500ms ease-in all;
  transform: rotate(360deg);
}

.icon-spin-enter-from {
  opacity: 0;
  transform: rotate(360deg);
}
.icon-spin-leave-to {
  opacity: 0;
  transform: rotate(-360deg);
}

/* Hover-Drehung in die andere Richtung */
.restart:hover {
  transform: rotate(360deg);
}

</style>