// Import the 'path' module to help with file paths and the 'fs/promises' module to work with files using promises.
const path = require('path')
const {
    readFile,
    appendFile
} = require('node:fs/promises');

// Define an asynchronous function called 'Read' to read a random file.
async function Read() {
    // Generate a random integer between 1 and 5 to pick a random file.
    let n = Math.floor(Math.random() * 5) + 1
    try {
        // Read the contents of the selected file using the 'readFile' function and log it to the console.
        let a = await readFile(path.join(__dirname, 'files', `test${n}.txt`))
        console.log(a.toString());
    } catch (err) {
        // If there is an error, log it to the console.
        console.error(err);
    }
}

// Define an asynchronous function called 'enProgram' to write to files.
async function enProgram() {
    // Define a string of stars to be written to each file.
    let stars = "* * * * * * * * * *"
    // Loop through 5 files and append the stars string to each file, then read and log the contents of the file.
    for (let i = 1; i < 6; i++) {
        await appendFile(path.join(__dirname, 'files', `test${i}.txt`),'\n'+stars+'\n');
        let b = await readFile(path.join(__dirname, 'files', `test${i}.txt`));
        console.log(b.toString());
    }
}

// Export the 'Read' and 'enProgram' functions to be used in other modules.
module.exports = {
    Read,
    enProgram
};
