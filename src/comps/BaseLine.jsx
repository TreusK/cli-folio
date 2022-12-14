import {useState} from 'react';
import './BaseLine.css'


function BaseLine({isJustText, handleSubmit, userInput, currentPath}) {
    let cPathCopy = [...currentPath];
    cPathCopy[0] = '~';
    let stringPath = cPathCopy.join('/');
    
    const [value, setValue] = useState('');

    function handleInputChange(e) {
        setValue(e.target.value)
    }

    function handleKeyDown(e) {
        if(e.key === 'Enter') {
            handleSubmit(value);
            setValue('');
        }
    }

    return (
        <div className="BaseLine">
            <p><span className='greenText'>meme@meme-PC</span> 
                <span className='purpleText'>MINGW64</span> 
                <span className='goldText'>{stringPath}</span></p>

            { isJustText 
                ? <><span className='dollarSign'>$</span> <span>{userInput}</span></> 
                : <><span className='dollarSign'>$</span> <input className='cliInput' 
                        type='text' 
                        onChange={handleInputChange}
                        value={value}
                        onKeyDown={handleKeyDown} 
                        autoFocus></input></>}
        </div>
            
    )}

export default BaseLine
