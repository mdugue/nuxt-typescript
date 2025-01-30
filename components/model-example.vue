<!-- 
 TODO:
 - define a proper User type
 - expose it via a model
  -->
<template>
  <div class="flex gap-2 flex-col">
    {{ JSON.stringify(users, null, 2) }}
    <div
      v-for="user in users"
      :key="user.name"
      :class="[
        'rounded shadow p-2 m-2',
        modelValue?.name === user.name ? 'bg-green-200' : '',
      ]"
      @click="modelValue = user"
    >
      {{ user.name }} ({{ user.age }})
    </div>
  </div>
</template>
<script setup lang="ts">
type FirstNameLastName = `${string} ${string}`;
export type User = { name: FirstNameLastName; age: number };

const { users } = defineProps<{
  users: User[];
}>();

const modelValue = defineModel<User>();
</script>
