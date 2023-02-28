import FaqsCard from 'features/faqsCard'
import { GetServerSideProps } from 'next'
import React, { ReactElement } from 'react'
import { data, faqs } from 'types'

interface Props {
    data: faqs[]
}

const Home: (props : Props) => ReactElement = ({data}) => {
    return (
      <main>
          {data?.map((faqs)=>{
            return (
              <div key={faqs.id.value}>
              <FaqsCard data={faqs}/>
              </div>
            )
          })}
      </main>
    )
}



export const getServerSideProps: GetServerSideProps<{ data: data }> = async () => {
	const res = await fetch("https://randomuser.me/api/?results=10")
	const data: data = await res.json()
	if (!data) {
	  return {
		notFound: true,
	  }
	}
	return {
	  props: {
		data : data.results
	  }
	}
  }

export default Home




