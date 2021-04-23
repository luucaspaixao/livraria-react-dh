/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react'

export default function Home() {
    const [books, setBooks] = useState([
    {
        id: 1,
        nome: "Harry Potter",
        descricao: "Um menino com magias onde enfrenta um vilão feio",
        capa: "https://opiniaobomvaleapena.com.br/imagens/livro-harry-potter-e-a-pedra-filosofal_1_.png",
    },
    {
        id: 2,
        nome: "Harry Potter 2",
        descricao: "Um menino com magias onde enfrenta um vilão feio de novo",
        capa: "https://a-static.mlcdn.com.br/618x463/livro-harry-potter-e-a-ordem-da-fenix/magazineluiza/223247300/750a947a0192177937281172d5f048c7.jpg",
    },
])

    return (
        <section className="container">
            <div className="row">
            {
                books.map(book => {
                return(
                <div className="col-md-3">
                    <div class="card" style={ {width: '18rem'} }>
                        <img 
                        className="card-img-top" 
                        src={book.capa} 
                        alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{book.nome}</h5>
                            <p className="card-text">{book.descricao}</p>
                            <a href="#1" className="btn btn-primary">Ver reviews</a>
                        </div>
                    </div>
                </div>
                )
                })
            }
                
            </div>
        </section>
    )
}