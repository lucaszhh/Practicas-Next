export async function getStaticPaths() {
  return { 
      paths: [
        { params: { id: '1' }},
        { params: { id: '2' }},
        { params: { id: '3' }},
        { params: { id: '4' }},
      ], 
      fallback: false
  };
}
 
export async function getStaticProps(context) {

  const { params } = context
  const res = await fetch(`https://62b4dc33530b26da4cc60791.mockapi.io/bolos/${params.id}`);
  const bolo = await res.json();
  return {
    props: {
      bolo,
    },
  };
}

export default function Bolos({bolo}) {
  return(
    <article className="cards">
      <img src={bolo.image} alt="Imagem de receita" />
      <h2>{bolo.title}</h2>
      <p>{bolo.description}</p>
    </article>
  )
}




