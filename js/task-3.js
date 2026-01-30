const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const name = input.value.trim(); // очищаємо пробіли по краях
  output.textContent = name === "" ? "Anonymous" : name;
});
