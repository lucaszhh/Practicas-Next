import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import styles from '@/styles/Home.module.css'
import { useFetchCharacter } from '@/hooks/useFetch';


  

const Character = () => {
    const router = useRouter()
    const { id } = router.query
    const character = useFetchCharacter(id);
    
  return (
    character &&
    <article key={character.name} className={styles.main}>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <ul>
          <li>specie: {character.species}</li>
          <li>status: {character.status}</li>
          <li>type: {character.gender}</li>
        </ul>
        <Link href={"/"} ><h3>get back</h3></Link>
    </article>
    
  )
}

export default Character;