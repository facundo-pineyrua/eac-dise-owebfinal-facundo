import { useEffect, useState } from "react";
import { Equipo } from "../components/Equipo";

function EquipoFavorito() {
  const [equipo, setEquipo] = useState({});
  useEffect(() => {
    async function obtenerDatos() {
      const response = await fetch(
        "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Uruguayan%20Primera%20Division"
      );
      const data = await response.json();
      const equipoFavorito = data.teams.find(
        (equipo) => equipo.strTeam === "Racing Montevideo"
      );
      console.log("data", data);
      console.log("equipoFavorito", equipoFavorito);
      setEquipo(equipoFavorito);
    }
    obtenerDatos();
  }, []);
  return (
    <Equipo
      nombreEquipo={equipo.strTeam}
      year={equipo.intFormedYear}
      nombreEstadio={equipo.strStadium}
      urlEquipo={equipo.strBadge}
      redesSociales={[
        equipo.strFacebook,
        equipo.strTwitter,
        equipo.strInstagram,
      ]}
    />
  );
}

export { EquipoFavorito };
