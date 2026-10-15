function formatJoinDate(year, month, day) {
  let sana = new Date(year, month - 1, day);

  let kun = sana.getDate();
  let oy = sana.getMonth() + 1;
  let yil = sana.getFullYear();

  if (kun < 10) {
    kun = "0" + kun;
  }

  if (oy < 10) {
    oy = "0" + oy;
  }

  return kun + "." + oy + "." + yil;
}

console.log(formatJoinDate(2026, 10, 2));
console.log(formatJoinDate(2026, 1, 9));
console.log(formatJoinDate(2026, 12, 31));

let bugun = new Date();
console.log(bugun);
