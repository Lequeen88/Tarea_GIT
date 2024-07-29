
function LogIn() {
    let userName = document.getElementById("userName").value;

    if (userName !== null) {
        Swal.fire({
            title: "Log In Exitoso",
            text: `¡Bienvenido/a a tu Agenda Electrónica, ${userName}!`,
            icon: "success"
        }).then(() => {
            setTimeout(() => {
                window.location.href = "MiPerfil.html";
            },);
        });
    }
}

function SignUp() {
    let userName = document.getElementById("userName").value;

    if (userName !== null) {
        Swal.fire({
            title: "Sign Up Exitoso",
            text: `¡${userName}, ahora puedes iniciar seccion!`,
            icon: "success"
        }).then(() => {
            // Se puede usar para que espere cierto tiempo antes de redirigir, no le puse tiempo para que me lleve inmediatamente
            setTimeout(() => {
                window.location.href = "index.html";
            },);
        });
    }
}