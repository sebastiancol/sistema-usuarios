
import {} from 'bootstrap';

export function UserGet(){


    return (

        <div className="row md-9">
            <div className="col-12 mx-auto">
                <div className="card">
                    <h5 className="card-header text-center">LISTADO DE USUARIOS </h5>
                    <div className="card-body">
                        <div className="row md-12">
                        
                        
                        

                            <table className="table text-center text-uppercase table-bordered" id="myTable">
                                <div className="col md-5">
                                    <a href="{{ route('crud_create') }}" className="btn btn-primary">
                                        <span className="fas fa-user-plus"></span> AGREGAR USUARIO
                                    </a>
                                </div>
                                <thead className="">
                                    <tr>
                                        <th scope="col">Documento</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Apellido</th>
                                        <th scope="col">Direccion</th> 
                                        <th scope="col">Telefono</th> 
                                        <th scope="col">Operaciones</th>
                                    </tr>
                                </thead>
                                <tbody >
                                   
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <button type="button" className="btn btn-primary btn-">
                                                <a className="" href="{{ route('crud_edit', $item->id) }}">EDITAR<i className="fa fa-pencil-square" aria-hidden="true"></i></a>
                                            </button>
                                                                                        
                                            
                                            <button type="button" className="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#deleteUser" id="delete">
                                            ELIMINAR
                                            </button>
                                            
                                           
                                        
                                            <div className="modal fade" data-animation="slideInOutLeft"  aria-labelledby="modal-title" id="deleteUser">
                                                                            
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                    
                                                        <div className="modal-body">
                                                            <p>¿DESEA ELIMINAR EL REGISTRO?</p>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCELAR</button>
                                                            <button type="button" className="btn btn-primary">
                                                                <a className="" href="{{ route('crud_delete', $item->id) }}">CONFIRMAR<i className="fa fa-pencil-square" aria-hidden="true"></i></a>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>

                                            
                                        </td>
                                    </tr> 
                                    
                                </tbody>
                            </table>
                        </div>
                       
                        <div className="row">
                            <div className="col-sm-12">

                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>        
    )
}