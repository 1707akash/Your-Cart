
import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import ProductCard from './Component/ProductCard';


const productList = [
  {
      "id": "rec1JZlfCIBOPdcT2",
      "title": "Samsung Galaxy S8",
      "price": "399.99",
      "img": "https://www.course-api.com/images/cart/phone-1.png",
      "amount": 1
  },
  {
      "id": "recB6qcHPxb62YJ75",
      "title": "google pixel",
      "price": "499.99",
      "img": "https://www.course-api.com/images/cart/phone-2.png",
      "amount": 1
  },
  {
      "id": "recdRxBsE14Rr2VuJ",
      "title": "Xiaomi Redmi Note 2",
      "price": "699.99",
      "img": "https://www.course-api.com/images/cart/phone-3.png",
      "amount": 1
  },
  {
      "id": "recwTo160XST3PIoW",
      "title": "Samsung Galaxy S7",
      "price": "599.99 ",
      "img": "https://www.course-api.com/images/cart/phone-4.png",
      "amount": 1
  }
]

function App() {
  const [totalCartCount, setTotalCartCount] = useState(0);

  const onCartUpdate =(type) =>{
    if(type === "increase"){
      setTotalCartCount(totalCartCount + 1);
    }else if(type === "decrease"){
      setTotalCartCount(totalCartCount - 1);
    }
    // console.log("on cart update called");
  }
  

  return (
    <>
      <Header totalCartCount={totalCartCount} />
      <ProductCard productName={productList[0].title} onCartUpdate={onCartUpdate} />
      <ProductCard productName={productList[1].title} onCartUpdate={onCartUpdate} />
      <ProductCard productName={productList[2].title} onCartUpdate={onCartUpdate} />
      <ProductCard productName={productList[3].title} onCartUpdate={onCartUpdate} />
    </>
  );
}

export default App;
