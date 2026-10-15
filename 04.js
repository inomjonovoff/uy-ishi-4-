function getChallengeEnd(startDate, days) {
  let sana = new Date(startDate);

  sana.setDate(sana.getDate() + days);

  sana.setHours(20, 0, 0, 0);

  return sana;
}

let startDate = new Date(2026, 9, 28, 19, 30);

let endDate = getChallengeEnd(startDate, 7);

let kun = endDate.getDate();
let oy = endDate.getMonth() + 1;
let yil = endDate.getFullYear();

if (kun < 10) {
  kun = "0" + kun;
}

if (oy < 10) {
  oy = "0" + oy;
}

console.log("Yakuniy sana:", kun + "." + oy + "." + yil + " 20:00");

console.log("Asl sana:", startDate);
