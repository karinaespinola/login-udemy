import React from 'react';
import {auth} from '../firebase';
import {withRouter} from 'react-router-dom';

const Admin = (props) => {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        if (auth.currentUser) {
            setUser(auth.currentUser);
            console.log('Existe usuario');
        } else {
            console.log('No existe el usuario');
            props.history.push('/admin');
        }         
    }, [props.history]);

    return (
        <div>
            <h2>Ruta protegida</h2>
        </div>
    )
}

export default withRouter(Admin);
