function yesClicked() {
    console.log('hit')
}

function noClicked() {
    document.querySelector('.box1').classList.add('hidden')
    document.querySelector('.box2').classList.remove('hidden')
}

function goBack() {
    document.querySelector('.box2').classList.add('hidden')
    document.querySelector('.box1').classList.remove('hidden')
}
