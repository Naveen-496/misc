import { Link, useNavigate } from "react-router-dom";
import{ useCookies } from 'react-cookie';

const Navbar = () => {

  const[cookie, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();

  const handleLogout = () => {
    setCookies("access_token", "");
    localStorage.removeItem("userId");
    navigate('/auth');
  }

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/create-recipes">Create Recipe</Link>
      <Link to="/saved-recipes">Saved Recipes</Link>
      {!cookie.access_token ? (<Link to="/auth">Login/Register</Link>) : (<button onClick={handleLogout}>logout</button>)}
      
    </div>
  )
}

export default Navbar