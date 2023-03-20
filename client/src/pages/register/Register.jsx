import { Link } from 'react-router-dom';
import './styles.scss';

export const Register = () => {
    return (
        <div className='register'>
            <h2>Register</h2>
            <form>
                <input required type='text' placeholder='First name' />
                <input required type='text' placeholder='Last name' />
                <input required type='email' placeholder='Email' />
                <input required type='text' placeholder='Username' />
                <input required type='password' placeholder='Password' />
                <button>Register</button>
                <p>Error area</p>
                <span>Already have an account? <Link to='/login'>Login</Link></span>
            </form>
        </div>
    )
}