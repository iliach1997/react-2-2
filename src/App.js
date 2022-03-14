import { Header } from './components/header';
import { Products } from './pages/products';
import { Layout } from './components/Layout';
import { Cartprovider } from './providers/cartProvider';
import './App.css';

function App() {
  return (
    <Cartprovider>
<Layout className="App" size='default'>
      <Header/> 

      <Products/>

</Layout>

</Cartprovider>
  );
}

export default App;
