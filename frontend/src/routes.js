import React from 'react';
// Importando as funcionalidades de rota
import { BrowserRouter , Route , Switch } from 'react-router-dom';
// Importando página de Logon - Como estou importando a pasta, não preciso especificar o index.js
import Logon from './pages/logon';
// Importando página de cadastro
import Cadastro from './pages/cadastro';
// Importando página de casos
import Casos from './pages/casos'; 
// Importando página de novos casos
import NovosCasos from './pages/novoCaso';

function Routes () {
    return (            // O Switch garante a execução de apenas 1 rota por momento
        <BrowserRouter>
            <Switch>     
                <Route path="/" exact component={Logon} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/casos" exact component={Casos} />
                <Route path="/casos/novo" component={NovosCasos} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;