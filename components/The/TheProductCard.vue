<script setup lang="ts">

interface ITheGameCardProps {
  image: string,
  title: string,
  price: number
}

const props = defineProps<ITheGameCardProps>()

const getPrice = computed(() => {
  return new Intl.NumberFormat(
    'ru-RU',
    { style: 'currency', currency: 'RUB', maximumSignificantDigits: 1 }).format(
    props.price,
  )
})

</script>

<template>
  <AppCard>
    <div class="the-game-card">
      <img :src="image" alt="icon" class="rounded-tr-[8px] rounded-tl-[8px]">
      <div class="py-[8px] px-[12px]">
        <h3 class="text-[14px] font-normal">{{ title }}</h3>
        <span class="text-[13px] font-semibold">от {{ getPrice }}</span>
      </div>
    </div>
  </AppCard>
</template>
