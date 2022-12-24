let directoryTree = {
    root: {
        Portfolio: {
            Projects: {
                    "2do": {
                        "about.txt": `
(Made with vanilla JS)

A simple todo list

[[https://github.com/TreusK/2do]] ((Github Repo))
                        `,
                    preview: `
[[https://user-images.githubusercontent.com/47334597/209246023-44b12783-512e-4e27-911c-c3cc22de3179.png]] ((Preview))
                    `,
                    live: `
[[https://treusk.github.io/2do/]] ((Live - Github Pages))
`
                    },
                    LM2: {
                        "about.txt": `
(Made with React)

La Mulana (1 and 2) are great metroidvanias. 

One characteristic they have is the need to take notes constantly. While playing La Mulana 2 I started taking notes in a simple html page 
with a screenshot of the game, and later on decided to might as well make it a full project.
You can drag and drop icons into the cells, mark each one with numbers, and edit/add notes under each map. 
Your maps are saved to localStorage, but you can also download them as a .json file, to import/export freely.

In the end I did not beat the game, because by working on this I spoiled myself of all the maps and secrets. 

[[https://github.com/TreusK/lm2react]] ((Github Repo))                      
                        `,
                    preview: `
[[https://user-images.githubusercontent.com/47334597/209446228-66bf9ecf-f811-40bd-b54e-871f5f0ce21e.png]] ((Preview))
                    `,
                    live: `
[[https://treusk.github.io/lm2react/]] ((Live - Github Pages))
`
                    },
                    WhereIsPikachu: {
                        "about.txt": `
(Made using React, Firebase, Bulma.css, PokeApi)

This Odin challenge was about creating a Where's Waldo and keeping the state of scores in a BAAS like Firebase. 
Other than that I added difficulty levels, scores and a Random option, which picks 3 pokemon from the coordinates object and 
fetches the sprites from Pokeapi.

[[https://github.com/TreusK/wheres-pikachu]] ((Github Repo))                    
                        `,
                    preview: `
[[https://user-images.githubusercontent.com/47334597/173821545-f3b8ad0c-0ce3-4648-bde2-dad226515310.jpg]] ((Preview))
                    `,
                    live: `
[[https://where-is-pikachu.web.app/]] ((Live - Firebase))
`
                    },
                    Others: {
                        "onOthers.txt": `
Here lie smaller projects, not really worthy of their own folders
                        `,
                        JapMemoryGame: `[[https://treusk.github.io/memory-game/]] ((Live - Jap Memory Game))`,
                        CVUpload: `[[https://treusk.github.io/cvUp/]] ((Live - CV Upload))`,
                        Calculator: `[[https://treusk.github.io/Calculator/]] ((Live - Calculator))`,
                        EtchASketch: `[[https://treusk.github.io/Etch-A-Sketch/]] ((Live - Etch A Sketch))`,
                        TicTacToe: `[[https://treusk.github.io/TicTacToe/]] ((Live - Tic Tac Toe))`,
                        BookShop: `[[https://treusk.github.io/bookShopCart/]] ((Live - Book Shop))`,
                    }
                },
            "aboutMe.txt": `

Hi
I'm Lutri, from Argentina.

I rather hit my head against logical problems since those are the most fun to solve, 
so for a portfolio I decided to focus on something more functional than pretty. 
                `,
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
        `,
    }
}

export default directoryTree;