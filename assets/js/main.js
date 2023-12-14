/*

In dieser Aufgabe geht es darum, einen Rechner für das Idealgewicht nach der folgenden Formel zu programmieren:
Formel für Menschen mit einem zierlichen und schmalen Körperbau:
[(Körpergröße in cm - 100) + (Alter/10)] x 0,9 x 0,9
Formel für Menschen mit einem eher breiten Körperbau:
[(Körpergröße in cm - 100) + (Alter/10)] x 0,9 x 1,1

*/

const kette = () => {
    let textInput = document.querySelector("#textInput").value
    let letterInput = document.querySelector("#letterInput").value
    let checkedBefore = document.querySelector("#davor").checked
    let checkedAfter = document.querySelector("#danach").checked
    let resultError = document.querySelector("#error")
    let resultBefore = document.querySelector("#vor")
    let resultAfter = document.querySelector("#nach")

    // resultAfter.innerHTML = letterInput
    // resultBefore.innerHTML = textInput
    console.log(checkedBefore);
    console.log(checkedAfter);

    // (textInput.includes(letterInput))
    if (textInput.includes(letterInput)) {

        if (checkedBefore == true) {
            const breakPoint = textInput.indexOf(letterInput)
            const beforeNewText = textInput.slice(0, breakPoint)
            const textInputLength = textInput.length
            const afterNewText = textInput.slice(breakPoint, textInputLength)
            resultBefore.innerHTML = beforeNewText, resultAfter.innerHTML = afterNewText

        }
        else {
            resultBefore.innerHTML = "sadsda", resultAfter.innerHTML = "vadvad"
        }
    }

    else resultError.innerHTML = "Dein Buscstabe ist nicht in TEXT".toUpperCase(), resultError.style.color = "red"
}



// switch (textInput.includes(letterInput)) {
//     case 1: checkedBefore = true
//         resultBefore.innerHTML = "text before"
//         break
//     case 2: checkedBefore = false
//         resultBefore.innerHTML = "text after"
//         break

//     default:
//         resultError.innerHTML = "Dein Buscstabe ist nicht in TEXT".toUpperCase(), resultError.style.color = "red"
//         break
// }



// const getName = function (email) {
//     if (email.includes("@")) {

//         // sucht den index von dem symbol "@"
//         const atIndex = email.indexOf("@")
//         // mit sclice wird von Anfang des strings bis zum "@"
//         const name = email.slice(0, atIndex)

//         return name
//     } else { return "hei nu e corect" }
// }




// function kette() {




//     console.log(narrow);
//     console.log(wide);

//     wide
//         ? result.innerHTML = idealAgeWide + " kg"
//         : result.innerHTML = idealAgeNarrow + " kg"
// }


/*

        if (wide) {
            console.log(idealAgeWide);
        } else {
            console.log(idealAgeNarrow);
        }
*/



