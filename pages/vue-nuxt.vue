<!-- 


Later
 - array with filtering

  -->
<template>
  <PropsEmitExample
    :users="[
      { name: 'Fabian B', age: 42 },
      { name: 'Fabian D', age: 41 },
    ]"
    @clicked="(name) => console.log(name)"
  />
  <div class="flex gap-2 flex-col">
    <div
      class="w-40 h-40 bg-red-100"
      @mousemove="(event) => console.log(event.clientX, event.clientY)"
    >
      My Div
    </div>
    <MDC :value="markdown" tag="article" />
  </div>
</template>

<script setup lang="ts">
import type { Events } from "vue";

const markdown = `
# Vue & Nuxt & Typescript

## props, emits, model & slots

props, emits, model & slots can be typed via generics

prefer **type declaration** over ~~runtime declaration~~ due to better TypeScript support, eg. for complex types, for reusing types, type ecosystem

\`\`\`typescript

const props = defineProps<{
  foo: string
  bar?: number
}>()

// Vue 3.3+: alternative, more succinct syntax
const emit = defineEmits<{
  change: [id: number] // named tuple syntax
  update: [value: string]
}>()

// Vue 3.4+
const modelValue = defineModel<string>()

// Vue 3.3+
const slots = defineSlots<{
  default(props: { msg: string }): any
}>()

\`\`\`

## ref, reactive, computed
ref, reactive, computed usually benefit from type inference but can also be typed via generics.

\`\`\`typescript

// implicit type inference
const count = ref(0)
const user = ref({
  name: 'Mario',
  age: 23
})
const double = computed(() => count.value * 2)

// explicit type declaration. More verbose, but nuanced and more readable
const count = ref<number>(0)
const user = ref<{ name: string, age?: number }>({
  name: 'Mario',
  age: 23
})

\`\`\`



## Event Handlers

Inline Event handlers are typed by default. External type handlers need explicit type declaration.

\`\`\`vue
<div
  class="w-40 h-40 bg-red-100"
  @mousemove="(event) => console.log(event.clientX, event.clientY)"
/>
\`\`\`

\`\`\`vue
<div class="w-40 h-40 bg-red-100" @mousemove="trackMousePosition" />
\`\`\`

\`\`\`typescript
function trackMousePosition(event: MouseEvent) {
  console.log(event.clientX, event.clientY);
}

// alternatively
const trackMousePosition: HTMLElement["onmousemove"] = (event) => {
  console.log(event.clientX, event.clientY);
};
\`\`\`


# Documentation
- https://vuejs.org/api/sfc-script-setup#type-only-props-emit-declarations
- https://vuejs.org/guide/typescript/composition-api.html


# Playground

> - props-example component
> - props-emit-example component
>   - store as ref
> - model-example
>   - connect ref to v-model

`;

const user = ref<{ name: string; age?: number }>({
  name: "Mario",
  age: 23,
});

user.value = { name: "Mario2" };
</script>
