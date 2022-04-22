function submitRating() {

};

let ratings = "";

for (let i = 0; i < 5; i++) {
  ratings += (i + 1);
}

document.getElementById("rating").innerHTML = `<button class="circle" type="radio">` + ratings + `</button>`;