import { useContext } from 'react';
import '../../../index.css';
import AdminNavBar from '../Components/AdminNavBar';
import DashContext from '../GlobalContext/DashContext';

function AdminRender() {

    const { renderADM } = useContext(DashContext);

    return (
        <div>
            <AdminNavBar />
            {renderADM}
        </div>
    );

}

export default AdminRender;