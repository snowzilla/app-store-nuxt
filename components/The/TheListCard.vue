<script setup lang="ts">

const route = useRoute()
const router = useRouter()

interface IListCardProps {
  title?: string,
  maxAmount?: number
  data: object
}

const props = withDefaults(
  defineProps<IListCardProps>(), {
    maxAmount: Infinity
  }
)

const getData = computed(() => {
  return props.maxAmount ? props.data.value.slice(0, props.maxAmount) : []
})

</script>

<template>
  <div class="mt-[32px]">
    <h2 v-if="props.title" class="font-medium text-[20px] mb-[16px]">{{ props.title }}</h2>
    <div class="grid grid-cols-4 gap-[32px]">
      <template v-for="item in getData" :key="item.id">
        <NuxtLink :to="`/${props.data.slug}/${item.id}`" >
          <slot name="default" :item="item"/>
        </NuxtLink>
      </template>
    </div>
  </div>
</template>
