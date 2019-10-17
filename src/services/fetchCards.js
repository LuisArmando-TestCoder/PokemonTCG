export default (value = '', base = 'https://api.pokemontcg.io/v1/cards') =>

new Promise((resolve, reject) => {
    fetch(base + value)
        .then(r => r.json())
        .then(resolve)
        .catch(reject);
});