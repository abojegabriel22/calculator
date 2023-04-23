
let solutionQuestion = document.getElementById("numbers").value
function displayText(value){
    solutionQuestion = solutionQuestion + value
    document.getElementById("numbers").value = solutionQuestion

}

function equalTo(){
    document.getElementById("numbers").value = eval(solutionQuestion)
}

function eraseAll(){
    solutionQuestion = ""
    document.getElementById("numbers").value = solutionQuestion


}
function deleteOne(){
    solutionQuestion = solutionQuestion.toString().slice(0, -1)
    document.getElementById("numbers").value = solutionQuestion
}
