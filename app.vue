<script setup>
import articles from "assets/svg/articles.vue"
import games from "assets/svg/games.vue"
import programs from "assets/svg/programs.vue"
import products from "assets/svg/products.vue"
import Logo from "~/assets/svg/Logo.vue";
import Search from "assets/svg/search.vue";

const router = useRouter()

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

function goRoute (link) {
 router.push({ path: `/${link}`, params: { slug: link } })
}

</script>

<template>
  <div class="max-w-[1440px] mr-[auto] ml-[auto] h-screen overflow-y-scroll">
    <aside
      class="menu-panel pt-[30px] px-[20px] h-full flex flex-col gap-[50px] border-l-[1px] border-r-[1px] border-gray-500">
      <NuxtLink to="/" class="logo flex items-center pl-[20px] pt-[5px] gap-2">
        <Logo/>
        <h1 class="text-2xl	font-medium">
          AppStore
        </h1>
      </NuxtLink>

      <div class="nav-list">
        <NuxtLink @click="goRoute(item.link)" v-for="item in menuItems">
          <div
            class="nav-item py-[15px] px-[20px] hover:bg-zinc-800	 rounded-[8px] cursor-pointer flex items-center gap-3">
            <component :is="item.icon"/>
            <span class="text-[14px] font-medium text-[#8e8e8e]">{{ item.value }}</span>
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
      <NuxtPage/>
    </div>
  </div>
</template>

<style>

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


.header__input {
  transition: 0.2s;
}

.header__input:focus-within {
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
  transition: all .3s ease 0s;
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

</style>
