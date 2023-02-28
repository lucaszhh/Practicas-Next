import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { faqs } from "../types"

interface Props {
    data: faqs
}

const FaqsCard: FC<Props> = ({data}) => {
  return (
      <div >
        <div>
          <h3>{data.name.title}</h3>
          <Image src={data.picture.large} alt="faqs-image" width={200} height={300} />
            {/* <Link href={`/products/${data.id}`} >
             {data.login.username}
            </Link> */}
          <p>{data.login.username}</p>
          <p>{data.email}</p>
        </div>
      </div>
  )
}

export default FaqsCard