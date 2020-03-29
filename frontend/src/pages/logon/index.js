import React , { useState } from 'react';
// Importando o react-router-dom para links
import { Link , useHistory } from 'react-router-dom';

// Importando ícones
import { FiLogIn } from 'react-icons/fi';

// Importando CSS da página
import './styles.css';

// Importando imagens
import heroesImg from '../../img/heroes.png';
import logoImg from '../../img/logo.svg';

// Importando API
import api from '../../services/api';

function Logon () {
    const [id , setId] = useState("");
    const history = useHistory();

    async function handleLogin (e) {
        e.preventDefault();

        try {
            const response = await api.post('sessao', {id} );
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongNome', response.data.nome);
            history.push("/casos");

        } catch (error) {
            alert("Falha no login. Tente novamente.")
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero" />

                <form onSubmit={handleLogin}>
                    <h1> Faça seu logon </h1>

                    <input 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit"> Entrar </button>

                    <Link className="back-link" to="/cadastro"> 
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro 
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}

export default Logon;