<script setup>

</script>

<template>
<p>Timer</p>
</template>

<style scoped>
p{
  color: white;
  margin: 10px;
  font-size: 115px;
  text-align: center;
}
@media (max-width: 768px) {
  p {
    font-size: 65px; /* Kleinere Größe */
  }
}
@media (orientation: landscape) and (max-height: 500px) {
  p {
    font-size: 50px;
  }
}
</style>