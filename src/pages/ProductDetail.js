import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetailPage = () => {

    const params = useParams()
  return (
    <h1>
        Product Details
        <p>{params.productId}</p>
        <Link to='..' relative='path'>Back</Link>
    </h1>
  )
}

export default ProductDetailPage