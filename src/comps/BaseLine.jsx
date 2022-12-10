import './BaseLine.css'

//Props:
//isJustText - condition to differentiate between past commands as pure text, and current one with a working input
//handleSubmit, handleInputChange - change respective states up in CLI parent
//command - string of past commands
//inputValue - as is
//currentPath - string to know current path in the directory
function BaseLine({isJustText, handleSubmit, handleInputChange, command, inputValue, currentPath}) {
    let cPathCopy = [...currentPath];
    cPathCopy[0] = '~';
    let stringPath = cPathCopy.join('/');
    
    
    if(isJustText) {
        return (
            <div className="BaseLine">
                <p><span className='greenText'>meme@meme-PC</span> <span className='purpleText'>MINGW64</span> <span className='goldText'>{stringPath}</span></p>
                <span className='dollarSign'>$</span> <span>{command}</span> 
            </div>

        )
    } else {
        return (
            <div className="BaseLine">
                <p><span className='greenText'>meme@meme-PC</span> <span className='purpleText'>MINGW64</span> <span className='goldText'>{stringPath}</span></p>
                <span className='dollarSign'>$</span> <input className='cliInput' 
                                                             type='text' 
                                                             onChange={handleInputChange}
                                                             value={inputValue}
                                                             onKeyDown={handleSubmit} 
                                                             autoFocus></input>
            </div>
        )
            
    }
}

export default BaseLine
