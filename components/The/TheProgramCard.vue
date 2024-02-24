<script setup lang="ts">

const props = defineProps({
  image: String,
  title: String,
  version: String,
  description: String
})

</script>

<template>
  <AppCard>
    <div class="the-programs-card">
      <img :src="image" alt="icon" class="the-programs-card-img">
      <div class="grid gap-[6px]">
        <h3 class="text-[14px] font-normal mb-[4px]">{{ title }}</h3>
        <span class="text-[12px] tracking-wider">{{ version }}</span>
        <span class="text-[12px] text-[#8e8e8e]">{{ description }}</span>
      </div>
    </div>
  </AppCard>
</template>

<style>
.the-programs-card {
  display: grid;
  place-items: center;
  text-align: center;
  padding: 12px;
}

.the-programs-card-img {
  max-width: 56px;
  margin-bottom: 15px;
}

</style>
