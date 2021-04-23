import { useState } from "react";

export default function App() {
    const [contador, setContador] = useState(0)
    function add() {
        setContador(contador + 1)
    }
    function remove() {
        setContador(contador - 1)
    }

    return (
        <div>
            <p>Contagem: {contador}</p>
            <button onClick={add}>Adicionar 1</button>
            <button  onClick={remove}>Remover 1</button>
        </div>
    );
}