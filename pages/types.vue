<template>
  <MDC :value="markdown" tag="article" class="" />
</template>

<script setup lang="ts">
const markdown = `

# Type Basics

## Common Types
### Primitives

Start with lowercase letter. _(Only those. Otherwise PascalCase is highly recommended for type names!)_
- \`string\`, \`number\`, \`boolean\`, …
- \`null\`, \`undefined\`, \`unknown\`, _\`any\` ⚠️_

### Object Types
- \`object\`, \`{}\` (empty object)
- \`{ name: string, age: number }\`

### Arrays
- \`string[]\`, \`number[]\`, \`boolean[]\`, \`{ name: string, age: number }[]\`
- \`Array<string>\`, \`Array<number>\`, \`Array<boolean>\`, \`Array<{ name: string, age: number }>\`

### Tuples
- \`[string, number]\`, \`[string, number, boolean]\`

### Unions
- \`string | number\`, \`string | boolean | undefined\`, \`string | {name: string, age: number}[]\`
- **type narrowing** can help to get actually used type. Eg: \`if (typeof x === 'string') { x.toUpperCase() }\`

### Template Literal
\`\`\`ts
const userId: \`User$\{string\}\`
const nodeId: \`$\{string\}:$\{string\}\`
const score: \`\${number}\:$\{number\}\`
\`\`\`

### Type Aliases & Interfaces

_Personally I prefer type aliases for composition and interfaces for declaration merging (libraries)._
- type alias: \`type Person = { name: string, age: number }\`
- interface: \`interface Person { name: string, age: number }\`



## Type Annotations
### Variables
- explicit: \`let x: string = 'hello'\`, \`let y: number = 42\`, \`let z: Array<string> = ["hallo", "Fabian"]\`
- implicit: \`let x = 'hello'\`, \`let y = 42\`, \`let z = ["hallo", "Fabian"]\`
- literal (inferenced): \`let x: 'hello'\`, \`let y: 42\`

## Functions _(parameters, optional parameters & return types)_
- explicit: \`function greet(name?: string): string { return 'Hello, ' + name }\`
- implicit (inferenced): \`function greet(name = "Fabian") { return 'Hello, ' + name }\`

## Playground

> - Examples for any & unkown
>   - any: let test = 'hello'; test = 2;
>   - unknown -> narrowing: let t: unknown = 10; if (typeof t === "string") console.log(t.toUpperCase()); if (typeof t === "number") console.log(t.toFixed(2));
> - Examples for type aliases & interfaces
>   - type Staff User & { department: string }
>   - interface Staff extends User { department: string }
> - Examples for functions
>   - inference
>   - destructuring

## Documentation
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

`;

function greet({ name }: { name: string; age: number }): string {
  return "Hello, " + name;
}

/* greet() */
</script>
