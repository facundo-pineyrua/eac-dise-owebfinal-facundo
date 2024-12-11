function Equipo({ nombreEquipo, year, nombreEstadio, urlEquipo, redesSociales }) {
    return (
      <div>
        <p>Nombre equipo: {nombreEquipo || "Desconocido"}</p>
        <p>Año de fundación: {year || "Desconocido"}</p>
        <p>Nombre del Estadio: {nombreEstadio || "Desconocido"}</p>
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
  