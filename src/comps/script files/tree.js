let directoryTree = {
    root: {
        Projects: {
                    "2do": `
(Made using vanilla JS)

A simple todo list

Links:
[[https://github.com/TreusK/2do]] ((Github Repo)) 

[[https://treusk.github.io/2do/]] ((Live - Github Pages))
`,
                    AnimeSearch: `
(Made using React, React-Bootstrap)

Anime searching web app, search by name or by year or genre, or combine at will.

Links:
[[https://github.com/TreusK/animeSearch]] ((Github Repo))                      
 
[[https://treusk.github.io/animeSearch/]] ((Live - Github Pages))
`,
                    GroupChat: `
(Made using React, Tailwind, Axios for the front end)
(Node, Mongo, Socket for the backend)

Single page public chat app, with user id, database, ability to delete your own messages, etc. 

Links:
[[https://github.com/TreusK/groupChat]] ((Github Repo - Frontend))                      
[[https://github.com/TreusK/groupChatServer]] ((Github Repo - Backend))                      
 
[[https://groupchat-sk0v.onrender.com/]] ((Live - Render))
`,
                    LM2: `
(Made using React)

La Mulana (1 and 2) are great metroidvanias. 

One characteristic they have is the need to take notes constantly. While playing La Mulana 2 I started taking notes in a simple html page 
with a screenshot of the game, and later on decided to might as well make it a full project.
You can drag and drop icons into the cells, mark each one with numbers, and edit/add notes under each map. 
Your maps are saved to localStorage, but you can also download them as a .json file, to import/export freely.

In the end I did not beat the game, because by working on this I spoiled myself of all the maps and secrets. 

Links:
[[https://github.com/TreusK/lm2react]] ((Github Repo))                      
 
[[https://treusk.github.io/lm2react/]] ((Live - Github Pages))
`,
                    PokeTeam: `
(Made using React, Tailwind, React-Router, EmailJS)

A card based pokemon team maker, with some details like drag and drop, saving teams, saving moves, contact page, etc

Links:
[[https://github.com/TreusK/pokeTeam]] ((Github Repo))                      
 
[[https://treusk.github.io/pokeTeam/]] ((Live - Github Pages))
`,
                    WhereIsPikachu: `
(Made using React, Firebase, Bulma.css, PokeApi)

This Odin challenge was about creating a Where's Waldo and keeping the state of scores in a BAAS like Firebase. 
Other than that I added difficulty levels, scores and a Random option, which picks 3 pokemon from the coordinates object and 
fetches the sprites from Pokeapi.

Links:
[[https://github.com/TreusK/wheres-pikachu]] ((Github Repo))                    

[[https://where-is-pikachu.web.app/]] ((Live - Firebase))
`,
                    Others: {
                        "aboutOthers.txt": `
  Herein lie smaller projects, unworthy of their own description text.
                        `,
                        Dashboard: `[[https://github.com/TreusK/dashboard]] ((Github Repo))`,
                        JapMemoryGame: `[[https://treusk.github.io/memory-game/]] ((Live - Jap Memory Game))`,
                        CVUpload: `[[https://treusk.github.io/cvUp/]] ((Live - CV Upload))`,
                        Calculator: `[[https://treusk.github.io/Calculator/]] ((Live - Calculator))`,
                        EtchASketch: `[[https://treusk.github.io/Etch-A-Sketch/]] ((Live - Etch A Sketch))`,
                        TicTacToe: `[[https://treusk.github.io/TicTacToe/]] ((Live - Tic Tac Toe))`,
                        BookShop: `[[https://treusk.github.io/bookShopCart/]] ((Live - Book Shop))`,
                    }
                },
        "aboutThis.txt": `
A simple CLI to move around a directory tree with folders and text files, represented by 
an object with nested objects and strings.

    The available commands are:
    -cat: to read "files"
    -cd: to move up or down the object
    -clear: to clear the screen
    -ls: to show the content of the current folder
    -help: to show the commands list

    Extra funcionality includes:
    -component always scrolls down to current input
    -Up and Down arrows scroll through past inputs
    -error messages when attempting illegal commands/arguments
    -limit number of past commands to be rendered, as to not grow it unnecessarily
    -modifying tree.js means you can render your own directory tree, 
    since most functional values aren't hard coded

  Links:
    [[https://github.com/TreusK/cli-folio]] ((Github Repo)) 
        `,
        "aboutMe.txt": `

 I'm Lutri and I live in Argentina. 
 Know enough english to do anything I want except talk, and enough japanese to 
 read the simplest of web novels, still working on that.

 You can reach me at flutri@protonmail.com
 Or check my github page over [[https://github.com/TreusK]] ((Here))
`,
  }
}

export default directoryTree;