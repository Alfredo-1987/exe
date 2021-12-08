export default function removeRepetitive(str) {
  

 
  let result = "";
  for (let char of str) {
    if (result[result.length - 1] !== char) {
      result += char;
    }
  }
  return result;
}

