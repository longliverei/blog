import { Link } from 'react-router-dom';
import './styles.scss';

export const Navbar = () => {
    return (
        <header className="navbar">
            <div className='navbar-content'>
                <div className='logo'>
                    LOGO AREA
                </div>
                <div className='search-bar'>
                    <input type='text' placeholder='Search here' />
                </div>
                <div className='user-area'>
                    <div className='create-post user-margin'>
                        <Link to='/write'>
                        <button>Create post</button>
                        </Link>
                    </div>
                    <div className='user-img user-margin'>
                        USER IMG AREA
                    </div>
                </div>
            </div>
        </header>
    )
}