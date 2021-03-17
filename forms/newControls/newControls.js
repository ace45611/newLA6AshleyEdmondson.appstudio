//select control option:
        
selWeekDay.onchange = function(){
    var aptDay = selWeekDay.value
    confirm(`You are scheduling an appointment for ${aptDay}`)
}


//radio buttion control option:

optYesNo.onclick=function(){
    if (optYesNo.value == false)
        confirm("Welcome to Creighton's tutoring services.")
    else
        confirm("Thank you for using Creighton's tutoring services!")
}


//hamburger control option:

hmbrMenuOptions.onclick = function(action){
  if (typeof(action) == "object") {
  return
} if (action === "Sign Out") {
    confirm('You will be signed out')
} if (action === "Home Page") {
    confirm("You will be taken to the home page")
} if (action === "Dashboard")
    confirm("You will be taken to the dashboard")
}

//signature control option:

Signature1.onclick = function(){
  confirm('By providing your signature, you have reviewed the following information and would like to proceed with scheduling this appointment.')
}

btnClear.onclick = function(){
  Signature1_signaturePad.clear()
}


