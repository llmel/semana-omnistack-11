import React from 'react';

function Header( /*propriedades*/ {children} ) {
    // Propriedade com atributo de nome escolhido
    // return ( <header> <h1>{propriedades.titulo}</h1> </header> ); ttt
    return (
        <header>
            <h1> {children} </h1>
        </header>
    )
}

export default Header;