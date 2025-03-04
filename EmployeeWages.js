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
//uc5
const calculateWagesTillCondition = () => {
  let totalWage = 0,
    totalHours = 0,
    daysWorked = 0;
  while (totalHours < 160 && daysWorked < 20) {
    let dailyWage = getDailyWage();
    totalWage += dailyWage;
    totalHours += dailyWage / 20;
    daysWorked++;
  }
  return { totalWage, totalHours, daysWorked };
};
//uc6
let dailyWages = [];
const storeDailyWages = () => {
  for (let i = 0; i < 20; i++) {
    dailyWages.push(getDailyWage());
  }
};
//uc7
const dailyWageOperations = () => {
  const totalWage = dailyWages.reduce((total, wage) => total + wage, 0);
  const dayWages = dailyWages.map(
    (wage, index) => `Day ${index + 1}: $${wage}`
  );
  const fullTimeDays = dailyWages.filter((wage) => wage === 160);
  const firstFullTimeDay = dailyWages.find((wage) => wage === 160);
  const allFullTime = dailyWages.every((wage) => wage === 160);
  const anyPartTime = dailyWages.some((wage) => wage === 80);
  const daysWorked = dailyWages.length;

  return {
    totalWage,
    dayWages,
    fullTimeDays,
    firstFullTimeDay,
    allFullTime,
    anyPartTime,
    daysWorked,
  };
};
//uc8
let dailyWageMap = new Map();
const storeWageInMap = () => {
  for (let i = 0; i < 20; i++) {
    dailyWageMap.set(`Day ${i + 1}`, getDailyWage());
  }
  let totalWage = 0;
  dailyWageMap.forEach((wage) => (totalWage += wage));
  return totalWage;
};
//uc9
const wageAndHoursMap = () => {
  const totalWage = Array.from(dailyWageMap.values()).reduce(
    (total, wage) => total + wage,
    0
  );
  let fullDays = 0,
    partDays = 0,
    noWorkDays = 0;
  dailyWageMap.forEach((wage) => {
    if (wage === 160) fullDays++;
    else if (wage === 80) partDays++;
    else noWorkDays++;
  });
  return { totalWage, fullDays, partDays, noWorkDays };
};
//uc10
let dailyWorkData = [];
const storeDailyWorkData = () => {
  for (let i = 0; i < 20; i++) {
    dailyWorkData.push({
      day: `Day ${i + 1}`,
      hoursWorked: getWorkHours(),
      wageEarned: getWorkHours() * 20,
    });
  }
};
//uc11
const workDayOperations = () => {
  let totalWage = 0,
    totalHours = 0;
  dailyWorkData.forEach((work) => {
    totalWage += work.wageEarned;
    totalHours += work.hoursWorked;
  });
  const fullWorkDays = dailyWorkData.filter((work) => work.hoursWorked === 8);
  const partWorkDays = dailyWorkData
    .map((work) => (work.hoursWorked === 4 ? `Day ${work.day}` : ""))
    .filter((day) => day !== "");
  const noWorkDays = dailyWorkData
    .map((work) => (work.hoursWorked === 0 ? `Day ${work.day}` : ""))
    .filter((day) => day !== "");

  return { totalWage, totalHours, fullWorkDays, partWorkDays, noWorkDays };
};
//uc1
console.log(isPresent);
// uc2
console.log(getDailyWage());
//uc3
console.log(getWorkHours());
//uc4
console.log(calculateMonthlyWage());
//uc5
console.log(calculateWagesTillCondition());
//uc6
storeDailyWages();
console.log(dailyWages);
//uc7
console.log(dailyWageOperations());
//uc8
storeWageInMap();
console.log(dailyWageMap);
//uc9
console.log(wageAndHoursMap());
//uc10
storeDailyWorkData();
console.log(dailyWorkData);
//uc11
console.log(workDayOperations());