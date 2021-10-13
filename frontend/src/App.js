import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Search from './components/search';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState('');
  const hundleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
      .then((res) => res.json())
      .then ((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} hundleSubmit={hundleSearchSubmit} />
    </div>
  );
}

export default App;
