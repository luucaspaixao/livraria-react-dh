/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react'
import { getBooks } from '../../services/api/bookApi'
import { Link } from "react-router-dom"

export default function Home() {
    const [books, setBooks] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        const booksData = async () => { 
            const data = await getBooks('harry')
            console.log(data)

            setBooks( bookAtual => [...bookAtual, ...data.items])
        }
        booksData()  
    }, [])

    function handleInput(event) {
        setInput(event.target.value)
    }

    return (
        <section className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Busca</h2>
                    <input
                      type="text"
                      value={input}
                      onChange={handleInput} />
                </div>
            {
                books.filter((val) => {
                    if(input === ''){
                        return val
                    } else if (val.volumeInfo.title.toLowerCase().includes(input.toLowerCase())) {
                        return val
                    }
                }).map((book, key) => {
                return(
                <div key={key} className="col-md-3">
                    <div className="card" style={ {width: '18rem'} }>
                        <img
                          className="card-img-top"
                          src={book.volumeInfo?.imageLinks?.thumbnail}
                          alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{book.volumeInfo.title}</h5>
                            <p className="card-text">{book.volumeInfo.description}</p>
                            <Link to={`/reviews/${book.id}`} className="btn btn-primary">Ver reviews</Link>
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