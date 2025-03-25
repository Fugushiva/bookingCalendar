// Get today's date
const todayDate = new Date();

// List of month names
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Select elements from the DOM
let dateDivText = document.getElementsByClassName('date')[0];
let dateH1 = dateDivText.getElementsByTagName("h1")[0];
let leftArrow = document.getElementById('leftArrow');
let rightArrow = document.getElementById('rightArrow');

// This variable tracks the currently displayed month
let currentDate = new Date();

/**
 * Updates the calendar header with the current month and year.
 * Also displays the selected date in dd/mm/yyyy format inside the <p> tag.
 *
 * @param {Date} date - The date object representing the current view.
 */
function updateCalendarHeader(date) {
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    dateH1.innerHTML = `${month} ${year}`;

    let dateP = document.querySelector('.date p');
    const day = String(date.getDate()).padStart(2, '0');
    const monthNum = String(date.getMonth() + 1).padStart(2, '0');
    dateP.innerHTML = `${day}/${monthNum}/${year}`;
}

// Initialize the calendar with today's date
updateCalendarHeader(currentDate);
console.log(currentDate.getMonth() + 1);

/**
 * Event listener for the left arrow (previous month).
 * Decrements the current month and updates the calendar header.
 */
leftArrow.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendarHeader(currentDate);
    console.log(daysInMonth(currentDate.getMonth() + 1, currentDate.getFullYear()));
});

/**
 * Event listener for the right arrow (next month).
 * Increments the current month and updates the calendar header.
 */
rightArrow.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendarHeader(currentDate);
    console.log(daysInMonth(currentDate.getMonth() + 1, currentDate.getFullYear()));
});

/**
 * Calculates the number of days in a given month and year.
 *
 * @param {number} month - The month (1-12).
 * @param {number} year - The full year (e.g., 2025).
 * @returns {number} The number of days in the specified month.
 */
function daysInMonth(month, year){
    return new Date(year, month, 0).getDate();
}

/**
 * Generates and displays day elements for the given month/year.
 *
 * @param {number} month - The month (0-11).
 * @param {number} year - The year (e.g. 2025).
 */
function generateDays(month, year) {
    const daysContainer = document.querySelector('.days');
    daysContainer.innerHTML = '';

    const numDays = daysInMonth(month + 1, year);
    const firstDayIndex = new Date(year, month, 1).getDay(); // 0 (Sun) to 6 (Sat)

    // 🔸 Ajouter les cases vides avant le 1er du mois
    for (let i = 0; i < firstDayIndex; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.classList.add('empty'); // classe facultative pour styliser
        daysContainer.appendChild(emptyDiv);
    }

    // 🔹 Puis les vrais jours
    for (let day = 1; day <= numDays; day++) {
        const dayContainer = document.createElement('div');
        dayContainer.className = 'dc';

        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';

        const dayRect = document.createElement('p');
        dayRect.className = 'day-rect';
        dayRect.textContent = day;

        const carreContainer = document.createElement('div');
        carreContainer.className = 'carre-container';

        const montherBox = document.createElement('div');
        montherBox.className = 'montherBox';

        for (let i = 1; i <= 4; i++) {
            const box = document.createElement('div');
            box.className = 'childBox';
            box.id = `${year}-${month + 1}-${day}-${i}`;
            montherBox.appendChild(box);
        }

        carreContainer.appendChild(montherBox);
        dayDiv.appendChild(dayRect);

        dayContainer.appendChild(dayDiv);
        dayContainer.appendChild(carreContainer);
        daysContainer.appendChild(dayContainer);
    }
}






function updateCalendarHeader(date) {
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    dateH1.innerHTML = `${month} ${year}`;

    let dateP = document.querySelector('.date p');
    const day = String(date.getDate()).padStart(2, '0');
    const monthNum = String(date.getMonth() + 1).padStart(2, '0');
    dateP.innerHTML = `${day}/${monthNum}/${year}`;

    generateDays(date.getMonth(), date.getFullYear());
}


