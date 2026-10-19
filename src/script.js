const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true, code: "GG" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", available: true, code: "MK" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", available: false, code: "TH" },
  { title: "Pride and Prejudice", author: "Jane Austen", available: true, code: "PP" },
  { title: "1984", author: "George Orwell", available: true, code: "19" },
  { title: "The Alchemist", author: "Paulo Coelho", available: false, code: "TA" }
];

const grid = document.querySelector("#book-grid");
const emptyState = document.querySelector("#empty-state");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

function renderBooks(query = "") {
  const normalizedQuery = query.trim().toLowerCase();
  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author}`.toLowerCase().includes(normalizedQuery)
  );

  grid.innerHTML = filteredBooks.map((book, index) => `
    <article class="book-card">
      <div class="book-cover" style="background: ${index % 2 ? "linear-gradient(135deg, #a45e3d, #e5a06d)" : "linear-gradient(135deg, #233e72, #5c83d9)"}">${book.code}</div>
      <h3>${book.title}</h3>
      <p class="author">${book.author}</p>
      <div class="card-footer">
        <span class="status ${book.available ? "" : "unavailable"}">${book.available ? "● Available" : "● Checked out"}</span>
        <button type="button" ${book.available ? "" : "disabled"} data-title="${book.title}">${book.available ? "Check Out" : "Unavailable"}</button>
      </div>
    </article>
  `).join("");

  emptyState.hidden = filteredBooks.length !== 0;
  grid.querySelectorAll("button:not(:disabled)").forEach((button) => {
    button.addEventListener("click", () => {
      button.textContent = "Checked Out";
      button.disabled = true;
      button.closest(".book-card").querySelector(".status").textContent = "● Checked out";
      button.closest(".book-card").querySelector(".status").classList.add("unavailable");
    });
  });
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderBooks(searchInput.value);
});

searchInput.addEventListener("input", () => renderBooks(searchInput.value));
renderBooks();
