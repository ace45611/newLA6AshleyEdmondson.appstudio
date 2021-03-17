let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnConfirm.onclick=function(){
    let name = inptName.value
    if (members.includes(name))
        lblMessage.value = `${name}, you are a member`
    else 
        lblMessage.value = `${name}, you are not a member`
        members.push(name)
}