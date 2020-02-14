import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../utils/firebaseUtils";
import { AuthContext } from "../../Auth";

import './styles.css';

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/admin");
            } catch (error) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        alert('Usuário não existe! Tente novamente.');
                        break;
                    case 'auth/wrong-password':
                        alert('Senha incorreta! Tente novamente.');
                        break;
                    default:
                        alert(error);
                        break;
                }
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/admin" />;
    }

    return (
        <div className="formLogin">
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="inputEmail">Email</label>
                            <input name="email" type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Senha</label>
                            <input name="password" type="password" className="form-control" id="inputPassword" placeholder="Senha" />
                        </div>
                        <button type="submit" className="btn btn-primary">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Login);