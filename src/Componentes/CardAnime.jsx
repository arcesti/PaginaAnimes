import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { buscarAnime } from '../redux/animeSlice.js';
import ESTADO from '../redux/estado.js';
import { useEffect, useState } from 'react';
import styles from "../styles/style.module.css";

function CardAnime(props) {
    const despachante = useDispatch();
    const [page, setPage] = useState(5);
    const { estado, mensagem, listaAnimes } = useSelector(state => state.anime);
    useEffect(() => {
        despachante(buscarAnime(page));
    }, [despachante, page]);

    if (estado === ESTADO.OCIOSO) {
        return (
            listaAnimes.map((anime) => {
                return (
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"1rem"}}>
                        <button style={{maxHeight:'2rem'}} onClick={() => page>1 ? setPage(page-1):setPage(page)}>ANTERIOR</button>
                        <Card className={styles.card}>
                            <Card.Img variant="top" src={anime.data.images.jpg.large_image_url} />
                            <Card.Body >
                                <Card.Title >{anime?.data?.title}</Card.Title>
                                <Card.Text style={{height:"10rem", overflow:"hidden"}}>{anime.data.synopsis}</Card.Text>
                            </Card.Body>
                            <ListGroup >
                                <ListGroup.Item >Episodes: {anime.data.episodes}</ListGroup.Item>
                                <ListGroup.Item >Trailer: {anime.data.trailer.url}</ListGroup.Item>
                                <ListGroup.Item >Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <Card.Body >
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                        <button style={{maxHeight:'2rem'}} onClick={() => setPage(page+1)}>PROXIMO</button>
                    </div>
                )
            })
        )
    }
    else if (estado === ESTADO.PENDENTE) {
        return (
            <div>
                <h3>{mensagem}</h3>
            </div>
        )
    }
}

export default CardAnime;