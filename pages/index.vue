<template>
  <div class="max-w-[1440px] mr-[auto] ml-[auto] h-screen overflow-y-scroll">
    <aside
      class="menu-panel pt-[30px] px-[20px] h-full flex flex-col gap-[50px] border-l-[1px] border-r-[1px] border-gray-500">
      <div class="logo flex items-center pl-[20px] pt-[5px] gap-2">
        <Logo/>
        <h1 class="text-2xl	font-medium">
          AppStore
        </h1>
      </div>

      <div class="nav-list">
        <NuxtLink :to="`/${item.link}`" v-for="item in menuItems">
          <div
            class="nav-item py-[15px] px-[20px] hover:bg-zinc-800	 rounded-[8px] cursor-pointer flex items-center gap-3">
            <component :is="item.icon"/>
            <span class="text-[14px] font-medium text-gray-400">{{ item.value }}</span>
          </div>
        </NuxtLink>
      </div>
    </aside>
    <div class="ml-[130px] px-[30px] pb-[200px]">
      <div class="header pt-[30px] pb-[50px] flex justify-between w-full max-h-[120px] items-center">
        <div class="header__input w-[30%] relative grid ml-auto">
          <form action="/">
            <input type="text" class="pl-[24px] py-[12px] w-full box-border rounded-[8px] relative z-99"
                   placeholder="Search">
            <search class="input-icon absolute top-[12px] right-[20px] z-99"/>
          </form>
        </div>
        <div class="ml-auto">
          <button class="self-end px-4 py-3 text-[14px] bg-blue-700 rounded-[5px]">Sign up</button>
        </div>
      </div>
      <div class="default-page">
        <swiper
          :slides-per-view="1"
          :space-between="20"
          :direction="'horizontal'"
          :slidesPerView="'auto'"
          class="rounded-[8px]"
          :mousewheel="true"
          :pagination="{clickable: true}"
          :modules="[Mousewheel, Pagination]"
        >
          <swiper-slide>
            <div class="absolute top-[30px] left-[30px] max-w-[350px]">
              <h3 class="text-[14px] mb-[16px]">Товар</h3>
              <h2 class="text-[20px] font-semibold mb-[24px]">Выгодная подписка Office 365 на&nbsp;все ваши
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
        <div class="mt-[32px]">
          <h2 class="font-medium text-[20px] mb-[16px]">Games</h2>
          <div class="grid grid grid-cols-4 gap-[32px]">
            <AppCard/>
          </div>

        </div>
        <div class="mt-[32px]">
          <h2 class="font-medium text-[20px] mb-[16px]">Products</h2>
          <div class="grid grid grid-cols-4 gap-[32px]">
            <div class="card-item">
              <img src="assets/img/111avav.webp" alt="">
              <div class="card__description">
                <h3 class="card__title text-[14px] font-normal mb-[4px]">Microsoft Office 365</h3>
                <div class="card__price text-[14px] font-medium">
                  <span>1000 ₽</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import {Mousewheel, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/vue";

import articles from "assets/svg/articles.vue"
import games from "assets/svg/games.vue"
import programs from "assets/svg/programs.vue"
import products from "assets/svg/products.vue"
import Logo from "~/assets/svg/Logo.vue";
import Search from "assets/svg/search.vue";

import 'swiper/css';
import 'swiper/css/pagination';

const menuItems = {
 0: {
  icon: programs,
  value: "Programs",
  link: "programs",
 },
 1: {
  icon: games,
  value: "Games",
  link: "games",
 },
 2: {
  icon: articles,
  value: "Articles",
  link: "articles",
 },
 3: {
  icon: products,
  value: "Products",
  link: "products",
 },
}


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

.logo {
  svg {
    min-height: 30px;
    min-width: 30px;
    max-width: 30px;
    max-height: 30px;

    path {
      fill: white;
    }
  }
}


.nav-item {
  svg {
    min-height: 24px;
    min-width: 24px;
    max-width: 24px;
    max-height: 24px;

    path {
      fill: rgb(156 163 175);
    }
  }
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

.header__input {
  transition: 0.2s;
}

.header__input:focus-within{
  width: 50%;
  transition: 0.2s;
}

.header__input:after {
  background: #000;
  content: "";
  cursor: default;
  display: none;
  height: 100vh;
  left: 0;
  opacity: 0;
  pointer-events: all;
  position: fixed;
  top: 0;
  -webkit-transition: all .2s ease 0s;
  -o-transition: all .2s ease 0s;
  transition: all .2s ease 0s;
  width: 100%;
  z-index: 10;
}


.header__input:focus-within:after {
  display: initial;
  opacity: .8;
}

.menu-panel {
  width: 110px;
  position: absolute;
  z-index: 10;
  background: #1e1e1e;
  transition: 0.3s;
  transition-delay: 0.1s;

  .nav-item span, h1 {
    transition: 0.2s;
    opacity: 0;
  }
}

.menu-panel:hover {
  width: 240px;
  z-index: 12;
  transition: 0.3s;


  .nav-item span, h1 {
    transition: 0.3s;
    transition-delay: 0.1s;
    opacity: 1;
  }
}

</style>
