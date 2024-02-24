<script setup lang="ts">

const route = useRoute()

const {data, pending} = await useFetch(`http://localhost:3000/api/${route.params.slug}`)

const item = data.value.value.find((item: number) => item.id === +route.params.id)

</script>

<template>

  {{item.title}}

</template>

<style scoped>

</style>
