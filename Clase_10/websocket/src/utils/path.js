import Path from "path";

const paths = {
    root: Path.dirname(""),
    src: Path.join(Path.dirname(""), "src"),
    public: Path.join(Path.dirname(""), "src", "public"),
    views: Path.join(Path.dirname(""), "src", "views"),
};

export default paths;