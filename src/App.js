import './App.css';
import CryptoList from './CryptoList';
import Header from './Header';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function handleDarkMode(e) {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  return (
    <div>
      <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode}/>
      <CryptoList isDarkMode={isDarkMode}/>
    </div>
  );
}

export default App;
