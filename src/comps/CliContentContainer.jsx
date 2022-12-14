import React from 'react';
import BaseLine from './BaseLine';
import CmdResult from './CmdResult';

import './CliContentContainer.css';

function CliContentContainer ({isJustText, userInput, currentPath, result}) {
    return (
        <>
            <BaseLine isJustText={isJustText} userInput={userInput} currentPath={currentPath} />
            <CmdResult result={result}/>
        </>
    )
}

export default CliContentContainer;