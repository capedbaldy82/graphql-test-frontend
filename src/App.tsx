
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Movie from './routes/Movie';
import Movies from './routes/Movies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/movies/:id' element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
