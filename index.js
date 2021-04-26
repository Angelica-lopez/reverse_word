const space = document.querySelector(".content__seeker-space");
const btn = document.querySelector(".content__seeker-button");

btn.addEventListener('click', function() {
    let valor = space.value;
    let convertWord = valor.split('');
    let reverseWord = convertWord.reverse();
    alert(reverseWord.join(''));
})