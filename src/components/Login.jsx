import React from 'react';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(null);
    const [esRegistro, setEsRegistro] = React.useState(true);

    const procesarDatos = (e) => {
        e.preventDefault();
        if(!email.trim()) {
            setError("Ingrese email");
            return;
        }
        if(!password.trim()) {
            setError("Ingrese password")
            return;
        }
        if(password.length < 6) {
            setError("Ingrese un password con al menos 6 caracteres");
        }

        setError(null);
    }
    return (
        <div className="mt-5">
            <h3 className="text-center">
                {
                    esRegistro ? 'Registro de usuarios' : 'Login de acceso'
                }
            </h3>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )
                        }
                        <input 
                        type="email" 
                        className="form-control mb-2"
                        placeholder="Ingrese un email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                        <input 
                        type="password" 
                        className="form-control mb-2"
                        placeholder="Ingrese un password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        />
                        <button className="btn btn-dark btn-lg btn-block" type="submit">
                            {
                                esRegistro ? 'Registrarse' : 'Acceder'
                            }
                        </button>
                        <button 
                        className="btn btn-info btn-sm btn-block"
                        onClick={() => setEsRegistro(!esRegistro)}
                        type="button"
                        >
                            {
                                esRegistro ? 'Ya estas registrado?' : 'No tienes cuenta?'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
