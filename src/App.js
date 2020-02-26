import React,{ Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import './App.css';
import Logo from './components/Logo/Logo';
import Imagelinkform from './components/Imagelinkform/Imagelinkform';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


const app = new Clarifai.App({
 apiKey: 'c4edd9eb93784395806f82b93a7270ac'
});

const particleOption={
      "particles": {
          "number": {
              "value": 200
          },
          "size": {
              "value": 3
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }

}

class App extends Component {

  constructor(){
    super();
    this.state = {
     input: '',
      imageUrl: '',
      box:{}
    }
  }

 calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }


 onInputChange = (event) => {
    this.setState({input:event.target.value});
  }

 onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response=> this.displayFaceBox(this.calculateFaceLocation(response)))
     .catch(err =>console.log(err));
  }

  render(){
     return(
        <div className="App">
            <Particles className="particles" params={particleOption} />
                <div className="center pa4">
                    <Logo />
                   
                </div>
                    <Imagelinkform 
                        onInputChange={this.onInputChange}
                        onButtonSubmit={this.onButtonSubmit} 
                    />
                <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
        </div>
    );
    
  }
    
   
}

export default App;
