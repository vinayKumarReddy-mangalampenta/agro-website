
import './index.css'

import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src="https://static.vecteezy.com/system/resources/previews/004/882/989/original/agriculture-farm-logo-vector.jpg" className="logo" alt="farm fresh" />
            <ul className='navlist'>
                <li >
                    <Link className="url" to="/" > Home</Link ></li>
                <li ><Link className="url" to="/" >Our Products </Link ></li>
                <li ><Link className="url" to="/" >About Us</Link></li>
                <li ><Link className="url" to="/" >Buy Now </Link></li>
            </ul>
        </div>
    )
}


export default Navbar