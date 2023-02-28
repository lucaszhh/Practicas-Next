import { GetStaticProps } from 'next'
import React from 'react'

interface IProps {
    data: faq[]
}

const Faqs = ({data} : IProps) => {
  return (
    <>
        <div>Preguntas frecuentes</div>
        {data.map((faq)=>{
            return(
                <div key={faq.id}>
                    <h3>{faq.title}</h3>
                    <p>{faq.description}</p>
                </div>
            )
        })}
    </>
  )
}

type faq = {
    id:string,
    title: string,
    description: string
}

type data = {
    faqs: faq[]
}

export const  getStaticProps = async ()=> {
    const res = await fetch("https://my-json-server.typicode.com/DH-Esp-Frontend/ctd-fe3-s2-c6-integracion-terminado/db") 
    const data : data = await res.json()
    
    return {
      props: {data : data.faqs}, 
    }
}

export default Faqs