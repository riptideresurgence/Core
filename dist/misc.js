"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDTransformClass = void 0;
function reverseString(inputStr) {
    let strArray = inputStr.split(" ");
    let reversedStrArray = strArray.map((word) => {
        let charArray = word.split("");
        charArray.reverse();
        let reversed = charArray.join("");
        return reversed;
    }).reverse();
    let reversedStr = reversedStrArray.join(" ");
    return reversedStr;
}
class IDTransformClass {
    convert(inputStr, translation, newTranslation, shift) {
        if (!inputStr || !translation || !newTranslation) {
            return "";
        }
        let x = 0;
        let baseValue = translation.length;
        for (let i = 0; i < inputStr.length; i++) {
            const digit = inputStr[i];
            let digitIndex = translation.indexOf(digit) + 1;
            digitIndex -= shift ? 1 : 0;
            x = x * baseValue + digitIndex;
        }
        if (x != 0) {
            let result = "";
            const newBaseVal = newTranslation.length;
            while (x > 0) {
                let digitVal = x % newBaseVal;
                digitVal -= shift ? 1 : 0;
                let appendNew = digitVal == -1 ? "0" : newTranslation[digitVal];
                if (appendNew == undefined)
                    return shift ? reverseString(`ID Error: ${digitVal} index is out of range`) : `ID Error: ${digitVal} index is out of range`;
                result = `${appendNew}${result}`;
                x = Math.floor(x / newBaseVal);
            }
            return result;
        }
        else
            return newTranslation[0];
    }
    toShort(inputStr) {
        return reverseString(this.convert(inputStr, this._alphabets.decimals, this._alphabets.alphabet, true));
    }
    toNumber(inputStr) {
        return this.convert(reverseString(inputStr), this._alphabets.alphabet, this._alphabets.decimals, false);
    }
    constructor(alphabet, decimals) {
        this._alphabets = {
            "alphabet": alphabet,
            "decimals": decimals
        };
    }
}
exports.IDTransformClass = IDTransformClass;
