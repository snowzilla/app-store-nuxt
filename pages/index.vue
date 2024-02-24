<template>
  <div class="default-page">
    <swiper
      :slides-per-view="1"
      :space-between="20"
      :direction="'horizontal'"
      :slidesPerView="'auto'"
      class="rounded-[8px]"
      :mousewheel="{ forceToAxis: true }"
      :pagination="{ clickable: true }"
      :modules="[Mousewheel, Pagination]"
    >
      <swiper-slide>
        <div class="absolute top-[30px] left-[30px] max-w-[350px]">
          <h3 class="text-[14px] mb-[16px]">Товар</h3>
          <h2 class="text-[20px] font-semibold mb-[24px]">Выгодная подписка Office 365 на все ваши
            устройства</h2>
          <button class="px-[32px] py-[15px] text-[15px] bg-blue-700 rounded-[5px]">More...</button>
        </div>
        <img src="assets/img/office.webp" alt="">
      </swiper-slide>
      <swiper-slide>
        <div class="absolute top-[30px] left-[30px] max-w-[350px]">
          <h3 class="text-[14px] mb-[16px]">Ключ активации</h3>
          <h2 class="text-[20px] font-semibold mb-[24px]">Ключ активации Dr.Web for Mac до 14 декабря 2030</h2>
          <button class="px-[32px] py-[15px] text-[15px] bg-green-700 rounded-[5px]">More...</button>
        </div>
        <img src="assets/img/drweb.webp" alt="">
      </swiper-slide>
    </swiper>
    <TheListCard :data="data.programs.value" :max-amount="4" title="Programs">
      <template #default="{item}">
        <TheProgramCard
          :title="item.title"
          :description="item.description"
          :image="item.img"
          :version="item.version"
        />
      </template>
    </TheListCard>
    <TheListCard :data="data.games.value" :max-amount="4" title="Games">
      <template #default="{item}">
        <TheGameCard
          :title="item.title"
          :description="item.description"
          :image="item.img"
        />
      </template>
    </TheListCard>
    <TheListCard :data="data.articles.value" :max-amount="4" title="Articles">
      <template #default="{item}">
        <TheArticlesCard
          :title="item.title"
          :description="item.description"
          :date="item.date"
          :image="item.img"
        />
      </template>
    </TheListCard>
    <TheListCard :data="data.products.value" :max-amount="4" title="Products">
      <template #default="{item}">
        <TheProductCard
          :title="item.title"
          :price="item.price"
          :image="item.img"
        />
      </template>
    </TheListCard>
  </div>
</template>

<script setup>
import {Mousewheel, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/vue";
import TheListCard from "~/components/The/TheListCard.vue";

import 'swiper/css';
import 'swiper/css/pagination';

const {data, pending} = await useAsyncData(async () => {
 const [games, articles, products, programs] = await Promise.allSettled([
  $fetch('http://localhost:3000/api/games'),
  $fetch('http://localhost:3000/api/articles'),
  $fetch('http://localhost:3000/api/products'),
  $fetch('http://localhost:3000/api/programs')
 ])

 return {games, articles, products, programs}
})

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

html * {
  font-family: 'Montserrat', sans-serif;
}

body {
  margin: 0;
  background-color: #1e1e1e;
  color: #ffffff;
  cursor: default;
  overflow: hidden;
}

::-webkit-scrollbar {
  display: none;
}

h1, h2,
h3, h4,
h5, h6,
p {
  margin: 0;
  padding: 0;
}





input {
  background-color: #262626;
  border: 1px solid #2e2e2e;
  outline: none;
  transition: 0.2s;
}

input:focus {
  border: 1px solid rgb(29 78 216 / 1);
  transition: 0.2s;
}

.header form {
  position: relative;
  z-index: 11;
}


</style>
