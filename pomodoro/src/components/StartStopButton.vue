<script setup>
import { ref, watch } from 'vue'

// von außen steuerbar
const props = defineProps({
  running: Boolean
})
const emit = defineEmits(['start', 'stop'])

const isRunning = ref(props.running)

watch(() => props.running, (val) => {
  isRunning.value = val
})

const toggle = () => {
  if (isRunning.value) {
    emit('stop')
  } else {
    emit('start')
  }
}
</script>

<template>
  <div class="startStop" @click="toggle">
    <transition name="icon-fade" mode="out-in">
      <font-awesome-icon
          :key="isRunning ? 'pause' : 'play'"
          :icon="isRunning ? ['fas', 'circle-pause'] : ['fas', 'circle-play']"
      />
    </transition>
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

.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: all 0.3s ease;
}

.icon-fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.3);
}
.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.3);
}

</style>