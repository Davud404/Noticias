import { enviar } from "./Conexion";
import { save, saveToken } from "./SessionUtil";

export async function inicio_sesion(data) {
    const sesion = await enviar('servidorNoticias.php', data);
    if(sesion[0].code == 200 && sesion[0].jwt) {
        saveToken(sesion[0].jwt);
        save('id', sesion[0].external);
        save('user', sesion[0].usuario);
    }
    return sesion;
}