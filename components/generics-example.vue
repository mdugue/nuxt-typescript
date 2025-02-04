<template>
  <div v-for="item in props.list">{{ props.onItemRender(item) }}</div>
</template>

<script setup lang="ts" generic="ArrayType">
const props = defineProps<{
  list: Array<ArrayType>;
  onItemRender: (item: ArrayType) => string;
}>();
</script>
