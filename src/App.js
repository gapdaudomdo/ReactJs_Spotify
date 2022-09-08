import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import DetailSong from './Components/DetailSong';
import ListSongs from './Components/ListSongs';
import { Songs } from "./Context"
import DataSongs from "./data/songs.json"
import Playing from './Components/Playing';
function App() {
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs }}>
      <Navbar/>
      <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden ">
      {/* span 2 */}
        <DetailSong/>
      {/* span 2 */}
        <ListSongs/>
      </div>
      <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
