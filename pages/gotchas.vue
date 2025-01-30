<template>
  <MDC :value="markdown" tag="article" />
  <!-- <ExcessProperty :user="" /> -->
</template>
<script setup lang="ts">
const markdown = `
# Gotchas and quirks

## Excess Property Checks

TypeScript only checks for extra properties when assigning object literals directly.

\`\`\`ts
type User = { id: number };

const user1: User = { id: 1, name: "Alice" }; // ERROR
const user2 = { id: 1, name: "Alice" };
const user3: User = user2; // ✅ No error! Indirect assignment bypasses the check.
\`\`\`

the same can apply e.g. to props in Vue components.

If this is really an issue, you can use a helper function to enforce strict property checks:

\`\`\`ts
interface Animal {
  speciesName: string;
  legCount: number;
}

function serializeBasicAnimalData<T extends Animal>(
  a: T & StrictPropertyCheck<T, Animal, 'Excess properties are not allowed'>
) {
  // Function implementation
}

// Example usage:
const validAnimal = {
  speciesName: 'Frog',
  legCount: 4,
};

serializeBasicAnimalData(validAnimal); // ✅ No error

const invalidAnimal = {
  speciesName: 'Spider',
  legCount: 8,
  extraProperty: 'Not allowed',
};

serializeBasicAnimalData(invalidAnimal); // ❌ Error: Excess properties are not allowed
\`\`\`
`;
</script>
