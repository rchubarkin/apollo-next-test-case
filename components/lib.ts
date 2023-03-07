export function formatDate(unix: number) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(unix);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export const MS_IN_SEC = 1000;
