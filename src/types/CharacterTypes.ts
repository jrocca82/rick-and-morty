export type CharacterAttributeProps = {
    name: string, id: string, image: string, status: string, species: string, location: {name: string}
}


export type CharacterResultProps = {
    results: [];
    info: {
        next: string;
    }
}

export type CharacterProps = {
    character: CharacterAttributeProps
}