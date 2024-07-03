import react, { useState } from 'react';

function Contador() {
    const [valor, setValor] = useState(1989);

    let incrementar = () => {
        setValor("Taylor Swift");
    }

    return (
        <>
            <div>
                <span>{valor}</span>
            </div>
            <button onClick={incrementar}>Incrementar</button>
        </>
    );
}

export default Contador;