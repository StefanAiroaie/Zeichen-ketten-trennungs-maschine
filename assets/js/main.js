

const kette = () => {
    let textInput = document.querySelector("#textInput").value
    let letterInput = document.querySelector("#letterInput").value
    let checkedBefore = document.querySelector("#davor").checked
    let checkedAfter = document.querySelector("#danach").checked
    let resultError = document.querySelector("#error")
    let resultBefore = document.querySelector("#vor")
    let resultAfter = document.querySelector("#nach")

    console.log(checkedBefore);
    console.log(checkedAfter);


    if (textInput.includes(letterInput)) {
        const breakPoint = textInput.indexOf(letterInput)

        if (checkedBefore == true) {

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


