<!-- 
 TODO:
 - a list of users
 - log who is clicked
  -->
<template>
  <div class="flex gap-2 flex-col">
    {{ JSON.stringify(users, null, 2) }}
    <div
      v-for="user in users"
      :key="user.name"
      class="rounded shadow p-2 m-2"
      @click="emit('clicked', user.name)"
    >
      {{ user.name }} ({{ user.age }})
    </div>
  </div>
</template>
<script setup lang="ts">
type FirstNameLastName = `${string} ${string}`;

const { users } = defineProps<{
  users: { name: FirstNameLastName; age: number }[];
}>();

const emit = defineEmits<{
  clicked: [name: FirstNameLastName];
}>();
</script>
