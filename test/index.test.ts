import { expect, test } from "vitest";
import { downloadBlob } from "../src/index";

test("downloadBlob export is defined", () => {
	expect(downloadBlob).toBeTruthy();
});
