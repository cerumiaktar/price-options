import { useState } from "react";
import Link from "../Link/Link";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/products", name: "Products" },
        { id: 5, path: "/contact", name: "Contact" }
      ];
      

    return (
        <nav className="p-6 bg-orange-500">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <IoMenuOutline className="text-xl " /> 
                    : <IoMdClose className="text-xl "/>
                }
                
            </div>
            <ul className={`md:flex absolute md:static
            ${open ? 'top-16' : '-top-60'}
            bg-orange-500`}>
                {
                    routes.map(route => <Link key={route.id} route={route}>
                    </Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;