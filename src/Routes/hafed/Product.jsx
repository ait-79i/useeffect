import { useParams } from "react-router-dom"
export default function Product(){

  const { productId , name} = useParams();
  

  return(
    <>
      <h1>Produit</h1>
      {productId}
      {name}
    </>
  )
}