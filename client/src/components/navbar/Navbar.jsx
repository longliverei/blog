import { Link } from 'react-router-dom';
import './styles.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import Hannya from '../../assets/hannya.png';

export const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    const { logout } = useContext(AuthContext);

    return (
        <header className="navbar">
            <div className='navbar-content'>
                <div>
                    <Link to="/">
                    <img src={Hannya} alt="hannya icon" className="logo"/>
                    </Link>
                </div>
                <div className='user-area'>
                    <div className='create-post user-margin'>
                        <Link to='/write'>
                        <button className="button">Create post</button>
                        </Link>
                    </div>
                    <div className='user-img user-margin'>
                        IMG
                    </div>
                    {currentUser ? (<span className="user-margin" onClick={logout}>Logout</span>) : (<Link to="/login">Login</Link>)}
                </div>
            </div>
        </header>
    )
}