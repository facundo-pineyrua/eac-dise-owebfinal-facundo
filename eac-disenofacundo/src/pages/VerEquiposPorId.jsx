import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 

function VerEquipoPorId() {
  const { id } = useParams(); 
  const [equipo, setEquipo] = useState(null); 

  useEffect(() => {
    async function obtenerEquipoPorId() {
      const response = await fetch(
        `https://www.thesportsdb.com/api/v1/json/3/lookupteam.php?id=${id}`
      );
      const data = await response.json();
      if (data.teams) {
        setEquipo(data.teams[0]); 
    }
    obtenerEquipoPorId(); 
} [id]);
  if (!equipo) {
    return null; 
  }

  return (
    <div>
      <h2>{equipo.strTeam}</h2>
      <p>Año de fundación: {equipo.intFormedYear}</p>
      <p>Estadio: {equipo.strStadium}</p>
      <p>Redes sociales: {equipo.strFacebook}</p>
      <img src={equipo.strBadge} alt={equipo.strTeam} />
    </div>
  );
}

export { VerEquipoPorId };