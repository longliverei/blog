import { Link } from 'react-router-dom';
import './styles.scss';

export const Login = () => {
    return (
        <div className='login'>
            <h2>Login</h2>
            <form>
                <input required type='text' placeholder='Username' />
                <input required type='password' placeholder='Password' />
                <button>Login</button>
                <p>Error area</p>
                <span>Don't you have an account? <Link to='/register'>Register</Link></span>
            </form>
        </div>
    )
}