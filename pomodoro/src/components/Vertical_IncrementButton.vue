<script setup>

</script>

<template>
  <div class="incrementButton">
    <font-awesome-icon
        :icon="['fas', 'arrow-up']"
        @click="$emit('incrementUp')"
        class="hover-grow"
    />
  </div>
</template>

<style scoped>
.hover-grow {
  cursor: pointer;
  transform: scale(1);
  transition: all 0.3s ease;
}

.hover-grow:hover {
  transform: scale(1.5);
}

.incrementButton{
  border-radius: 10px;
  color: #4c0101;
  font-size: 65px;
}

@media (max-width: 768px) {
  .incrementButton {
    font-size: 40px; /* Kleinere Größe */
  }
}

@media (orientation: landscape) and (max-height: 500px) {
  .incrementButton {
    font-size: 30px;
  }
}
</style>