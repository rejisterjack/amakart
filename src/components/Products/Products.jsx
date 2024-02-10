import Data from "../../../public/data/products.json"
import ListItem from "./ListItems/ListItem"

const Products = () => {
  return (
    <div className="product-list">
      <div className="form">
        <form action="">
          <h2>Item Card Details</h2>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="Enter Title" />
          </div>
        </form>
      </div>
      <div className="product-list--wrapper">
        {Data.items.map((item, index) => (
          <ListItem key={index} data={item} />
        ))}
      </div>
    </div>
  )
}

export default Products
