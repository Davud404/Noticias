import { ListaNoticias } from "@/componentes/noticias/listaNoticias";
export default async function Home() {
  return (

    <div className="container">
      <p className="h1">Noticias</p>
      <ListaNoticias></ListaNoticias>
    </div>
  )
}
