import { Link } from 'react-router-dom';


const Navbar = () => {  
    return (    
    <nav className='navbar'>      
        <Link to='/'>Master</Link>      
        <Link to='/app'>Home</Link>      
        <Link to='/products'>Products</Link>    
    </nav>  
    );
};
    
export default Navbar;