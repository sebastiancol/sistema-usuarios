import {useState } from 'react';
import axios from 'axios';
import {} from 'bootstrap'

export function Login () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    //e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (

    <div className='row m-12'>
        <h1>ACCESO AL SISTEMA</h1>
        <form className="form" onSubmit={handleSubmit}>

          <div className="form-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Usuario"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contrasena"
              required
            />
          </div>

          <div className='form-group'>
            
            <a href='/app/dashboard' className="btn btn-primary">INGRESAR</a>
            <a href='/app/usercreate' className="btn btn-primary">CREAR CUENTA</a>
          </div>
     
        </form>
    </div>
    
  );
};

/*
<Link to="/app/dashboard" className="btn btn-primary">INGRESAR</Link>
              <Link to="/app/usercreate" className="btn btn-primary">CREAR CUENTA</Link>
              <Link to="/app/loginrestore" className="btn btn-danger">RESTAURA CONTRASEÑA</Link>*/ 