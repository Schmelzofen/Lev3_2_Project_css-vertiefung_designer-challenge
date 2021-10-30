let subscribeButton = document.getElementById("lastDiv")
let challenge = document.getElementById("challenge")
let toTop = document.getElementById("toTop")

function subscribe(){
    subscribeButton.classList.add("toggleDisplay")
    subscribeButton.classList.remove("noDisplay")
    challenge.classList.add("noDisplay")
}

function backToTop(){
    lastDiv.classList.add("noDisplay")
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}