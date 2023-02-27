import { GetServerSideProps, NextPage } from 'next'
import React, { ReactElement } from 'react'
import BookCard from '../../features/Book/BookCard'
import { Book, Books } from '../../types'

interface Props {
  data: Books
}

const Products: (props : Props) => ReactElement = ({data}) => {
  return (
    <main>
        {data?.map((libro : Book)=>{
          return (
            <div key={libro.id}>
            <BookCard data={libro}/>
            </div>
          )
        })}
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<{ data: Books }> = async () => {
  const res = await fetch("http://localhost:3000/api/products")
  const data: Books = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      data
    }
  }
}

export default Products