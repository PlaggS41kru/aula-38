import api from "./api.js";

// "http://localhost:3000/uploads/";

const buscarUsuario = "http://localhost:3000/usuarios/9"

async function renderizarInformacoesDoUsuario() {
    try {
        const usuario = await api("usuarios/9");

        const usuariosArea = document.querySelector(".perfil__photo");

        for (const video of videos) {
        const canal = await api(`canais/${video.canalID}`);
        };
    }

}

