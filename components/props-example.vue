<!-- 
 TODO (for fun🎉):
 - create a proper FirstNameLastName type, 
 - extract it 

  -->
<template>
  <div>
    {{ JSON.stringify(user, null, 2) }}
  </div>
</template>
<script setup lang="ts">
type FirstNameLastName = `${string} ${string}`;

const { user } = defineProps<{
  user: { name: FirstNameLastName; age: number };
}>();
</script>
