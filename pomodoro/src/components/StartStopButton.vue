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
          class="button-icon"
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

.button-icon{
  cursor: pointer;
  transform: scale(1);
  transition: all 0.3s ease;
}

.button-icon:hover{
  cursor: pointer;
  transform: scale(1.2);
  transition: all 0.3s ease;
}

.startStop:hover{
  color: rgba(76, 1, 1, 0.53);
  cursor: pointer;
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

@media (max-width: 768px) {
  .startStop {
    font-size: 100px; /* Kleinere Größe */
  }
}
@media (orientation: landscape) and (max-height: 500px) {
  .startStop {
    font-size: 75px;
  }
}

</style>