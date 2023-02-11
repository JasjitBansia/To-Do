let input = document.getElementById("input");
let add = document.getElementById("add");
let Clear = document.getElementById("clear");
let ul = document.getElementById("items");
let note_id = 0;
add.addEventListener("click", () => {
  if (input.value !== "") {
    note_id += 1;
    localStorage.setItem(note_id, input.value);
    let li = document.createElement("li");
    li.classList.add("list-background");
    li.style.animation = "fade-in 0.15s";
    li.innerText = `${localStorage.getItem(note_id)}`;
    ul.appendChild(li);
    input.value = "";
  } else {
    return null;
  }
});
Clear.addEventListener("click", () => {
  localStorage.clear();
  ul.innerHTML = "";
  note_id = 0;
});
if (localStorage.length !== 0) {
  for (let i = 0; i < localStorage.length; i++) {
    note_id += 1;
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    let li = document.createElement("li");
    li.classList.add("list-background");
    li.innerText = `${value}`;
    ul.appendChild(li);
  }
}
