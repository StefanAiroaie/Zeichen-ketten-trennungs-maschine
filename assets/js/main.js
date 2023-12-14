

const kette = () => {
    let textInput = document.querySelector("#textInput").value
    let letterInput = document.querySelector("#letterInput").value
    let checkedBefore = document.querySelector("#davor").checked
    let checkedAfter = document.querySelector("#danach").checked
    let resultError = document.querySelector("#error")
    let resultBefore = document.querySelector("#vor")
    let resultAfter = document.querySelector("#nach")

    if (textInput.includes(letterInput), letterInput !== "") {
        const breakPoint = textInput.indexOf(letterInput)
        const textInputLength = textInput.length

        if (checkedBefore == true) {
            const beforeNewText = textInput.slice(0, breakPoint)
            const afterNewText = textInput.slice(breakPoint, textInputLength)
            resultBefore.innerHTML = beforeNewText, resultAfter.innerHTML = afterNewText

        }
        else {
            const beforeNewText = textInput.slice(0, breakPoint + 1)
            const afterNewText = textInput.slice(breakPoint + 1, textInputLength)
            resultBefore.innerHTML = beforeNewText, resultAfter.innerHTML = afterNewText
        }
    }
    if (textInput == "") resultError.innerHTML = "Hei, erstmall gib text ein!!!".toUpperCase(), resultError.style.color = "red"

    else resultError.innerHTML = "Dein Buchstabe ist nicht im Text oder hast du keinen Buchstaben gegeben!".toUpperCase(), resultError.style.color = "red"
}


