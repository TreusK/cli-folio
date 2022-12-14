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

    function cdCmd(nestedObj, currentPath, cmdArgument) {
        if(doesItExist(nestedObj, cmdArgument)) {
            if(isItAFolder(nestedObj, cmdArgument)) {
                return [[...currentPath, cmdArgument], ''];
            } else {
                return [currentPath, `bash: cd: ${cmdArgument}: Not a directory`];
            }
        } else if(cmdArgument === '..') {
            if(currentPath.length === 1) {
                return [currentPath, ''];
            }
            return [currentPath.slice(0, -1), ''];
        }
        return [currentPath, `bash: cd: ${cmdArgument}: No such file or directory`];
    }

    function cmdLs(obj, currentPath) {
        let entirePath = checkPath(obj, currentPath);
        let keys = Object.keys(entirePath);
        return keys.map(elem => [elem, typeof entirePath[elem]]);
    }


    return {cdCmd, cmdLs, isItAFolder, isItValidCmd, doesItExist}
};

let commands = commandsModule();

export default commands