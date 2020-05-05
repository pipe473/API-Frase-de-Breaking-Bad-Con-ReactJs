import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
	display: flex;
	align-items: center;
	padding-top: 5rem;
	flex-direction: column;
`;

const Boton = styled.button`
	background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
	background-size: Arial, Helvetica, sans-serif;
	color: #fff;
	margin-top: 3rem;
	padding: 1rem 3rem;
	font-size: 2rem;
	border: 2px solid black;
`;

function App() {
	const consultarAPI = () => {
		const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
		const frase = api.then( respuesta => respuesta.json());
      frase.then( resultado => console.log(resultado));
    
	}

	return (
		<Contenedor>
			<Boton onClick={consultarAPI}>Obtener frase</Boton>
		</Contenedor>
	);
}

export default App;
