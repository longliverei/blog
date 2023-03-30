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
                <p>Don't let them control your toughts</p>
                <div className='user-area'>
                    <div className='create-post user-margin'>
                        {currentUser ? <Link to='/write'><button className="button">Create post</button></Link> : null}
                    </div>
                    <div className='user-img user-margin'>
                        {currentUser ? currentUser.username : null}
                    </div>
                    {currentUser ? (<span className="user-margin" onClick={logout}>Logout</span>) : (<Link to="/login"><span className="user-margin">Login</span></Link>)}
                </div>
            </div>
        </header>
    )
}