const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";
const poke_data: { results: { name: string }[] } = await fetch(POKEMON_API_URL).then((result) => {
    // debounce the response to make it look like real
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result.json());
        }, 5000);
    });
});

export default function ServerIsland() {
    return (
        <div>
            {poke_data.results.map((pokemon) => {
                return <div key={pokemon.name}>{pokemon.name}</div>;
            })}
        </div>
    );
}
