import Header from './components/Header'
import { MovieList } from './components/MovieList';
import './App.css'

const latestMovies =[
  { name: "Avatar 2"},
  { name: "Sherck"},
  { name: "Animal"},
]

const childrenMovies =[
  { name: "Minions"},
  { name: "Sherck 3"},
  { name: "Yo Robot"},
]

function App() {


  return (
    <>
    <div>
      <Header />
      <MovieList list={latestMovies} />
      <MovieList list={childrenMovies} />
    </div>
    </>
  )
}

export default App;
