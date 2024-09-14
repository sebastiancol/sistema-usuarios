//import { useState } from 'react';
//import axios from 'axios';
import {} from 'bootstrap';

export function UserCreate () {
    /*const [username, setUsername] = useState('');

    const login = async () => {
        //e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/register', {
            username,
            password,
          });
          localStorage.setItem('token', response.data.token);
          window.location.href = '/dashboard';
        } catch (error) {
          console.error('Error logging in', error);
        }
    };*/

    return (

        <div className="row md-5">
            <div className="col-8 mx-auto">
                <div className="card">
                    <h3 className="card-title text-center">REGISTRAR</h3>
                    <div className="card-body">
                        <form  method="post" action="" className="color" id="register">
                            
                            
                            <div className="form-group">
                                
                                <input required type="text" id="doc" name="document" placeholder="Documento" className="form-control"/>

                            </div>
                            <div className="form-group">
                                
                                <input required type="text" id="fnom" name="first_name" placeholder="Nombre" className="form-control"/>
                            </div>
                            <div className="form-group">
                                
                                <input required type="text" id="Lname" name="last_name" placeholder="Apellido" className="form-control"/>
                            </div>
                            <div className="form-group">
                               
                                <input required type="text" id="nom" name="address" placeholder="Direccion" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input required type="text" id="nom" name="phone" placeholder="Telefono" className="form-control"/>
                            </div>
                            
                        
                            <div className="form-group mt-5">
                                <button type="submit"  className="btn btn-success btn-block entry">REGISTRO</button>
                                <a className="btn btn-danger btn-block" href="/app/cancel">CANCELAR</a>        
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}