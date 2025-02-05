const fullAnimesUrl = 'https://api.jikan.moe/v4/anime/id/full';

export async function getAnimes(id) {
    let listaAnimes = [];
    const response = await fetch(fullAnimesUrl.replace('id', id));
    const data = await response.json();
    listaAnimes.push(data);

    return listaAnimes;
};