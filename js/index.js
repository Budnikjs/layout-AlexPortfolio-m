(function burgerBtn() {
    document.querySelector('.burger-btn').addEventListener('click', function() {
       document.querySelector('.header-burger').classList.toggle('burger-active');
       document.querySelector('.container-head').classList.toggle('opacity-active');
    })    
})();
(function burgerBtnClose() {
    document.querySelector('.btn-active').addEventListener('click', function() {
        document.querySelector('.header-burger').classList.toggle('burger-active');
        document.querySelector('.container-head').classList.toggle('opacity-active');
    })    
})();

/* (function progressBarMy() { 

    const progressNumb = this.document.querySelector('.progress-item-head__percentage');
    const progressDisp = this.document.querySelector('.progress-item-bar-ov');
    progressDisp.style.width = progressNumb.innerHTML;
    console.log('00000000000000');
    console.log(progressNumb.innerHTML);
    console.log('00000000000000000');
    console.log(progressDisp.style.width);    
})(); */

document.querySelectorAll('.progress-item-bar-ov').forEach( function(nodeProBar) {
    console.log(nodeProBar.style.width);
    const progressDone = nodeProBar.parentElement.parentElement.querySelector('.progress-item-head__percentage').innerHTML;
    console.log(nodeProBar.parentElement.parentElement.querySelector('.progress-item-head__percentage').innerHTML);
    nodeProBar.style.width = progressDone;
});
