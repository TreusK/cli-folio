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
    const [inputValue, setInputValue] = useState('');
    const [tree, setTree] = useState(directoryTree);
    const [currentPath, setCurrentPath] = useState(['root', 'Desktop', 'cli-folio']);
    const cliRef = useRef();

    //Scroll to the bottom of the CLI every time history changes (ie every time a new command was run)
    useEffect(() => {
        cliRef.current.scrollIntoView();
    }, [history])

    //Function to save the values of the input on Enter in the history state, and reset input string
    function handleSubmit(e) {
        if(e.key === 'Enter') {
            let obj = {
                command: inputValue,
                result: 'cuek',
            }
            runCmd();
            setHistory(history => [...history, obj]);
            setInputValue('');
        } 
    }

    function runCmd() {
        commands.analyzeCmd(inputValue);
        if(commands.isItValidCmd()) {
            console.log(commands.pickCmdToRun(tree, currentPath, 'other-projects'))
        }; 
    }

    //Function to handle change in the input inside BaseLine
    function handleInputChange(e) {
        setInputValue(e.target.value)
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
                {history.map(elem => <CliContentContainer isJustText={true} command={elem.command} currentPath={currentPath} />)}
                <BaseLine isJustText={false} handleSubmit={handleSubmit} handleInputChange={handleInputChange} inputValue={inputValue} currentPath={currentPath}/>
                <div ref={cliRef} />
            </div>
    </div>
  )
}

export default CLI
