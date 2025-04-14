# ⬇️ download-blob

[![Build status](https://img.shields.io/github/actions/workflow/status/velut/download-blob/main.yml?branch=main)](https://github.com/velut/download-blob/actions?query=workflow%3ACI)
[![Coverage](https://img.shields.io/codecov/c/gh/velut/download-blob)](https://codecov.io/gh/velut/download-blob)
[![jsDocs.io](https://img.shields.io/badge/jsDocs.io-reference-blue)](https://www.jsdocs.io/package/download-blob)
![Language](https://img.shields.io/github/languages/top/velut/download-blob)
[![npm](https://img.shields.io/npm/v/download-blob)](https://www.npmjs.com/package/download-blob)
[![License](https://img.shields.io/github/license/velut/download-blob)](https://github.com/velut/download-blob/blob/main/LICENSE)

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

- Explore the API on [**jsDocs.io**](https://www.jsdocs.io/package/download-blob)
- View package contents on [**unpkg**](https://unpkg.com/download-blob/)
- View repository on [**GitHub**](https://github.com/velut/download-blob)

## Install

Using `npm`:

```
npm i download-blob
```

Using `yarn`:

```
yarn add download-blob
```

Using `pnpm`:

```
pnpm add download-blob
```

Using `bun`:

```
bun add download-blob
```

## Usage

Basic usage:

```typescript
import { downloadBlob } from "download-blob";

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
