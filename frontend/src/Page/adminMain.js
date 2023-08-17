import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/navbar";

const AdminMain = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="my-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default AdminMain;