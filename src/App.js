import React from 'react'; 
import './App.css';
import Parallax from 'react-rellax'



//Material UI
import Button from '@material-ui/core/Button'

//Illustrations 
import LateAtNight from './components/LateAtNight';


function App() {

  return (
    <>
    <div className="app">
      <div className="left-side">
        <h1>Demo C4B Rellax 3D Scroll Effect</h1>
        <p className="paragraph">First sentence that moves rapidly. I love it!</p>
        <p className="paragraph">This one moves slowly...</p>
        <p className="paragraph">Again! This sentence is a rapid one!</p>
        <Button variant="outlined" color="error">
            More
        </Button>
      </div>



      <div className="right-side">
        <Parallax speed={ -10 }>
          <LateAtNight/>
        </Parallax>
      </div>
    
    </div>
      <div className="green-section">
      <h2>See you soon!</h2>
    </div>
    </>
  );
}

export default App;
