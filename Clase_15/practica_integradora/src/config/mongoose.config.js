import { connect, Types } from "mongoose";

const connectDB = () => {
    const URI = "mongodb+srv://juanpagu2101:Quemiralampara@clusterbackend.urvvi7i.mongodb.net/?retryWrites=true&w=majority&appName=ClusterBackEnd";

    connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "university"
    })
    .then(() => console.log("Conectado a MongoDB"))
    .catch((error) => console.error("Fallo en la conexión a MongoDB:", error));
};

const isValidID = (id) => {
    return Types.ObjectId.isValid(id);
};

export default {
    connectDB,
    isValidID
};
