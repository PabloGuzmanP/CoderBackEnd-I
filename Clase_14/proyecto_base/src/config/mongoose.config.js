import { connect } from "mongoose";

const config = () => {
    const URI = "mongodb+srv://juanpagu2101:Quemiralampara@clusterbackend.urvvi7i.mongodb.net/school?retryWrites=true&w=majority&appName=ClusterBackEnd";

    connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "school"
    })
    .then(() => console.log("Conectado a MongoDB"))
    .catch((error) => console.error("Fallo en la conexión a MongoDB:", error));
};

export default {
    config
};
