const { json } = require("node:stream/consumers");

const input = `[{"title":"Bill Gates","author":"The Road Ahead","libraryID":1254},{"title":"Steve Jobs","author":"Walter Isaacson","libraryID":4264},{"title":"Mockingjay: The Final Book of The Hunger Games","author":"Suzanne Collins","libraryID":3245}]`;

function AscendingSort(input) {
    const books = JSON.parse(input);

    books.sort((a, b) => a.libraryID - b.libraryID);
    
    return books.map(book => `${book.title} by ${book.author}, Library ID: ${book.libraryID}`);
}

const sortedOutput = AscendingSort(input);
sortedOutput.forEach(line => console.log(line));