1. JavaScript Basics & Setup
main.js
console.log("Welcome to the Community Portal");

window.onload = function() {
  alert("Page is fully loaded");
};

 
2. Syntax, Data Types, and Operators
const eventName = "Music Night";
const eventDate = "2025-06-01";
let availableSeats = 50;

console.log(`${eventName} on ${eventDate}. Seats available: ${availableSeats}`);

function register() {
  if (availableSeats > 0) {
    availableSeats--;
    console.log(`Registered! Seats left: ${availableSeats}`);
  } else {
    console.log("No seats left!");
  }
}

 
3. Conditionals, Loops, and Error Handling
const events = [
  { name: "Music Night", date: "2025-06-01", seats: 10 },
  { name: "Art Workshop", date: "2025-05-01", seats: 0 },
  { name: "Tech Talk", date: "2024-12-01", seats: 5 }
];

const today = new Date("2025-05-26");

events.forEach(event => {
  const eventDate = new Date(event.date);
  if (eventDate > today && event.seats > 0) {
    console.log(`Upcoming: ${event.name}`);
  }
});

function registerForEvent(event) {
  try {
    if (event.seats <= 0) throw new Error("Event is full");
    event.seats--;
    console.log(`Registered for ${event.name}`);
  } catch (err) {
    console.error(err.message);
  }
}

 
4. Functions, Scope, Closures, Higher-Order Functions
function addEvent(events, newEvent) {
  events.push(newEvent);
}

function registerUser(event) {
  if (event.seats > 0) {
    event.seats--;
    return true;
  }
  return false;
}

function filterEventsByCategory(events, category) {
  return events.filter(e => e.category === category);
}

function categoryRegistrationTracker() {
  const counts = {};
  return function(category) {
    counts[category] = (counts[category] || 0) + 1;
    return counts[category];
  };
}

const trackRegistration = categoryRegistrationTracker();

function searchEvents(events, callback) {
  return events.filter(callback);
}

 
5. Objects and Prototypes
function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};

const musicEvent = new Event("Music Night", "2025-06-01", 10);

console.log(Object.entries(musicEvent));

 
6. Arrays and Methods
let allEvents = [
  { name: "Music Night", category: "Music" },
  { name: "Baking Workshop", category: "Workshop" }
];

allEvents.push({ name: "Jazz Concert", category: "Music" });

const musicEvents = allEvents.filter(e => e.category === "Music");

const cards = allEvents.map(e => `${e.category} on ${e.name}`);
console.log(cards);

 
7. DOM Manipulation
const eventList = document.querySelector("#eventList");

function renderEvents(events) {
  eventList.innerHTML = "";
  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.textContent = `${event.name} - ${event.category}`;
    eventList.appendChild(card);
  });
}

 
8. Event Handling
document.getElementById("registerBtn").onclick = function() {
  alert("Registered!");
};

document.getElementById("categoryFilter").onchange = function(e) {
  const category = e.target.value;
};

document.getElementById("searchBox").onkeydown = function(e) {
  if (e.key === "Enter") {
    // searchEvents(...)
  }
};

 
9. Async JS, Promises, Async/Await
function fetchEvents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ name: "Music Night" }, { name: "Tech Talk" }]);
    }, 1000);
  });
}

fetchEvents()
  .then(events => {
    console.log("Fetched events:", events);
  })
  .catch(err => {
    console.error("Error:", err);
  });

async function loadEvents() {
  document.getElementById("spinner").style.display = "block";
  try {
    const events = await fetchEvents();
    console.log(events);
  } finally {
    document.getElementById("spinner").style.display = "none";
  }
}

 
10. Modern JavaScript Features
const cloneEvents = (events = []) => [...events];

const event = { name: "Music Night", date: "2025-06-01", seats: 10 };
const { name, date, seats } = event;

const filtered = [...allEvents].filter(e => e.category === "Music");

 
11. Working with Forms
document.getElementById("regForm").onsubmit = function(e) {
  e.preventDefault();
  const { name, email, event: eventSel } = e.target.elements;
  if (!name.value || !email.value) {
    alert("Name and Email required");
    return;
  }
};

 
12. AJAX & Fetch API
function registerUser(user) {
  document.getElementById("spinner").style.display = "block";
  fetch("https://mockapi.io/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(data => {
      alert("Registration successful!");
    })
    .catch(() => {
      alert("Registration failed!");
    })
    .finally(() => {
      setTimeout(() => {
        document.getElementById("spinner").style.display = "none";
      }, 1000);
    });
}

 
13. Debugging and Testing
console.log("Submitting form...");
fetch("https://mockapi.io/register", { /* ... */ })
  .then(res => {
    console.log("Received response", res);
    return res.json();
  })
  .then(data => {
    console.log("Data:", data);
  })
  .catch(err => {
    console.error("Error:", err);
  });

 
14. jQuery and JS Frameworks
$('#registerBtn').click(function() {
  alert('Registered via jQuery!');
});

$('.event-card').fadeIn();
$('.event-card').fadeOut();

