

import {useState} from "react";

const ProductCard =(props) =>{
    const [count, setCount] = useState(0);
    const onDecreaseCount =() =>{
        if(count>0){
            setCount(count-1);
            props.onCartUpdate("decrease");
        }
     }
    const onIncreaseCount =() =>{
        setCount(count+1);
        props.onCartUpdate("increase");
    }


    return(
        <div className="productCard">
        <div>
            <img src="" alt="" />
            {props.productName}
            <div>
                <button onClick={onDecreaseCount} >Decrease</button>
                 Product Count: {count}
                <button onClick={onIncreaseCount} >Increase</button>
            </div>
        </div>
    </div>
    )
}

export default ProductCard;