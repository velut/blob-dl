# ⬇️ blob-dl

[![Build status](https://img.shields.io/github/actions/workflow/status/velut/blob-dl/main.yml?branch=main)](https://github.com/velut/blob-dl/actions?query=workflow%3ACI)
[![Coverage](https://img.shields.io/codecov/c/gh/velut/blob-dl)](https://codecov.io/gh/velut/blob-dl)
[![jsDocs.io](https://img.shields.io/badge/jsDocs.io-reference-blue)](https://www.jsdocs.io/package/blob-dl)
![Language](https://img.shields.io/github/languages/top/velut/blob-dl)
[![npm](https://img.shields.io/npm/v/blob-dl)](https://www.npmjs.com/package/blob-dl)
[![License](https://img.shields.io/github/license/velut/blob-dl)](https://github.com/velut/blob-dl/blob/main/LICENSE)

This package exports a single function, `downloadBlob`, which can be used to download a [blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) from the browser and save it as a file.

## Features

- Simple API and usage
- Small size (< 1KB)
- No dependencies
- Written in Typescript
- ESM only

## API & Package Info

```typescript
downloadBlob: (blob: Blob, name: string) => void;
```

- Explore the API on [**jsDocs.io**](https://www.jsdocs.io/package/blob-dl)
- View package contents on [**unpkg**](https://unpkg.com/blob-dl/)
- View repository on [**GitHub**](https://github.com/velut/blob-dl)

## Install

Using `npm`:

```
npm i blob-dl
```

Using `yarn`:

```
yarn add blob-dl
```

Using `pnpm`:

```
pnpm add blob-dl
```

Using `bun`:

```
bun add blob-dl
```

## Usage

Basic usage:

```typescript
import { downloadBlob } from "blob-dl";

// Create a blob.
let blob = new Blob(["Hello, world!"], { type: "text/plain" });

// This is the name of the file to be saved.
let name = "hello.txt";

// Start the download in the browser.
downloadBlob(blob, name);
```

## License

```
MIT
```

MIT License. See [LICENSE](./LICENSE) file.

Copyright (c) 2025 Edoardo Scibona.
