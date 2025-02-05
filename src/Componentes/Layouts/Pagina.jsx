import Container from "react-bootstrap/esm/Container";
import Menu from "./Menu"

export default function Pagina(props) {
    return (

        <>
            <Menu />
            <Container>
                {
                    props.children
                }
            </Container>
        </>
    );
}