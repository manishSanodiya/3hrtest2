import { useContext, useState } from "react"
import FormItem from "./FormItem"
import CartContext from "../../context/cartContext"


const Form = (props) => {
   const [name,setName] = useState('')
   const [price,setprice] = useState('')
   const [discription,setdiscription] = useState('')
   const [listData,setListData] = useState([]);
   const cartCtx=useContext(CartContext)
   let lt = {
    name: name,
    price: price,
    discription: discription
  }
    const submitHandler=(e) =>{
        e.preventDefault();
        console.log("submit");
        setListData([...listData,lt])
        console.log(listData);
        setName('')
        setdiscription('')
        setprice('')
    }
    const addtoCart=(index) =>{
      console.log(lt);
      const updatedListData= listData.filter((data,id)=>{
        return index!==id
      })
      setListData(updatedListData);
    }
    const addToCartHandler=()=>{
      cartCtx.addItemTo({
        name:name,
        discription:discription,
        price:price
        
      })
      console.log('manu')
      console.log(lt)

    }
 
  return (
    <>
        <form > 
      <label>Medicine Name</label>
      <input type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
      <label>Discription</label>
      <input type='text' value={discription} onChange={(e)=> setdiscription(e.target.value)} />
      <label>price</label>
      <input type='number' value={price} onChange={(e)=> setprice(e.target.value)} />
      <button onClick={submitHandler}>add item</button>
      <h3>list of items</h3>
      
    </form>
    <ul>
    {listData!==[] && listData.map((data,index)=>{return(
      <p key={index}>
       <FormItem name={data.name} discription={data.discription} price={data.price}/>
       <button onClick={()=>addtoCart(index)}>remove</button>
       <button onClick={addToCartHandler}>AddCart</button>
      </p>
    )
  
    })}
    </ul>
    </>

  

    
  )
}

export default Form
