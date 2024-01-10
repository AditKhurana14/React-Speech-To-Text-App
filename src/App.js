import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './CSS/sample.css';

const App = () => {
  const commands=[{
    command:'reset',
    callback:({resetTranscript})=>resetTranscript()
  },
  {
    command:'change colour to *',
    callback:(color)=>{
      document.body.style.background=color;
    }
  },
    {
      command:'open *',
      callback:(site)=>{
        window.open('http://'+site);
      }
    }
  
  ]
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({commands});

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div class="container" >
      <h1 class="display-1">Speech To Text </h1>
      <p className=''>Microphone: {listening ? 'on' : 'off'}</p>
      <button className="btn btn-primary"onClick={SpeechRecognition.startListening }>Start</button>
      <button className="btn btn-primary" onClick={SpeechRecognition.stopListening}>Stop</button>
      <button className="btn btn-primary" onClick={resetTranscript}>Reset</button>
   
      <p className="  textbox"> Your Text is Here : {transcript}</p>
    </div>
  );
};
export default App;