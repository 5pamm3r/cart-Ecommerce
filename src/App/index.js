import './App.css';
import Header from '../Header';
import Main from '../Main';
import Images from '../Images';
import Sidebar from '../Sidebar';
import AddBtn from '../AddBtn';


function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Images />
        <Sidebar>
          <AddBtn />
        </Sidebar>
      </Main>
    </div>
  );
}

export default App;
