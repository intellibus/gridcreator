# gridcreator

![Grid Creator — Automate Grid Creation In BigParser](assets/gridcreator.png)

> **THIS PROJECT IS STILL IN THE DESIGN PHASE**
>
> IDEAS & CONTRIBUTIONS ARE WELCOME
>
> An [Open Source Universe](https://github.com/intellibus/approach) Project

---

## Contents

- [gridcreator](#gridcreator)
  - [Contents](#contents)
  - [Features ✨](#features-)
  - [Install 🛠](#install-)
  - [Usage 🔭](#usage-)
  - [Documentation 🛰](#documentation-)
  - [Contributing 🌎](#contributing-)
  - [License ⚖️](#license-️)

## Features ✨

- Create Grids In BigParser `Planned`
- Manage Grids in BigParser via Local .grid files `Planned`
- Sync Grid Data Models with .grid files `Planned`
- Typescript Support `Planned`

## Install 🛠

```sh
npm install gridcreator
```

## Usage 🔭

Read more about the [Design](https://github.com/intellibus/gridcreator/blob/main/DESIGN.md) behind `gridcreator` here.

```typescript
import { createGrid } from 'gridcreator';

const { data, error } = await createGrid({
  columns: {
    'Name': 'String',
    'Age': 'Number',
    'Date of Birth': 'Date',
  }
});

// { data: { gridId: '...' }, error: null }
```

## Documentation 🛰

`gridcreator` *is under active development, documentation will be added once an initial release is ready.*

## Contributing 🌎

We would love for you to contribute your ideas, code, & fixes to `gridcreator`.

We encourage everyone to read our [Design Document](https://github.com/intellibus/gridcreator/blob/main/DESIGN.md) to learn more about the thought process behind gridcreator.

Also check out the [rewards](https://github.com/intellibus/approach/blob/main/REWARDS.md) offered for contributing to the [Open Source Universe](https://github.com/intellibus/approach).

## License ⚖️

MIT
