import Link from "next/link";
import './navbar.css'
const Navbar = () => {
    return ( 
    <header>
       <Link href="/"><h1>Areej Blog</h1></Link>
       <ul className="list">
        <li><Link href="/posts">posts</Link></li>
        <li><Link href="/contact">contact</Link></li>
       </ul>
    </header> );
}
export default Navbar;