import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAnimes } from '../Services/cardService.js';
import ESTADO from './estado.js';

export const buscarAnime = createAsyncThunk('getAnimes', async (id) => {
    const resultado = await getAnimes(id);

    try {
        if(Array.isArray(resultado)) {
            return {
                "status": true,
                "mensagem": "Animes encontrados",
                "listaAnimes": resultado
            }
        }
        else {
            return {
                "status": false,
                "mensagem": "Erro ao buscar animes",
                "listaAnimes": []
            }
        }
    } catch (error) {
        return {
            "status": false,
            "mensagem": "Erro ao buscar animes " + error.message,
            "listaAnimes": []
        }
    }
});

const animeReducer = createSlice({
    name: 'anime',
    initialState: {
        listaAnimes: [],
        estado: ESTADO.OCIOSO,
        mensagem: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(buscarAnime.pending, (state, action) => {
            state.estado = ESTADO.PENDENTE;
            state.mensagem = 'Buscando animes...';
        })
        .addCase(buscarAnime.fulfilled, (state, action) => {
            if(action.payload.status) {
                state.estado = ESTADO.OCIOSO;
                state.mensagem = action.payload.mensagem;
                state.listaAnimes = action.payload.listaAnimes;
            }
            else {
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
                state.listaAnimes = [];
            }
        })
        .addCase(buscarAnime.rejected, (state, action) => {
            state.estado = ESTADO.ERRO;
            state.mensagem = 'Erro ao buscar animes';
            state.listaAnimes = [];
        })
    }
});

export default animeReducer.reducer;