const yesBtn = document.getElementById('yes-btn')
const noBtn = document.getElementById('no-btn')
const answer = document.getElementById('answer')
const answerNo = document.getElementById('answerNo')

yesBtn.addEventListener('click', function(){
    yesBtn.style.display = 'none'
    noBtn.style.display = 'none'
    answer.style.display = 'block'
    // Reload the page after 2 seconds
    setTimeout(function() {
        location.reload();
    }, 2000);
})

noBtn.addEventListener('click', function(){
    yesBtn.style.display = 'none'
    noBtn.style.display = 'none'
    answerNo.style.display = 'block'
    // Reload the page after 2 seconds
    setTimeout(function() {
        location.reload();
    }, 2000);
})