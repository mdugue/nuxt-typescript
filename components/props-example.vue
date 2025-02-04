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

export type Props = {
  user?: { name: FirstNameLastName; age: number };
};

const { user } = defineProps<Props>();
</script>
