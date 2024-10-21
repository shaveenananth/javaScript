// Selecting popup box, popup overlay button
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

var currentbookdiv = null; // Variable to keep track of the current book being edited

addpopupbutton.addEventListener("click", function() {
    // Clear input fields when opening the popup for a new book
    booktitleinput.value = '';
    bookauthorinput.value = '';
    bookdescriptioninput.value = '';
    
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Select cancel button
var cancelbutton = document.getElementById("cancel-popup");
cancelbutton.addEventListener("click", function(event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Select overall container, add-book, book-title-input, book-author-input, book-description-input
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function(event) {
    event.preventDefault();

    if (currentbookdiv) {
        // Update existing book
        currentbookdiv.querySelector("h2").textContent = booktitleinput.value;
        currentbookdiv.querySelector("h5").textContent = bookauthorinput.value;
        currentbookdiv.querySelector("p").textContent = bookdescriptioninput.value;
        currentbookdiv = null; // Reset after editing
    } else {
        // Create new book
        var div = document.createElement("div");
        div.setAttribute("class", "bookcontainer");
        div.innerHTML = `<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletebook(event)">Delete</button>
            <button onclick="editbook(event)">Edit</button>`; // Pass event to editbook
        container.append(div);
    }

    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

function deletebook(event) {
    event.target.parentElement.remove();
}

function editbook(event) {
    currentbookdiv = event.target.parentElement; // Set the current book to be edited
    booktitleinput.value = currentbookdiv.querySelector("h2").textContent; // Fill input fields
    bookauthorinput.value = currentbookdiv.querySelector("h5").textContent;
    bookdescriptioninput.value = currentbookdiv.querySelector("p").textContent;

    popupoverlay.style.display = "block"; // Show popup for editing
    popupbox.style.display = "block";
}
