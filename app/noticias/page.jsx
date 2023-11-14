import Link from "next/link";

const { obtener, url_api } = require("@/hooks/Conexion");

export default async function Page() {
    const noticias = await obtener('servidorNoticias.php?action=refrescaNoticia');
    return (
        <div className="row">
            <h1>Administrar Noticias</h1>
            <div className="container-fluid">
                <div className="col-4">
                    <Link href={"/noticias/nuevo"} className="btn btn-success">Nuevo</Link>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nro</th>
                            <th>Noticia</th>
                            <th>Imagen</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {noticias.map((dato, i) => (
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{dato.texto}</td>
                                <td><img src={url_api() + dato.imagen} className="card-img-top" alt="..." /></td>
                                <td>TODO</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}