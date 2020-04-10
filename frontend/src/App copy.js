import React /*, { useState } */ from 'react';
// Importando componente do cabeçalho
// import Header from './Header';

// Importando configurações globais de CSS
import './global.css';

// Importando Logon
// import Logon from './pages/logon';

// Importando as rotas
import Routes from './routes';

function App() {
  // Utilizando a rota para renderizar o Logon
  return (
    <Routes />
  );

  // Renderizando Logon diretamente, sem a rota
  // return ( <Logon /> );

  // Propriedade com atributo de nome escolhido
  // return ( <Header titulo="Semana OmniStack" /> );
  
  // Propriedade pré definida do React, a children
  // return ( <Header> Semana OmniStac </Header> );

  /* Demonstração do funcionamento da variável Estado.
  const [contador, alterarContador] = useState(0);

  function incrementar () {
    alterarContador(contador + 1);
  }
  
  return (
    <div>
      <Header> Contador: {contador} </Header>
      <button onClick={incrementar}> Incrementar </button>
    </div>
  )
  */
}

export default App;
