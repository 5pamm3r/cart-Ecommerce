import { useState } from 'react';
import './App.css';
import Header from '../Components/Header';
import Main from '../Components/Main';
import ImagesContainer from '../Components/ImagesContainer';
import Sidebar from '../Components/Sidebar';
import DescriptionContainer from '../Components/DescriptionContainer';
import AddToCartButton from '../Components/AddToCartButton';
import HeaderLinks from '../Components/HeaderLinks';
import OpenCart from '../Components/OpenCart';

function App() {
  const [cart, setCart] = useState({});
  const [count, setCount] = useState(0);
  const [openLinks, setOpenLinks] = useState(false);
  const [openCart, setOpenCart] = useState(false)

  return (
    <div className="App">
      <Header cart={cart} setOpenLinks={setOpenLinks} setOpenCart={setOpenCart} >
        {!!openLinks && <HeaderLinks/>}
        {!!openCart && <OpenCart cart={cart} />}
      </Header>
      <Main>
        <ImagesContainer />
        <DescriptionContainer count={count} setCount={setCount} >
          <AddToCartButton setCart={setCart} count={count} />
        </DescriptionContainer>
        <Sidebar>
        </Sidebar>
      </Main>
    </div>
  );
}

export default App;
