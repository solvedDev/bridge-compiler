import { FileHandler } from "./HandlerDef";
import { promises as fs } from "fs";
import { dirname } from "path";

export class DefaultHandler extends FileHandler {
    async declare() {}
    async register() {}
    async resolve() {
        await fs.mkdir(dirname(this.to_path), { recursive: true });
        await fs.copyFile(this.from_path, this.to_path);
    }
}