import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending'
import "./style/landingPage.css"

function App() {
  return (
    <div>
      {/* intro section */}
      <div className='MyBG'>
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}

      {/* trending section */}
      <div className='trending'>
        <Trending/>
      </div>
      {/* end of trending section */}
    </div>
  );
}

export default App;
