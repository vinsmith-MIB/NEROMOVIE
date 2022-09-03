import './App.css';
import NavigationBar from './components/NavigationBar';
import './style/LandingPage.css';
import Intro from "./components/Intro";
import Trending from "./components/Trending"
import Romance from "./components/Romance"

function App() {
  return (
    <div >
        <NavigationBar />

      {/* intro section */}
      <div className="myBG" >
        <Intro />
      </div>
      {/* end of intro */}

      {/* trending section*/}
      <div className="trending">
        <Trending/>
      </div>

      <div className='romance'>
        <Romance/>
      </div>

    </div>
      
  )
}

export default App;
