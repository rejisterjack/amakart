import { useEffect, useState } from "react"
// import Data from "../../../public/data/products.json"
import ListItem from "./ListItems/ListItem"
import axios from "axios"

const Products = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios
          .get(`${import.meta.env.VITE_BASE_URL}/items.json`)
          .then((res) => res.data)
        setItems(response)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchItems()
  }, [])
  return (
    <div className="product-list">
      <div className="product-list--wrapper">
        {items.map((item, index) => (
          <ListItem key={index} data={item} />
        ))}
      </div>
    </div>
  )
}

export default Products
