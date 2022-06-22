export const getGifs = async( category) => {
    const api_key = "wgsBaRd5yRe7ulbBbMsgFBpMe6EHhW5P";
    const limit = 20;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limit}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( ({id, title, images:{downsized_medium:{url}}}) => ({
        id,
        title,
        url
    }));

    return gifs;
}
