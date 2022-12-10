function commandsModule() {
    let cmd = '';
    let argument = '';
    let validCommands = ['cat', 'cd', 'mkdir', 'touch', 'ls', 'help'];

    function checkPath(obj, currentPath) {
        const entirePath = currentPath.reduce((accumulator, elem) => accumulator[elem], obj);
        return entirePath;
    }

    function analyzeCmd(str) {
        cmd = str.trim().split(' ')[0];
        argument = str.trim().split(' ')[1];
    }

    function isItValidCmd() {
        return validCommands.includes(cmd);
    }
    function isItAFolder(obj, path) {
        return (typeof obj[path] === 'object') ? true : false;
    }
    function doesItExist(obj, path) {
        return obj.hasOwnProperty(path)
    }

    function pickCmdToRun(obj, currentPath, path) {
        switch (cmd) {
            case 'cd': return cmdCd(obj, currentPath, path);
        }
    }

    function cmdCd(obj, currentPath, path) {
        console.log(cmd, argument);
        let entirePath = checkPath(obj, currentPath);
        if(doesItExist(entirePath, path)) {
            if(isItAFolder(entirePath, path)) {
                return [...currentPath, path];
            }
        } else if(path === '..') {
            return currentPath.slice(0, -1);
        }
        return currentPath;
    }

    function cmdLs(obj) {
        console.log(Object.keys(obj));
    }


    return {analyzeCmd, cmdCd, cmdLs, isItAFolder, isItValidCmd, pickCmdToRun}
};

let commands = commandsModule();

export default commands