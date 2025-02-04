<template>
  <MDC :value="markdown" tag="article" />
  <div v-for="user in userList">
    <div v-if="user.__typename === 'StaffMember'">{{ user.role }}</div>
    <div v-else>{{ user.accessLevel }}</div>
  </div>
</template>
<script setup lang="ts">
const markdown = `
# Helpful Patterns & keywords

Some patterns that are practical and useful in everyday TypeScript development.
The examples here use plain TypeScript but can be applied to Vue templates as well.

## typeof & keyof

\`\`\`ts
const i18nDictionary = {
  hello: "Hallo",
  goodBye: "Auf Wiedersehen",
} as const;

type I18nDictionaryKeys = keyof typeof i18nDictionary;

function translate(key: I18nDictionaryKeys) {
  return i18nDictionary[key];
}
\`\`\`

## Arrays

### \`typeof\` as type guard for primitive types and null checks

\`\`\`ts
const numbersAndStrings = [10, 18, 23, 42, "hey"];
const onlyNumbers = numbersAndStrings.filter(
  (item) => typeof item === "number"
);

const maybeNumbers = [10, 18, 23, undefined, null, 42];
const definitelyNumbers = maybeNumbers.filter((item) => item != null);
\`\`\`

### Typical GraphQL response with explicit discriminators

\`\`\`ts
type StaffMember = {
  __typename: "StaffMember";
  name: string;
  role: string
};
type Admin = {
  __typename: "Admin";
  name: string;
  accessLevel: number;
};

const userList: (StaffMember | Admin)[] = [
  { name: "John", role: "Developer", __typename: "StaffMember" },
  { name: "Mara", role: "Sales", __typename: "StaffMember" },
  { name: "Jane", accessLevel: 5, __typename: "Admin" },
];

const staffMembers = userList.filter(
  (user) => user.__typename === "StaffMember"
);
const admins = userList.filter((user) => user.__typename === "Admin");
\`\`\`

### implicit type guards with \`in\`

\`\`\`ts
type User = { name: string };
type StaffMember = User & { role: string };
type Admin = User & { accessLevel: number };

const userList: (StaffMember | Admin)[] = [
  { name: "John", role: "Developer" },
  { name: "Mara", role: "Sales" },
  { name: "Jane", accessLevel: 5 },
];

const staffMembers = userList.filter((user) => "role" in user);
const admins = userList.filter((user) => "accessLevel" in user);
\`\`\`

## as const

\`const person = {name: "Franky"}\` is not really a constant.
You can still change the name. \`as const\` makes it a real constant.

\`\`\`ts
const person = {name: "Franky"} as const;
person.name = "Fabian"; // Error: Cannot assign to 'name' because it is a read-only property.
\`\`\`

## utility types
- Omit, Pick, Partial, Required, Readonly, …

## pattern matching
- https://github.com/gvergnaud/ts-pattern

## Type guards in vue template

\`\`\`ts
let test: string | number = Math.random() > 0.5 ? 3 : "test";
\`\`\`

\`\`\`vue
<template>
  <div v-if="typeof test === 'number'">{{ test.toExponential() }}</div>
  <div v-else>{{ test.includes("t") }}</div>
</template>
\`\`\`





## Documentation
- https://www.typescriptlang.org/docs/handbook/utility-types.html
- https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
`;

const i18nDictionary = {
  hello: "Hallo",
  goodBye: "Auf Wiedersehen",
  Hi: "Hi",
} as const;

type DictionaryType = typeof i18nDictionary;

type I18NKeys = keyof DictionaryType;

function translate(key: I18NKeys) {
  return i18nDictionary[key];
}

translate("Hi");

type MyArrayType = Array<string>;
type MyArrayEntryType = MyArrayType[number];

type MyToupleType = [string, number];
type MyToupleEntry = MyToupleType[number];
type MyToupleEntryFirst = MyToupleType[0];
type MyToupleEntrySecond = MyToupleType[1];

// --

type StaffMember = {
  __typename: "StaffMember";
  name: string;
  role: string;
};
type Admin = {
  __typename: "Admin";
  name: string;
  accessLevel: number;
};

const userList: (StaffMember | Admin)[] = [
  { name: "John", role: "Developer", __typename: "StaffMember" },
  { name: "Mara", role: "Sales", __typename: "StaffMember" },
  { name: "Jane", accessLevel: 5, __typename: "Admin" },
];

userList.map((user) => {
  if (user.__typename === "StaffMember") {
    console.log(user.role);
  }
});

userList.map((user) => {
  if ("role" in user) {
    console.log(user.role);
  }
});

const myAdmins = userList.filter((user) => user.__typename === "Admin");
const myStaffMembers = userList.filter(
  (user) => user.__typename === "StaffMember",
);
</script>
