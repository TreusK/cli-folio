function commandsModule() {

  function isItAFolder(obj, cmdArgument) {
    return (typeof obj[cmdArgument] === 'object') ? true : false;
  }
  function doesItExist(obj, cmdArgument) {
    let keysLower = Object.keys(obj).map(elem => elem.toLowerCase());
    let cmdLower = cmdArgument.toLowerCase();
    return keysLower.includes(cmdLower)
  }


  function cdCmd(nestedObj, currentPath, cmdArgument) {
    if(cmdArgument !== undefined && doesItExist(nestedObj, cmdArgument)) {
      let keys = Object.keys(nestedObj);
      let keysLower = keys.map(elem => elem.toLowerCase());
      let cmdLower = cmdArgument.toLowerCase();
      let correctArgIndex = keysLower.indexOf(cmdLower);
      let correctArg = keys[correctArgIndex];
      if (isItAFolder(nestedObj, correctArg)) {
        return [[...currentPath, correctArg], ''];
      } else {
        return [currentPath, `bash: cd: ${cmdArgument}: Not a directory`];
      }
    } else if (cmdArgument === '..') {
      if (currentPath.length === 1) {
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
    if (cmdArgument !== undefined && doesItExist(nestedObj, cmdArgument)) {
      let keys = Object.keys(nestedObj);
      let keysLower = keys.map(elem => elem.toLowerCase());
      let cmdLower = cmdArgument.toLowerCase();
      let correctArgIndex = keysLower.indexOf(cmdLower);
      let correctArg = keys[correctArgIndex];
      if (isItAFolder(nestedObj, correctArg)) {
        return `cat: ${cmdArgument}: Is a directory`;
      } else {
        return nestedObj[correctArg];
      }
    }
    return `cat: ${cmdArgument}: No such file or directory`;
  }

  function helpCmd() {
    return ['cat  cd  clear  ls  help'];
  }


  return { cdCmd, lsCmd, catCmd, helpCmd }
};

let commands = commandsModule();

export default commands