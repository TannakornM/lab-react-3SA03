import React, { useState } from 'react';
import _, { attempt } from 'lodash';
import CharacterCard from './CharacterCard';



var temp = 0;



const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 0,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => { 
        console.log(`${c} has been activated.`) 

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                //console.log('yeah!')
                alert("Good !!");
                setState({...state, guess: '', completed: true});
                window.location.reload(false);
            }else{
                //console.log('reset')
                alert("try agian !!");
                state.attempt += 1;
                setState({...state, guess: '', attempt: state.attempt});
            }
        }
        temp = state.attempt;

    }


    return (
        <div>
            
            <div class="AttemptAndAnswer">
                
                Attempt : {temp}
                <br></br>
                <br></br>
                <br></br>
                
            </div>


            { 
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>) 
            }
        </div>
    )
}
