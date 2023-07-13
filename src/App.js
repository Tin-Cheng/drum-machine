import './App.css';
import {Component} from 'react'

const drumPads = [
  ['Q','Heater-1','https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'],
  ['W','Heater-2','https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'],
  ['E','Heater-3','https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'],
  ['A','Heater-4','https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'],
  ['S','Clap','https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'],
  ['D','Open-HH','https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'],
  ['Z','Kick-n\'-Hat','https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'],
  ['X','Kick','https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'],
  ['C','Closed-HH','https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3']
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeKey:"None",key:"" };
    for(let i = 0; i < drumPads.length; i++){
      drumPads[i].push(new Audio(drumPads[i][2]));
    }
    document.addEventListener('keydown',(event)=>{
      this.playAudio(event.key.toUpperCase());
    })
  }
  componentDidMount(){
    this.playAudio=this.playAudio.bind(this);
    this.setActiveKey=this.setActiveKey.bind(this);
  }
  
  playAudio(id){
    let audio = document.getElementById(id);
    if (audio){
      audio.currentTime = 0;
      audio.play();
      this.setActiveKey(id);
    }
    
  }
  setActiveKey(key){
    this.setState({activeKey:key});
  }
  render(){
    const items = drumPads.map(i => 
      <div key={i[0]} className="drum-pad" id={i[1]} onClick={() =>{
        this.playAudio(i[0])
        }}>{i[0]}
        <audio className="clip" id={i[0]} src={i[2]}></audio>
        </div>);

    return (
      <div className="App" id="drum-machine">
        <div id="display"><p>{this.state.activeKey}</p>
          <div id="drum-pads" className="drum-pads">
            {items}
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
