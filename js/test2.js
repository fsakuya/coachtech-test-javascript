function learYear(year) {
  if ((year % 4 == 0) && (year % 100 !== 0) ||  (year % 400 == 0) ) {
    return true 
  } else {
    return false  
  }
  };

let checkyear = 2024;
if (learYear(checkyear)) {
  console.log("うるう年です")
} else {
  console.log("うるう年ではありません")
}