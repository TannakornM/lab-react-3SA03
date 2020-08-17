import React from 'react';
import './App.css';
import WordCard from './WordCard';

var text = ""; //question
var word = ""; //answer


//const word = "Hello";

var rand = Math.floor(Math.random() * 3);

switch (rand) {
  case 0:
    text = '"ช้าง" ในภาษาอังกฤษ คือ ?';
    word = "elephant";
    break;
  case 1:
    text = '"ยีราฟ" ในภาษาอังกฤษ คือ ?';
    word = "giraffe";
    break;
  case 2:
    text = '"Shark" ในภาษาไทย คือ ?';
    word = "ฉลาม";
    break;
}



function App() {
  return (
    <body>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>{text}</h1>
      <br></br>
      <br></br>
        <div class="cardlayout">
          <WordCard value={word} />
        </div>
    </body>
  );
}

export default App;
