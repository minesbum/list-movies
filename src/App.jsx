import Header from './components/Header'
import { MovieList } from './components/MovieList';
import './App.css'

const latestMovies =[
  { name: "Avatar 2"},
  { name: "Sherck"},
  { name: "Animal"},
]


function App() {
  return (
    <>
    <div>
      <Header />
      <MovieList list={latestMovies} />
    </div>
    </>
  )
}

export default App;
