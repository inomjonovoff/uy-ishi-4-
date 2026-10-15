function getDayPlan(date) {
  let kunlar = [
    "Yakshanba",
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
  ];

  let kun = date.getDay();

  if (kun == 0 || kun == 6) {
    return kunlar[kun] + ": Dam olish va sevimli mashg'ulot";
  } else {
    return kunlar[kun] + ": Maktab va kod mashqi";
  }
}

console.log(getDayPlan(new Date(2026, 9, 2)));
console.log(getDayPlan(new Date(2026, 9, 3)));
console.log(getDayPlan(new Date(2026, 9, 4)));
console.log(getDayPlan(new Date(2026, 9, 5)));
console.log(getDayPlan(new Date(2026, 9, 1)));
console.log(getDayPlan(new Date(2026, 9, 0)));
console.log(getDayPlan(new Date(2026, 9, 6)));
