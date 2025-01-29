<template>
  <div class="m-4">
    <h1 class="font-bold text-2xl">
      Nuxt TypeScript
    </h1>
    <nav>
      <NuxtLink to="/types">Primitive Types</NuxtLink> |
      <NuxtLink to="/interfaces">Interfaces & Types</NuxtLink> |
      <NuxtLink to="/inferencing">Type Inferencing</NuxtLink>
    </nav>
    <NuxtLayout>
      <div class="w-full h-full my-4">
        <NuxtPage />
      </div>
    </NuxtLayout>

  </div>
</template>
