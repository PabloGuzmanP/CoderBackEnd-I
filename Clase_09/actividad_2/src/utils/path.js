import Path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const path = {
    root: __dirname,
    src: Path.join(__dirname, ".."),
    public: Path.join(__dirname, "..", "public"),
    views: Path.join(__dirname, "..", "views"),
};

export default path;