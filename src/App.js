import './App.css';
import CryptoList from './CryptoList';
import Header from './Header';
import NavBar from './NavBar';

function App() {
  return (
    <div id='app'>
      <Header />
      <NavBar />
      <CryptoList />
    </div>
  );
}

export default App;
