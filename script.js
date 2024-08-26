const encrypt_text = "Texto Encriptado";
const normal_text = "Texto Normal";

const input_from = document.querySelector("#main-from-input");
const input_to = document.querySelector("#main-to-input");

const a_title_from = document.querySelectorAll(".main-from-title");
const a_title_to = document.querySelectorAll(".main-to-title");

const reverse_btn = document.querySelector("#reverse-btn");
const clear_btn = document.querySelector("#clear-btn");
const copy_btn = document.querySelector("#copy-btn");

const letters_matrix = [
  ["a", "0&1"], // La a se convierte en 0&1
  ["e", "1@2"], // La e se convierte en 1@2
  ["i", "2#3"], // La i se convierte en 2#3
  ["o", "3$4"], // La o se convierte en 3$4
  ["u", "4%5"], // La u se convierte en 4%5
];

function convert(input_text) {
  input_text = input_text.toLowerCase();

  for (let index = 0; index < letters_matrix.length; index++)
    input_text = input_text.replaceAll(letters_matrix[index][0], letters_matrix[index][1]);

  return input_text;
}

input_from.addEventListener("keyup", (e) => {
  input_to.value = convert(e.target.value);
});

clear_btn.addEventListener("click", () => {
  input_from.value = "";
  input_to.value = "";
});

copy_btn.addEventListener("click", () => {
  if (input_to.value.length > 0) {
    input_to.select();
    input_to.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(input_to.value);

    alert("El texto ha sido guardado en el portapapeles 😁");
  }
});