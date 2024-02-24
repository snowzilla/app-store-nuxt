<script setup lang="ts">

interface ITheArticlesCardProps {
  image: string,
  title: string,
  date: string,
  description: string
}

const props = defineProps<ITheArticlesCardProps>()

const getUrl = computed(() => {
  return `url("${props.image}")`
})

</script>

<template>
  <AppCard>
    <div class="the-articles-card" :style="{ '--url-img' : getUrl }">
      <span class="text-[12px] tracking-widest text-[#8e8e8e]">{{ date }}</span>
      <div class="grid gap-[8px]">
        <h3 class="text-[14px] font-normal">{{ title }}</h3>
        <span class="the-articles-card-description text-[12px] text-[#8e8e8e] leading-5">{{ description }}</span>
      </div>
    </div>
  </AppCard>
</template>

<style>

.the-articles-card {
  background-image: var(--url-img);
  min-height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.the-articles-card-description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}


</style>
