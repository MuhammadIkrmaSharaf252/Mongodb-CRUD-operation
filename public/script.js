const API_URL = "/api/students";

const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

// Fetch and display all students
const fetchStudents = async () => {
  const res = await fetch(API_URL);
  const students = await res.json();
  studentList.innerHTML = "";
  students.forEach(student => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${student.name} (Age: ${student.age})</span>
      <button onclick="deleteStudent('${student._id}')">Delete</button>
    `;
    studentList.appendChild(li);
  });
};

// Add a new student
studentForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, age }),
  });

  studentForm.reset();
  fetchStudents();
});

// Delete a student
const deleteStudent = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  fetchStudents();
};

// Initialize
fetchStudents();
