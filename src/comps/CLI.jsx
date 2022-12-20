import {useState, useRef, useEffect} from 'react';
import BaseLine from './BaseLine';

import './CLI.css';
import bashIcon from '../images/git-bash.ico';
import directoryTree from './script files/tree.js';
import commands from './script files/commands.js';

function CLI() {
    //-history- save past commands   -inputValue- duh   
    //-tree- object as pseudo directory tree  -currentPath- string to know current location in directory
    //-cliRef- div under the last BaseLine to autoscroll to
    const [history, setHistory] = useState([{
        oldPath: ['root', 'Desktop', 'cli-folio'],
        userInput: "type help to see available commands",
        result: [],
    }]);
    const [tree, setTree] = useState(directoryTree);
    const [currentPath, setCurrentPath] = useState(['root', 'Desktop', 'cli-folio']);
    const cliRef = useRef();

    //Scroll to the bottom of the CLI every time history changes 
    useEffect(() => {
        cliRef.current.scrollIntoView();
    }, [history])

    //Function to save the values of the input on Enter in the history state
    function handleSubmit(inputValue) {
        let [command, argument] = analyzeInput(inputValue);
        let nestedObj = checkPath(tree, currentPath);
        let defaultRes =[];
        let oldPath = [...currentPath];
        if(command === 'cd') {
            let [newPath, message] = commands.cdCmd(nestedObj, currentPath, argument);
            defaultRes = [message];
            setCurrentPath(newPath);
        } else if(command === 'ls') {
            let arr = commands.lsCmd(nestedObj, currentPath);
            defaultRes = [...arr];
        } else if(command === 'cat') {
            let [newPath, message] = commands.catCmd(nestedObj, currentPath, argument);
            defaultRes = [message];
        } else if(command === 'help') {
            defaultRes = commands.helpCmd();
        } else if(command === 'clear') {
            setHistory([]);
            return;
        }
        let obj = {oldPath: oldPath, userInput: inputValue, result: defaultRes};
        setHistory(history => [...history, obj]);
    }

    //Function to analyze input value into command and argument
    function analyzeInput(str) {
        let strCopy = str.trim().split(/\s+/);
        let cmd = strCopy[0];
        let arg = strCopy[1];
        return [cmd, arg];
    }

    //Function to make a copy (by reference but that doesn't matter) of the nested obj in Tree, to access its properties
    function checkPath(obj, currentPath) {
        const nestedObj = currentPath.reduce((accumulator, elem) => accumulator[elem], obj);
        return nestedObj;
    }
    
  return (
    <div className="CLI">
      <div className="cliHead">
                <div className="headInfo">
                    <img className='headIcon' src={bashIcon} />
                    <p className="headDir">MINGW64:/c/Users/Me</p>
                </div>
                <div className="headButtons">
                    <div className="winBtn minimizeBtn">–</div>
                    <div className="winBtn enlargeBtn">//</div>
                    <div className="winBtn closeBtn">X</div>
                </div>
            </div>

            <div className="cliBody">
                {history.map(elem => <BaseLine isJustText={true} 
                                               userInput={elem.userInput} 
                                               path={elem.oldPath} 
                                               result={elem.result}
                                               key={Math.random()*10}/>)}
                <BaseLine isJustText={false} 
                          handleSubmit={handleSubmit} 
                          path={currentPath}/>
                <div ref={cliRef} />
            </div>
    </div>
  )
}

export default CLI
