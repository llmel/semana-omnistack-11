import React , { useState } from 'react';
import './styles.css';
import logoImg from '../../img/logo.svg';
import { Link , useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

function NovosCasos () {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const ongId = localStorage.getItem("ongId");
    const history = useHistory();

    async function handleNovoCaso (e) {
        e.preventDefault();

        const data = {
            titulo,
            descricao,
            valor
        };

        try {
            await api.post('casos', data, {
                headers: {
                    authorization: ongId
                }
            });
            history.push("/casos");
        } catch (error) {
            alert("Erro ao cadastrar caso. Tente novamente.");
        }
    }

    return (
        <div className="novos-casos-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>

                    <h1> Cadastrar novo caso </h1>
                    <p> Descreva o caso detalhadamente para encontrar um herói para resolver isso </p>

                    <Link className="back-link" to="/casos">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para Home
                    </Link>
                </section>
                
                <form onSubmit={handleNovoCaso}>
                    <input 
                        placeholder="Título do caso"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={valor}
                        onChange={e => setValor(e.target.value)}
                    />

                    <button className="button" type="submit"> Cadastrar </button>
                </form>
            </div>
        </div>
    )
}

export default NovosCasos;