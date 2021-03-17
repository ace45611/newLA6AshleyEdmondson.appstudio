var answerAdd = 0
var answerMultiply = 0

btnAdd.onclick=function(){
    answerAdd = Number(inptNum1.value) + Number(inptNum2.value)
    lblDisplay.value = `Ashley, the answer is ${answerAdd}.`
}

btnMultiply.onclick=function(){
    answerMultiply = Number(inptNum1.value) * Number(inptNum2.value)
    lblDisplay.value = `Ashley, the answer is ${answerMultiply}.`
}

btnReset.onclick=function(){
    lblDisplay.value = ''
    inptNum1.value = ''
    inptNum2.value = ''
}

