function Noticia() {
    const noticia = {
      titulo: "Este es el titulo de la noticia",
      descrip: "Esta es la descripción de la noticia"
    }
  
    const {titulo, descrip} = noticia;
  
    return (
      <div className="noticia">
        <h1 className="noticia__titulo">Titulo: {titulo}</h1>
        <p className='noticia__descrip'>{descrip}</p>
      </div>
    );
  }

export default Noticia