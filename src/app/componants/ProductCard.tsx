"use client"

import React from 'react'
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/image'
import { FC } from 'react'

const ProductCard:FC<{product: any}> = ({product}) => {

const handleAddToCart = async () => {
    const res = await fetch("api/cart/cart", {
        method:"POST",
        body:JSON.stringify({
            product_id:product._id
        })
    }
    )

    const result = await res.json()
}


    return (
    <div>    <Image
    width={200}
    height={300}
    src={urlForImage(product.image).url()}
    alt="product image"
  />
  <h2>{product.product}</h2>
  <h3>${product.price}</h3>
  <button onClick={() => } className="border py-2 px-6 rounded bg-blue-600 text-white">Add to Cart</button>
  </div>
  )
}

export default ProductCard