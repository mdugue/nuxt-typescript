<template>
  <div class="m-4">
    <nav
      class="flex gap-3 font-medium text-gray-600 sticky top-0 bg-white/80 backdrop-blur-sm py-4"
    >
      <NuxtLink active-class="underline text-black" to="/types"
        >Type Basics</NuxtLink
      >
      <NuxtLink active-class="underline text-black" to="/vue-nuxt"
        >Vue & Nuxt & Typescript</NuxtLink
      >
      <NuxtLink active-class="underline text-black" to="/generics"
        >Generics</NuxtLink
      >
      <NuxtLink active-class="underline text-black" to="/gotchas"
        >Gotchas</NuxtLink
      >
      <NuxtLink active-class="underline text-black" to="/helpful-patterns"
        >Helpful Patterns</NuxtLink
      >
    </nav>
    <NuxtLayout>
      <div
        class="my-8 prose max-w-4xl prose-code:hover:bg-gray-100 prose-pre:text-black prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200"
      >
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>
