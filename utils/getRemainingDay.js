export function getDaysRemaining() {
  const today = new Date();

  // getDay(): Sunday = 0, Monday = 1, ..., Saturday = 6
  const day = today.getDay();

  return day === 0 ? 1 : 8 - day;
}
