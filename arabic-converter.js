function arabic2Roman(num) {
// first a conditional - if input is above 3999 we will inform that Roman numerals only allow to cover up to that level. Else, we proceed with our magic.
if (num > 3999) {
    return "With standard Roman numerals you can only write numbers up to 3 999."
} else {
// secondly, we create a 1) variable that will check the length of our input, 2) variable that will contain the input, 3) two empty strings - one for Arabic numerals and one for Roman numerals, 4) key to the Roman numerals based on object.
 let numLength = num.toString().length;
 let inputNum = num.toString();
 let arabicNumerals = [];
 let romanNumerals = [];
 let romanKey = [{"1": "I", "2": "II", "3": "III", "4": "IV", "5": "V", "6": "VI", "7": "VII", "8": "VIII", "9": "IX"}, {"10": "X", "20": "XX", "30": "XXX", "40": "XL", "50": "L", "60": "LX", "70": "LXX", "80": "LXXX", "90": "XC"}, {"100": "C", "200": "CC", "300": "CCC", "400": "CD", "500": "D", "600": "DC", "700": "DCC", "800": "DCCC", "900": "CM"}, {"1000": "M", "2000": "MM", "3000": "MMM"} ]

// then we proceed to divide our input into separate numbers and add zeroes
 for (let i = 0; i < numLength; i++) {
     arabicNumerals.unshift(inputNum.charAt(i));
 }
 for (let i = 0; i < numLength; i++) {
     if (i === 1) {
        arabicNumerals[i] += "0";
     } else if (i === 2) {
        arabicNumerals[i] += "00";
     } else if (i === 3) {
        arabicNumerals[i] += "000";
     }
 }

// then we use the key to pair each number with corresponding Roman numeral
 for (let i = 0; i < numLength; i++) {
     romanNumerals.unshift(romanKey[i][arabicNumerals[i]]);
 }

// finally, we join and return the final string
 return romanNumerals = romanNumerals.join("");
}
}
