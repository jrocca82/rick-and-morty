import {useState} from "react";
import { useQuery, UseQueryResult } from "react-query";
import { CharacterAttributeProps, CharacterResultProps } from "../types/CharacterTypes";
import Character from "./Character";

const Characters = () => {
    const [page, setPage] = useState<number>(1);
    
    const { data, status, isPreviousData }: UseQueryResult<CharacterResultProps> = useQuery(["characters", page], async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        return response.json()}, {keepPreviousData: true});

    if(status === "loading") {
        return <div>Loading...</div>
    }

    if(status === "error") {
        return <div>Error</div>
    }

    return (
        <div className="characters">
            {data?.results.map((character: CharacterAttributeProps) => {
                return <Character character={character} key={character.id}/>
            })}
            <div>
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
                <button disabled={isPreviousData || !data?.info.next} onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    )
}

export default Characters;