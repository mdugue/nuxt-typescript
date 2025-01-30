<template>
  <MDC :value="markdown" tag="article" />
</template>

<script setup lang="ts">
const markdown = `
# Generics Basics

Generics allows to parameterize types. We know already \`Array<T>\` or \`ref<T>\` which uses generics.
Often \`T\` or \`P\` is used as a type parameter, but you can (and should) use more descriptive names.

Consider the following example:

\`\`\`ts
function getFirstArrayElement(arr: Array<any>) {
  return arr[0];
}

let myElements = [1, 2, 3];
const firstElement = getFirstArrayElement(myElements); // firstElement is of type any 🙁
\`\`\`

Generics to the rescue:

\`\`\`ts
function getFirstArrayElement<T>(arr: Array<T>) {
  return arr[0];
}

let myElements = [1, 2, 3];
const firstElement = getFirstArrayElement<number>(myElements); // firstElement is of type number 🙂
\`\`\`

Even better, TypeScript can infer the type parameter:

\`\`\`ts
function getFirstArrayElement<T>(arr: Array<T>) {
  return arr[0];
}

let myElements = [1, 2, 3];
const firstElement = getFirstArrayElement<number>(myElements); // firstElement is still number 😁

\`\`\`

## Advanced 🧪: Recreate common types for fun 

Generics support keywoards such as \`extends\` and \`infer\` to create more complex types and can use libraries from the ecosystem.
\`\`\`ts

function myRef<RefValue>(value: RefValue): LiteralToPrimitive<RefValue> {
  return value as any;
}

function myComputed<ComputeFunction extends () => any>(
  computeFuntion: ComputeFunction
): ReturnType<ComputeFunction> {
  return computeFuntion();
}

const myValue = myRef("hey");

const myComputedValue = myComputed(() => myValue);

\`\`\`\

# Documentation

- https://www.typescriptlang.org/docs/handbook/2/generics.html
- https://type-level-typescript.com/
`;
</script>
