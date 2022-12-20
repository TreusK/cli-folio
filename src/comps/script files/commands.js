function commandsModule() {

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

    function lsCmd(nestedObj, currentPath) {
        let keys = Object.keys(nestedObj);
        return keys.map(elem => [elem, typeof nestedObj[elem]]);
    }

    function catCmd(nestedObj, currentPath, cmdArgument) {
        if(doesItExist(nestedObj, cmdArgument)) {
            if(isItAFolder(nestedObj, cmdArgument)) {
                return [currentPath, `cat: ${cmdArgument}: Is a directory`];
            } else {
                return [currentPath, nestedObj[cmdArgument]];
            }
        }
        return [currentPath, `cat: ${cmdArgument}: No such file or directory`];
    }

    function helpCmd() {
        return [' cat cd clear ls help '];
    }


    return {cdCmd, lsCmd, catCmd, helpCmd}
};

let commands = commandsModule();

export default commands