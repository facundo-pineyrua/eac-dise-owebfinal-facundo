import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Equipo } from "./components/Equipo";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
 <nav>
 <ul>
   <li>
     <Link to="/equipoFavorito">Ver equipo favorito</Link>
   </li>
   <li>
     <Link to="/equipos">Ver todos los equipos</Link>
   </li>
 </ul>
</nav>

  return (
    <nav>
 <ul>
   <li>
     <Link to="/equipoFavorito">Ver equipo favorito</Link>
   </li>
   <li>
     <Link to="/equipos">Ver todos los equipos</Link>
   </li>
 </ul>
</nav>
    
  );
}

export default App;