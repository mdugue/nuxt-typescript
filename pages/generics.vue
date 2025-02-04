<template>
  <!--NumberGenericsExample
    :list="[1, 2, 3]"
    v-on:item-render="(item) => `hey ${item}`"
  /-->
  <MDC :value="markdown" tag="article" />
</template>

<script setup lang="ts">
import type { LiteralToPrimitive, LiteralToPrimitiveDeep } from "type-fest";
import GenericsExample from "../components/generics-example.vue";
const NumberGenericsExample = GenericsExample<number>;

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
- https://www.typescriptlang.org/docs/handbook/utility-types.html
`;
/*
function getFirstArrayElement<ArrayType>(arr: Array<ArrayType>) {
  return arr[0];
}

let myNumberElements = [1, 2, 3];
let myStringElements = ["hey", "you"];
let myBooleanElements = [true, true];
let myMixedElements = [1, "hey"];

const myFirstNumber = getFirstArrayElement(myNumberElements);
const myFirstString = getFirstArrayElement(myStringElements);
const myFirstMixed = getFirstArrayElement(myMixedElements);
getFirstArrayElement(myBooleanElements);

myFirstNumber.toLocaleString(); */

function myComputed<MyReturnType>(callback: () => MyReturnType): MyReturnType {
  return callback();
}

const myComputedValue = myComputed(() => 3);

function myRef<RefValue>(value: RefValue): LiteralToPrimitive<RefValue> {
  return value as any;
}

const myValue = myRef(3);
</script>
