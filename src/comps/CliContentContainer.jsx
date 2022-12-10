import React from 'react';
import BaseLine from './BaseLine';
import CmdResult from './CmdResult';

import './CliContentContainer.css';

function CliContentContainer ({isJustText, command, currentPath}) {
    return (
        <>
            <BaseLine isJustText={isJustText} command={command} currentPath={currentPath} />
            <CmdResult />
        </>
    )
}

export default CliContentContainer;