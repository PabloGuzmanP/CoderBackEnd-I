import fs from "fs";
import paths from "./path.js";

const deleteImage = async (filename) => {
    const filepath = `${paths.images}/${filename}`;

    try {
        await fs.promises.unlink(filepath);
    } catch (error) {
        console.log("No exixte el archivo");
    }
};

export default {
    deleteImage,
};