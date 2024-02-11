import { promises as fsPromises } from 'fs';

// Attach 'exit' and 'unhandledRejection' events to the 'process' object
process.on('exit', (code) => {
  console.log(`'exit' event called with code ${code}`);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

// Promisified version of fs.readFile
const readFileAsync = (filePath) => {
  return new Promise((resolve, reject) => {
    fsPromises.readFile(filePath, { encoding: 'utf8' })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
};

// Incorrect file name to trigger an exception
const incorrectFileName = 'nonexistent-file.txt';

// Call the promisified readFileAsync function
readFileAsync(incorrectFileName)
  .then(data => {
    console.log('File content:', data);
  })
  .catch(error => {
    console.error('Error reading file:', error);
    // Throw a new Error from catch handler
    throw new Error('Custom Error');
  });
