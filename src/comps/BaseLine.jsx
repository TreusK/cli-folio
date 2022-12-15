import {useState} from 'react';
import './BaseLine.css'


function BaseLine({isJustText, handleSubmit, userInput, path, result}) {
    let cPathCopy = [...path];
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
                ? <div>
                    <span className='dollarSign'>$</span> <span>{userInput}</span>
                    <div>{result.map(elem => {
                        if(typeof elem === 'object') {
                           return (elem[1]==='object') ? <p className='folder'>{elem[0]}/</p> : <p>{elem[0]}</p>
                        } else {
                            return <p>{elem}</p>
                        }   
                        })}
                    </div>
                  </div> 
                : <div>
                    <span className='dollarSign'>$</span> <input className='cliInput' 
                        type='text' 
                        onChange={handleInputChange}
                        value={value}
                        onKeyDown={handleKeyDown} 
                        autoFocus></input>
                  </div>}
        </div>
            
    )}

export default BaseLine
