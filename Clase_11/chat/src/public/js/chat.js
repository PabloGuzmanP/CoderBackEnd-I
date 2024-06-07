const socket = io();
const chatText = document.getElementById("message");
const chatLogs = document.getElementById("message-logs");

let user = null;

Swal.fire({
    title: "identificate",
    input: "text",
    confirmButtonText: "Ingresar",
    allowOutSideClick: false,
    inputValidator: (value) => {
        return !value && "ingresa tu nombre de usuario";
    },
}).then((result) => {
    user = {name: result.value};
    socket.emit("authenticated", user);
});

chatText.onkeyup = (event) => {
    if(event.key === "Enter"){
        socket.emit("message", {user, message: chatText.value})
    }
};

socket.on("message-logs", (data) => {
    chatLogs.innerHTML = "";

    data.messages.forEach((message) => {
        const li = document.createElement("li")
        li.innerHTML = `${message.user.name} dice: ${message.message}`
        chatLogs.append(li);
    });
});

socket.on("new-user", (data) => {
    Swal.fire({
        toast: true,
        position: "top-end",
        timer: 3000,
        timeProgressBar: true,
        title: `${data.name} se ha unido al chat!!!`,
        icon: "success"
    });
})