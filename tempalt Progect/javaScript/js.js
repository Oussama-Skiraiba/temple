// creat var
const src = document.querySelectorAll('.slide-images div img');
const main = document.querySelector('main');
const content_silder = document.querySelectorAll('.content-silder > div');

src.forEach(el  =>{
el.addEventListener('click',()=>{
        main.style.backgroundImage = "url(../" + el.getAttribute('src') +")";
        src.forEach(e  =>{
            if(e.parentElement.getAttribute('class') == "borderRadius"){
                e.parentElement.removeAttribute('class')
                el.parentElement.classList.add('borderRadius');
            }
            
        });
        content_silder.forEach(e  =>{
            e.forEach(r => {
                console.log(r);
            });
            // console.log(e);
        });
    });
});
console.log(content_silder)
