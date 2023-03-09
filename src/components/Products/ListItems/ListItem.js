// import AddToCartIcon from "../../../assets/icons/add_cart.svg"

// const ListItem = ({ data }) => {
//     return (
//         <div className={"item-card"}>
//             <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
//             <div className={"item-card__information"}>
//                 <div className={"pricing"}>
//                     <span>₹{data.discountedPrice}</span>
//                     <small>
//                         <strike>₹{data.price}</strike>
//                     </small>
//                 </div>
//                 <div className={"title"}>
//                     <h3>{data.title}</h3>
//                 </div>
//             </div>
//             <button className={"cart-add"}>
//                 <span>Add to Cart</span>
//                 <img src={AddToCartIcon} alt="Cart Icon"/>
//             </button>
//         </div>
//     )
// }

// export default ListItem
import AddToCartIcon from "../../../asstes/icons/add_cart.svg"
export default function ListItem() {
  return (
    <>
      <div className={"item-card"}>
        <img className={"img-fluid"} src="/assets/placeholder.png" alt="" />
        <div className={"item-card__information"}>
          <div className={"pricing"}>
            <span>$340</span>
            <small>
              <strike>$450</strike>
            </small>
          </div>
          <div className={"title"}>
            <h3>title of the item</h3>
          </div>
        </div>
        <button className={"cart-add"}>
          <span>add to cart</span>
          <img src={AddToCartIcon} alt="" />
        </button>
      </div>
    </>
  );
}
