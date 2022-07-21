import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Components/Header";
import Main from "../Components/Main";
import ImagesContainer from "../Components/ImagesContainer";
import Sidebar from "../Components/Sidebar";
import DescriptionContainer from "../Components/DescriptionContainer";
import AddToCartButton from "../Components/AddToCartButton";
import HeaderLinks from "../Components/HeaderLinks";
import OpenCart from "../Components/OpenCart";
import ItemsCart from "../Components/ItemsCart";

function App() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [openLinks, setOpenLinks] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const count = cart.reduce((prevValue, value) => prevValue + value.count, 0)
    setTotalItems(count)
  }, [cart]);

  const onDeleteItem = (productName) => {
    const index = cart.find(i => i.productName === productName)
    const newItems = [...cart]
    newItems.splice(index,1)
    setCart(newItems)
  }

  return (
    <div className="App">
      <Header
        setOpenLinks={setOpenLinks}
        setOpenCart={setOpenCart}
        openCart={openCart}
        openLinks={openLinks}
        totalItems={totalItems}
      >
        {!!openLinks && <HeaderLinks />}
        {!!openCart && (
          <OpenCart
            cart={cart}
            render={(item) => (
              <ItemsCart
                key={Math.floor(Math.random() * 1000)}
                productName={item.productName}
                price={item.price}
                count={item.count}
                totalPrice={item.count * item.price}
                cart={cart}
                setCart={setCart}
                onDeleteItem={()=>onDeleteItem(item.productName)}
              />
            )}
          />
        )}
      </Header>
      <Main>
        <ImagesContainer />
        <DescriptionContainer count={count} setCount={setCount}>
          <AddToCartButton setCart={setCart} count={count} cart={cart} />
        </DescriptionContainer>
        <Sidebar></Sidebar>
      </Main>
    </div>
  );
}

export default App;
