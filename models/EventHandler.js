// Import the 'EventEmitter' class from the built-in 'events' module.
const {EventEmitter} = require('node:events');
 
// Define a class called 'EventHandler' that extends the 'EventEmitter' class.
class EventHandler extends EventEmitter{ }

// Export the 'EventHandler' class to be used in other modules.
module.exports = {EventHandler}
