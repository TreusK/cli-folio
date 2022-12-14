function commandsModule() {
    const validCommands = ['cat', 'cd', 'mkdir', 'touch', 'ls', 'help'];

    function checkPath(obj, currentPath) {
        const entirePath = currentPath.reduce((accumulator, elem) => accumulator[elem], obj);
        return entirePath;
    }

    function isItValidCmd() {
        return validCommands.includes(cmd);
    }
    function isItAFolder(obj, cmdArgument) {
        return (typeof obj[cmdArgument] === 'object') ? true : false;
    }
    function doesItExist(obj, cmdArgument) {
        return obj.hasOwnProperty(cmdArgument)
    }

    function pickCmdToRun(obj, currentPath, cmdArgument) {
        switch (cmd) {
            case 'cd': return cmdCd(obj, currentPath, cmdArgument);
        }
    }

    function cmdCd(obj, currentPath, cmdArgument) {
        console.log(cmd, argument);
        let entirePath = checkPath(obj, currentPath);
        if(doesItExist(entirePath, cmdArgument)) {
            if(isItAFolder(entirePath, cmdArgument)) {
                return [...currentPath, cmdArgument];
            }
        } else if(cmdArgument === '..') {
            return currentPath.slice(0, -1);
        }
        return currentPath;
    }

    function cmdLs(obj, currentPath) {
        let entirePath = checkPath(obj, currentPath);
        let keys = Object.keys(entirePath);
        return keys.map(elem => [elem, typeof entirePath[elem]]);
    }


    return {cmdCd, cmdLs, isItAFolder, isItValidCmd, pickCmdToRun}
};

let commands = commandsModule();

export default commands