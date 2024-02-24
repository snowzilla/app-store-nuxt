<script setup lang="ts">
import TheProgramCard from "~/components/The/TheProgramCard.vue";
import TheGameCard from "~/components/The/TheGameCard.vue";
import TheArticlesCard from "~/components/The/TheArticlesCard.vue";
import TheProductCard from "~/components/The/TheProductCard.vue";

const route = useRoute()

const {data, pending} = await useFetch<object>(`http://localhost:3000/api/${route.params.slug}`)

const CARDS = {
  programs: TheProgramCard,
  games: TheGameCard,
  articles: TheArticlesCard,
  products: TheProductCard,
}

const getCard = computed(() => {
  const category = route.params.slug

  return CARDS[category]
})

</script>

<template>
  <div>
    <h1 class="text-[32px] font-semibold">
      {{ data.category }}
      <span class="text-[#8e8e8e]">
        {{ data.value.length }}
      </span>
    </h1>
    <TheListCard :data="data">
      <template #default="{ item }">
        <Component
          :is="getCard"
          :id="item.id"
          :title="item.title"
          :description="item.description"
          :image="item.img"
          :version="item.version"
          :date="item.date"
          :price="item.price"
        />
      </template>
    </TheListCard>
  </div>
</template>

<style>

</style>
