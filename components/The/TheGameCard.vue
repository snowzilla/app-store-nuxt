<script setup lang="ts">

interface ITheGameCardProps {
  image: string,
  title: string,
  description: string
}

const props = defineProps<ITheGameCardProps>()

</script>

<template>
  <AppCard>
    <div class="the-game-card">
      <img :src="image" alt="icon" class="rounded-tr-[8px] rounded-tl-[8px]">
      <div class="py-[8px] px-[12px]">
        <h3 class="text-[14px] font-normal">{{ title }}</h3>
        <span class="text-[13px] text-[#8e8e8e]">{{ description }}</span>
      </div>
    </div>
  </AppCard>
</template>

<style scoped>

</style>
