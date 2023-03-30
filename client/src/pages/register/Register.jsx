import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.scss';
import axios from 'axios';

export const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [err, setError] = useState(null);

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/api/auth/register", inputs)
            navigate("/login");
        } catch (err) {
            setError(err.response.data)
        }
    }


    return (
        <div className='register'>
            <h2>Register</h2>
            <form>
                <input required type='text' placeholder='Username' name='username' onChange={handleChange} />
                <input required type='email' placeholder='Email' name='email' onChange={handleChange} />
                <input required type='password' placeholder='Password' name='password' onChange={handleChange} />
                <button onClick={handleSubmit} className="button">Register</button>
                { err && <p>{err}</p>}
                <span>Already have an account? <Link to='/login'>Login</Link></span>
            </form>
        </div>
    )
}