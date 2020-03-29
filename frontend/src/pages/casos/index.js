import React , { useEffect , useState } from 'react';

import logoImg from '../../img/logo.svg';

import { Link , useHistory } from 'react-router-dom';

import { FiPower , FiTrash2 } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';

function Casos () {
    const history = useHistory();
    const ongNome = localStorage.getItem('ongNome');
    const ongId = localStorage.getItem('ongId');
    const [casos, setCasos] = useState([]);

    useEffect( () => {
        api.get('perfil', {
            headers: {
                authorization: ongId,
            }
        }).then(response => {
            setCasos(response.data);
        })
    } , [ongId] )

    async function handleDeleteCaso (id) {
        try {
            await api.delete(`casos/${id}`, {
                headers: {
                    authorization: ongId
                }
            });
            setCasos(casos.filter(caso => caso.id !== id));
        } catch (error) {
            alert("Erro ao deletar caso. Tente novamente");
        }
    }

    function handleLogout () {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span> Bem vinda, {ongNome} </span>

                <Link className="button" to="/casos/novo">
                    Cadastrar novo caso
                </Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={16} color="#e02041" />
                </button>
            </header>

            <h1> Casos cadastrados </h1>

            <ul>
                {casos.map(caso => (
                    <li key={caso.id}>
                        <strong> CASO: </strong>
                        <p> {caso.titulo} </p>

                        <strong> DESCRIÇÃO: </strong>
                        <p> {caso.descricao} </p>

                        <strong> VALOR: </strong>
                        <p> {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(caso.valor) } </p>

                        <button onClick={() => handleDeleteCaso(caso.id)} type="button"> 
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    ) 
}

export default Casos;