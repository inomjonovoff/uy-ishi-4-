function getFocusDuration(startText, endText) {
  const start = new Date(startText).getTime();
  const end = new Date(endText).getTime();

  if (Number.isNaN(start) || Number.isNaN(end)) {
    return "Sana noto'g'ri";
  }

  if (end < start) {
    return "Vaqtlar tartibi noto'g'ri";
  }

  const diff = end - start;
  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor(diff / 1000) % 60;

  return `Fokus: ${minutes} daqiqa ${seconds} soniya`;
}

console.log(
  getFocusDuration("2026-10-02T16:00:00+05:00", "2026-10-02T16:25:30+05:00"),
);
