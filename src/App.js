import { ViewPage } from './components/pages/view-page/view-page';
import './App.css'
import './styles/index.css';
import { Header } from './components/molecules/header/Header';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState(false);
  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }
  return (
    <div className="App">
      <Header handleInputChange={handleInputChange} />
      <ViewPage searchValue={searchValue} />
    </div>
  );
}

export default App;
