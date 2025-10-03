let nama = ["Nisya", "Cipa", "Nace", "Nopi", "latifa"];
console.log(nama);

for (let i = 0; i < nama.length; i++) {
  console.log(nama[i]);
}

nama.push("ica");
console.log(nama);

nama.shift();
console.log(nama);

console.log("Nama setelah di modifikasi:", nama);