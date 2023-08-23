import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {

    const params = useParams()
  return (
    <h1>
        Product Details
        <p>{params.productId}</p>
    </h1>
  )
}

export default ProductDetailPage