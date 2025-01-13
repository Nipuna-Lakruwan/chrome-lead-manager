import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js"

const firebaseConfig = {
    databaseURL: process.env.DATABASE_URL
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Challenge: Create a const called 'referenceInDB' and use the ref function to create a reference called 'leads' in the database
const referenceInDB = ref(database, "leads");

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}

// Fetch data from the database and render it
onValue(referenceInDB, (snapshot) => {
    const data = snapshot.val();
    if (data) {
        const leadsArray = Object.values(data); // Convert the object to an array
        render(leadsArray);
    } else {
        ulEl.innerHTML = ""; // Clear the list if no data exists
    }
});

// Add lead to the database
inputBtn.addEventListener("click", function () {
    const inputValue = inputEl.value.trim(); // Get the input value
    if (inputValue) {
        push(referenceInDB, inputValue); // Push the input value to the database
        inputEl.value = ""; // Clear the input field
    }
});

// Delete all leads from the database
deleteBtn.addEventListener("dblclick", function () {
    remove(referenceInDB); // Remove all data under the 'leads' reference in the database
});