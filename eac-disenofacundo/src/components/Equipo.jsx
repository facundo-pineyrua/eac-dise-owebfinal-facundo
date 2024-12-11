function Equipo({ nombreEquipo, year, nombreEstadio, urlEquipo, redesSociales }) {
    return (
      <div>
        <p>Nombre equipo: {nombreEquipo || "Racing"}</p>
        <p>Año de fundación: {year || "6 de Abril de 1919"}</p>
        <p>Nombre del Estadio: {nombreEstadio || "Estadio Presidente Perón"}</p>
        <img src={urlEquipo}></img>
      <div>
        {redesSociales?.map((red, index) => (
          <a key={index} href={red} target="_blank" rel="noopener noreferrer">
            Redes Sociales {index + 1}
          </a>
        ))}
      </div>
    </div>
    );
  }
  
  export { Equipo };
  