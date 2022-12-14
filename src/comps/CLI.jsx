import {useState, useRef, useEffect} from 'react';
import BaseLine from './BaseLine';
import CliContentContainer from './CliContentContainer';

import './CLI.css';
import directoryTree from './script files/tree.js';
import commands from './script files/commands.js';

function CLI() {
    //-history- save past commands   -inputValue- duh   
    //-tree- object as pseudo directory tree  -currentPath- string to know current location in directory
    //-cliRef- div under the last BaseLine to autoscroll to
    const [history, setHistory] = useState([]);
    const [tree, setTree] = useState(directoryTree);
    const [currentPath, setCurrentPath] = useState(['root', 'Desktop', 'cli-folio']);
    const cliRef = useRef();

    //Scroll to the bottom of the CLI every time history changes 
    useEffect(() => {
        cliRef.current.scrollIntoView();
    }, [history])

    //Function to save the values of the input on Enter in the history state, and reset input string
    function handleSubmit(inputValue) {
        let [command, argument] = analyzeInput(inputValue);
        let obj = {userInput: inputValue, result: 'im result'}
        setHistory(history => [...history, obj]);
    }

    //Function to analyze input value
    function analyzeInput(str) {
        let strCopy = str.trim().split(/\s+/);
        let cmd = strCopy[0];
        let arg = strCopy[1];
        return [cmd, arg];
    }
    
  return (
    <div className="CLI">
      <div className="cliHead">
                <div className="headInfo">
                    <img className='headIcon' src="#" />
                    <p className="headDir">MINGW64:/c/Users/Me</p>
                </div>
                <div className="headButtons">
                    <div className="winBtn minimizeBtn">-</div>
                    <div className="winBtn enlargeBtn">//</div>
                    <div className="winBtn closeBtn">X</div>
                </div>
            </div>

            <div className="cliBody">
                {history.map(elem => <CliContentContainer isJustText={true} userInput={elem.userInput} currentPath={currentPath} result={elem.result}/>)}
                <BaseLine isJustText={false} handleSubmit={handleSubmit} currentPath={currentPath}/>
                <div ref={cliRef} />
            </div>
    </div>
  )
}

export default CLI
