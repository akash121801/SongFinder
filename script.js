let submit1, wrapper;


window.onload = function(){
    wrapper = document.getElementById("wrapper");
    submit1 = document.getElementById("submit-lyrics");
    submit2 = document.getElementById("submit-artist");

    let lyrics = document.getElementById("input-lyrics");
    lyrics.oninput = function(){
        submit1.style = lyrics.value.trim()=="" ? "display:none;" : "";
    }
    lyrics.oninput();

    submit1.onclick = function(){
        if (lyrics.value.trim()!=""){
            wrapper.style = "transform: translateX(-100vw);"
            document.getElementById("page-2").style="display:flex;"; 

            let artist = document.getElementById("input-artist");
            let [empty, pending, done] =[ "display:none;", "background-image: url('https://i.imgur.com/WEukpW0.gif'); cursor:default;",""]
            submit2.style = empty;
            artist.oninput = function(){
                if (artist.value == ""){
                    if (submit2.style != empty){
                        submit2.style = empty;
                    }
                } else {
                    if (submit2.style != pending){
                        submit2.style = pending
                    }
                }
            }

            submit2.onclick = ()=>{wrapper.style = "transform: translateX(-200vw);"}
        }
    }

    lyrics.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            submit1.click();
        }
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
    });
}