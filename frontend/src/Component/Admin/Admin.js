import { Link, Outlet } from "react-router-dom";

const Admin = () => {
    return ( 
        <div className="container">
            <div className="mb-5">
                <Link to={"category"}>To Category</Link>
            </div>
            
            <Outlet/>
        </div>
     );
}
 
export default Admin;