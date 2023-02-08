import Navbar from "./components/Navbar/Navbar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer/>
      <ItemDetailContainer/>  
    </> 
  );
}

export default App;
