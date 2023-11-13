import Link
 from "next/link";
export default function Menu() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link href="/" className="navbar-brand">Noticias</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/" className="nav-link active" aria-current="page">Principal</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="prueba" className="nav-link active" aria-current="page">Prueba</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/inicio_sesion" className="nav-link active" aria-current="page">Acceder</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}