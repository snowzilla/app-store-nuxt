<script setup lang="ts">

</script>

<template>
  <div class="app-card">
    <slot/>
  </div>
</template>

<style>
.app-card {
  background: #262626;
  border: 1px solid #2e2e2e;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;
}

.app-card:hover {
  background: #2d2d2d;
  border: 1px solid #4f4f4f;
  transition: 0.3s;
}
</style>
