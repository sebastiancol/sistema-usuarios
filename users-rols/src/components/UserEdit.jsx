import {} from 'bootstrap';

export function UserEdit (){



    return (
        <div className="row m-5">
            <div className="col-8 mx-auto">
                <div className="card">
                    <h3 className="card-title text-center">ACTUALIZAR</h3>
                    <div className="card-body">
                        <form action="" method="POST">
                            
                            <div className="form-group">
                                
                                <input required type="text" id="doc" name="document" placeholder="Documento" className="form-control" value="{{ $data->document}}"/>

                            </div>
                            <div className="form-group">
                                <input required type="text" id="fnom" name="first_name" placeholder="Nombre" className="form-control" value="{{ $data->first_name}}"/>
                            </div>
                            <div className="form-group">
                                <input required type="text" id="Lname" name="last_name" placeholder="Apellido" className="form-control" value="{{ $data->last_name}}"/>
                            </div>
                            <div className="form-group">
                                <input required type="text" id="nom" name="address" placeholder="Direccion" className="form-control" value="{{ $data->address}}"/>
                            </div>
                            <div className="form-group">
                                <input required type="text" id="nom" name="phone" placeholder="Telefono" className="form-control" value="{{ $data->phone}}"/>
                            </div>
                            
    
                            <div className="form-group mt-5">
                                <button type="submit" className="btn btn-success btn-block">GUARDAR</button>
                                <a className="btn btn-danger btn-block" href="{{ route('cancel')}}">CANCELAR</a>  
                                    
                            </div>
                        </form>
                    </div>
                </div>        
            </div>
        </div>
    )

}