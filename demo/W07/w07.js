const p = document.querySelector(".show-classDemo");
function showDemo(item){
    switch(item){
        case "w02_intro":
            p.innerHTML = `<iframe src="../w02-intro-22/index.html" width="100%" height="100%"></iframe>`
            break;
        case "w03_card":
            p.innerHTML = `<iframe src="../w03_card/index.html" width="100%" height="100%"></iframe>`
            break;
        case "w06_blog":
            p.innerHTML = `<iframe src="../w06_blog/index.html" width="100%" height="100%"></iframe>`
            break;
    }
}