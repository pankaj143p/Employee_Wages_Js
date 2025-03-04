//uc1
const isPresent = Math.random() < 0.5 ? "Absent" : "Present";
//uc2
const getDailyWage = () => {
  let empCheck = Math.floor(Math.random() * 3);
  let empHours = 0;
  switch (empCheck) {
    case 1:
      empHours = 4;
      break;
    case 2:
      empHours = 8;
      break;
    default:
      empHours = 0;
  }
  return empHours * 20;
};
//uc3
const getWorkHours = () => {
  let empCheck = Math.floor(Math.random() * 3);
  switch (empCheck) {
    case 1:
      return 4;
    case 2:
      return 8;
    default:
      return 0;
  }
};
//uc4
const calculateMonthlyWage = () => {
  let totalWage = 0;
  for (let i = 0; i < 20; i++) {
    totalWage += getDailyWage();
  }
  return totalWage;
};
//uc1
console.log(isPresent);
// uc2
console.log(getDailyWage());
//uc3
console.log(getWorkHours());
//uc4
console.log(calculateMonthlyWage());