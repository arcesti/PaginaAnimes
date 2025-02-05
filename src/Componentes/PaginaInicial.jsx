import styles from "../styles/button.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaginaInicial() {
    const navigate = useNavigate();
    return (
        <div>
            <img style={
                {
                    width: "100%",
                    height: "100vh",
                    objectFit: "cover",
                    objectPosition: "center", zIndex: "-1", position: "absolute"
                }
            } src='/japan-background-digital-art.jpg' />
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                <button onClick={() => navigate("/cards")} className={styles.botao}>
                    Ver animes
                </button>
            </div>
            <footer>
                <p style={{color: "white", textAlign: "center", position: "absolute", bottom: "0", width: "100%"}}>
                    Desenvolvido por Arcesti Giglio Ricci <br />
                    &copy; 2021 Anime API
                </p>
            </footer>
        </div>
    )
}