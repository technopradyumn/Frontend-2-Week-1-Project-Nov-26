/** @format */

// Profession → emoji map
const profEmoji = {
  developer: "💻",
  admin: "🛡️",
  intern: "🌱",
  designer: "🎨",
  manager: "📋",
  tester: "🔍",
};

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// ── Helpers ──────────────────────────────────────────────

function renderOutput(label, tagText, employees) {
  const output = document.getElementById("output");
  output.innerHTML = "";

  // Result label banner
  const banner = document.createElement("div");
  banner.className = "result-label";
  banner.innerHTML = `<span class="tag">${tagText}</span> ${label} — ${employees.length} record(s) shown`;
  output.appendChild(banner);

  employees.forEach((emp) => {
    const card = document.createElement("div");
    card.className = `card ${emp.profession}`;
    card.innerHTML = `
      <div class="avatar">${emp.name.charAt(0).toUpperCase()}</div>
      <div class="emp-name">${emp.name}</div>
      <div class="emp-id">#ID ${emp.id}</div>
      <span class="badge">${profEmoji[emp.profession] || "👤"} ${emp.profession}</span>
      <div class="emp-age">Age: <span>${emp.age}</span></div>
    `;
    output.appendChild(card);
  });
}

// ── Task Functions ────────────────────────────────────────

function PrintDeveloperbyMap() {
  const developers = [];
  arr.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
      developers.push(employee);
    }
  });
  renderOutput("Developers filtered using <code>.map()</code>", ".map()", developers);
}

function PrintDeveloperbyForEach() {
  const developers = [];
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
      developers.push(employee);
    }
  });
  renderOutput("Developers filtered using <code>.forEach()</code>", ".forEach()", developers);
}

function addData() {
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log(arr);
  renderOutput("Array after adding Susan (intern) via <code>.push()</code>", ".push()", arr);
}

function removeAdmin() {
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log(arr);
  renderOutput("Array after removing admin(s) via <code>.filter()</code>", ".filter()", arr);
}

function concatenateArray() {
  const arr2 = [
    { id: 5, name: "alice", age: "25", profession: "designer" },
    { id: 6, name: "bob", age: "30", profession: "manager" },
    { id: 7, name: "charlie", age: "22", profession: "tester" },
  ];
  const combinedArr = arr.concat(arr2);
  console.log(combinedArr);
  renderOutput("Two arrays merged using <code>.concat()</code>", ".concat()", combinedArr);
}

function resetAll() {
  arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  document.getElementById("output").innerHTML =
    '<p class="placeholder">Reset ✅ — Click a button above to see results here ✨</p>';
}
