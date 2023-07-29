
const Characters = ({ characters, setCharacters }) => {
    //metodo para limpiar el estado
    const resetCharacters = () => {
        setCharacters(null);
    };

    return (
        <>
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>
                Volver al inicio
            </span>
            <br /><br />
            <div className="container-characters">
                {
                    characters.map((character, index) => (

                        <div className="character-container" key={index}>
                            <div>
                                <img src={character.image} alt={character.name} />
                            </div>
                            <div>
                                <h3>{character.name}</h3>
                                <h6>
                                    {character.status === "Alive" ? (
                                        <>
                                            <span className="alive" />
                                            {character.status}
                                        </>
                                    ) : (
                                        <>
                                            <span className="dead" />
                                            {character.status}
                                        </>
                                    )}
                                </h6>
                                <p>
                                    <span className="text-grey">Episodio:</span>
                                    <span className="text-grey">{character.episode.length}</span>
                                </p>

                                <p>
                                    <span className="text-grey">Especie:</span>
                                    <span className="text-grey">{character.species}</span>
                                </p>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
            <span className="back-home" onClick={resetCharacters}>
                Volver al inicio
            </span>
        </>
    );
};

export default Characters;