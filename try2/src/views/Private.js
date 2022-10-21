import {Link} from 'react-router-dom';
import {LOGOUT} from "../config/routes/paths";
function Private() {
  return (
    <div>
      Mi ruta privada
      <Link to={LOGOUT}>Cerrar sesión</Link>
    </div>
  );
}

export default Private;