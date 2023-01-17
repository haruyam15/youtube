import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to='/'> <h1>youtube</h1></Link>
            <input type="text" placeholder="search" />
        </nav>
    );
}