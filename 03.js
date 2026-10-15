function getVideoLabel(date) {
  let soat = date.getHours();
  let daqiqa = date.getMinutes();
  let soniya = date.getSeconds();

  if (soat < 10) {
    soat = "0" + soat;
  }

  if (daqiqa < 10) {
    daqiqa = "0" + daqiqa;
  }

  if (soniya < 10) {
    soniya = "0" + soniya;
  }

  return "Video yozildi: " + soat + ":" + daqiqa + ":" + soniya;
}

let sana = new Date(2026, 9, 2, 7, 5, 9);

console.log(getVideoLabel(sana));
console.log(sana.toLocaleDateString());

console.log(getVideoLabel(new Date(2026, 9, 2, 0, 0, 0)));
console.log(getVideoLabel(new Date(2026, 9, 2, 23, 8, 4)));
