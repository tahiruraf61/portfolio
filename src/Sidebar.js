import { Link} from 'react-router-dom'
import React, { useEffect } from 'react';
const Sidebar = () => {
    useEffect(() => {
        const sidebar = document.querySelector('.sidebar');
        const sidebarTop = sidebar.offsetTop;

        const adjustSidebar = () => {
          if (window.scrollY > sidebarTop) {
            sidebar.style.position = 'fixed';
            sidebar.style.top = '0';
          } else {
            sidebar.style.position = 'static';
          }
        };

        window.addEventListener('scroll', adjustSidebar);

        return () => {
          // Cleanup event listener on component unmount
          window.removeEventListener('scroll', adjustSidebar);
        };
      }, []); // Empty dependency array ensures the effect runs only once on mount

    return(

        <div  className='sidebar'>
         <nav>
        <Link to = "/" className="nav-item">About me</Link>
        <Link to="/services" className="nav-item">Services</Link>
        <Link to="/portfolio" className="nav-item">Portfolio</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
     </nav>
        </div>

    )
}
export default Sidebar;