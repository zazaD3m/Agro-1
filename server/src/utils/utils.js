import path from "path";
import { fileURLToPath } from "url";

const url = import.meta.url;
const __fileName = fileURLToPath(url);
const __dirname = path.dirname(__fileName);
const __rootPath = path.resolve(__dirname, "../");
const __uploadsPath = path.join(__dirname, "../../../uploads");

export { __rootPath, __uploadsPath };
