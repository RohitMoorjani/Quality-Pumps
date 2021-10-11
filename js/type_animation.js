const texts='Quality Pumps Pvt. Ltd.';
let count=0;
let index=0;
let currentText="";
let letter='';
(function type(){
    // if(count === texts.length){
    //     count=0;
    // }
    currentText= texts;
    letter= currentText.slice(0,++index);
    document.querySelector('.typing').textContent=letter;
    if(letter.length===currentText.length){ //whole word iterated
        index=0;
    }
    setTimeout(type,200);

}());
