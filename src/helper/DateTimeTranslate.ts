const convertTimestampToDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const convertTimestampToDayMonth = (timestamp: number): string => {
  const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() returns a zero-based index
  return `${day}/${month}`;
};


// Calculate age from a timestamp
const calculateAge = (timestamp: number): number => {
  const birthDate = new Date(timestamp * 1000);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassedThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassedThisYear) {
    age--;
  }

  return age;
};
export { convertTimestampToDate ,calculateAge , convertTimestampToDayMonth};
