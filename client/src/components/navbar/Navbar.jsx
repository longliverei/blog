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
                        <button>Create post</button>
                    </div>
                    <div className='user-img user-margin'>
                        USER IMG AREA
                    </div>
                </div>
            </div>
        </header>
    )
}