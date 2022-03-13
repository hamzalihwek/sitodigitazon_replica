let menù = document.querySelector(".containerd");
let prevScrollpos = window.pageYOffset;

window.onscroll = function(){
    let prestScrollpos = window.pageYOffset;
    if(prevScrollpos > prestScrollpos){
        menù.style.top = "0";
    }
    else {
        menù.style.top = "-100px";
    }
    prevScrollpos = prestScrollpos;
}