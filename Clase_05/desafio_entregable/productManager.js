const { log } = require("console");
const fs = require("fs");
const path = require("path")

class ProductManager {

    #ruta
    #productos

    constructor(ruta){
        this.#ruta = ruta
        this.#productos = []
    };

    #generarId(){
        let id = 0;
        this.#productos.forEach(producto => {
            if(producto.id > id){
                id = producto.id;
            }
        });
        return id + 1;
    };

    addProduct = async (title, description, price, thumbnail, code, stock) => {
        const producto = {
            id: this.#generarId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.#productos.push(producto);
        return await fs.promises.writeFile(this.#ruta, JSON.stringify(this.#productos, null, "\t"));
    };

    getProducts = async () => {
        const products = await fs.promises.readFile(this.#ruta, "utf-8");
        console.log(products);
    };

    getProductsById = async (id) => {
        const data = await this.convertData()

        const product = data.find(product => product.id === id);

        if(product){
            console.log(product);
        } else {
            console.log("No se encontró ese ID en el archivo.");
        };
    };

    updateProduct = async (id, updateFields) => {
        const data = await this.convertData()

        const productIndex = data.findIndex(product => product.id === id);

        if(productIndex !== -1){
            data[productIndex] = {
                ...data[productIndex],
                ...updateFields
            }
            await fs.promises.writeFile(this.#ruta, JSON.stringify(data, null, "\t"));
            console.log("Producto actualizado:", data[productIndex]);
        } else {
            console.log("No se encontro ese id en el archivo, por lo cual no se puede actualizar.");
        };
    };

    deleteProduct = async (id) => {
        const data = await this.convertData()

        const newProducts = data.filter(item => item.id !== id)

        if(newProducts.length < data.length){
            await fs.promises.writeFile(this.#ruta, JSON.stringify(newProducts, null, "\t"));
            console.log("Se elimino correctamente!");
        } else {
            console.log("No se pudo eliminar.");
        };
    };

    convertData = async () => {
        const data = await fs.promises.readFile(this.#ruta, "utf-8");
        return JSON.parse(data)
    }
}

const rutaArchivo = path.join("files", "products.json");

const products = async () => {
    let productManager = new ProductManager(rutaArchivo);

    await productManager.addProduct("Milk", "Beverage", 3.00, "prueba.jpg", 101, 30);

    await productManager.addProduct("Rice", "Food", 13.00, "test.jpg", 102, 10);

    await productManager.addProduct("Bread", "Food", 8.00, "test1.jpg", 103, 70);
    console.log("---------------------------");

    await productManager.getProducts();
    console.log("---------------------------");

    await productManager.getProductsById(2);
    console.log("---------------------------");

    await productManager.deleteProduct(2);
    console.log("---------------------------");

    await productManager.updateProduct(3, {price: 5})
    console.log("---------------------------");

    await productManager.getProducts();
    console.log("---------------------------");
}

products()