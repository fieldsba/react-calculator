import {ACTIONS} from './App.js';

//handles onclick for digit buttons - adds the digit corresponding to the 
//digit button that was pressed
export default function DigitButton({dispatch, digit}) {
    return(

     <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}}) }
     
        >{digit}</button>
  )  
}