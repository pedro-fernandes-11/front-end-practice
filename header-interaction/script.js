window.onload = function(){
    var element = document.getElementsByClassName("holdable")

    document.onclick = function(e){
        if(e.target.classList.contains('holdable') == false){
            document.querySelectorAll(".holdable").forEach(el => {
                el.classList.remove("clicked");
            });
        }
    }
}

window.onhashchange = () => {
    var url = window.location.href
    var index = url.indexOf("#")
    var result = url.slice(index + 1, url.length)

    var specific = document.getElementsByClassName(result)[0]

    document.querySelectorAll(".holdable").forEach(el => {
        el.classList.remove("clicked");
    });

    specific.classList.add("clicked");
}