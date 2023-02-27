import { URL_CHARACTER } from "@/constant/constant";
import { Character } from "@/types/types";
import { useEffect, useState } from "react";

export function useFetchCharacters(){
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect( ()=>{
      fetch(URL_CHARACTER)
      .then(response => response.json())
      .then(data => {
         setCharacters(data.results)
      });
    }, [])

    return characters;
}

export function useFetchCharacter(id:string | string[] | undefined) {
    const [character, setCharacter] = useState<Character>({
      name:"",
      image:"",
      id: 0,
      species:"",
      status:"",
      gender:""
  });

    useEffect( ()=>{
      if (!id) return
      fetch(URL_CHARACTER+id)
      .then(response => response.json())
      .then(data => {
         setCharacter(data)
      });
    }, [id])

    return character;
} 