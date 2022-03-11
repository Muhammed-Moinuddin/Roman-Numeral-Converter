function convertToRoman(num) {
    const romanArray = []
    const some = [
      {
      1 : "I",
      2 : "II",
      3 : "III",
      4 : "IV",
      5 : "V",
      6 : "VI",
      7 : "VII",
      8 : "VIII",
      9 : "IX",
      0 : ""
      },
     {
      1 : "X",
      2 : "XX",
      3 : "XXX",
      4 : "XL",
      5 : "L",
      6 : "LX",
      7 : "LXX",
      8 : "LXXX",
      9 : "XC",
      0 : ""
     },
      {
      1 : "C",
      2 : "CC",
      3 : "CCC",
      4 : "CD",
      5 : "D",
      6 : "DC",
      7 : "DCC",
      8 : "DCCC",
      9 : "CM",
      0 : ""
      },
      {
      1 : "M",
      2 : "MM",
      3 : "MMM",
      4 : "MMMM",
      5 : "MMMMM",
      6 : "MMMMMM",
      7 : "MMMMMMM",
      8 : "MMMMMMMM",
      9 : "MMMMMMMMM",
      0 : "M"
      }

    ]
   let thousandNum = "";
   let numArray = num.toString().split("").reverse();
   let checkArray = []

    console.log(numArray);
    if (numArray.length < 6) {
      for (let i = 0 ; i < some.length ; i++){
       for (let j = i ; j <= numArray.length ; j++){
        checkArray.push(some[i][numArray[j]])
        break
       }
      }
    }
   checkArray.reverse();
   let answer = checkArray.join("");
   return answer;
   }
   console.log(convertToRoman(1000))