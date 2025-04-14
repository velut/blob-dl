/**
 * This package exports a single function, {@link downloadBlob},
 * which can be used to download a blob from the browser and save it as a file.
 *
 * @packageDocumentation
 */

/**
 * `downloadBlob` allows the browser to download the given blob
 * letting a user save it as a file with the given name.
 *
 * @example
 * Basic usage:
 *
 * ```typescript
 * import { downloadBlob } from 'blob-dl';
 *
 * // Create a blob.
 * let blob = new Blob(['Hello, world!'], { type: 'text/plain' });
 *
 * // This is the name of the file to be saved.
 * let name = 'hello.txt';
 *
 * // Start the download.
 * downloadBlob(blob, name);
 * ```
 *
 * @param blob - a {@link https://developer.mozilla.org/en-US/docs/Web/API/Blob | Blob}
 * @param name - the name of the file to be saved
 */
export function downloadBlob(blob: Blob, name: string) {
	let a = document.createElement("a");
	a.href = URL.createObjectURL(blob);
	a.download = name;
	a.rel = "noopener";
	a.style = "display: none";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	setTimeout(() => {
		URL.revokeObjectURL(a.href);
	}, 30_000);
}
