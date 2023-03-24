// Import the 'EventHandler' class from the 'models/EventHandler' module and the 'Read' and 'enProgram' functions from the 'functions' module.
const {
    EventHandler
} = require('./models/EventHandler');
const {
    Read,
    enProgram
} = require('./functions');

// Define a function called 'Main' to set up event handlers and emit events.
function Main() {
    // Create a new instance of the 'EventHandler' class.
    let myEventHandler = new EventHandler();

    // Add a listener for the 'read' event that calls the 'Read' function.
    myEventHandler.on('read', Read);
    
    // Add a listener for the 'printWithStars' event that calls the 'enProgram' function.
    myEventHandler.on('printWithStars', enProgram);

    // Emit the 'read' event to trigger the 'Read' function.
    myEventHandler.emit('read');

    // Wait 3 seconds, then emit the 'printWithStars' event to trigger the 'enProgram' function.
    setTimeout(() => {
        myEventHandler.emit('printWithStars');
    }, 3000);
}

// Call the 'Main' function to run the program.
Main();
