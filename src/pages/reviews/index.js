import { useParams } from 'react-router-dom'

export default function Reviews() {
    const { id } = useParams()
    return <h1>pagina de reviews: {id}</h1>
}