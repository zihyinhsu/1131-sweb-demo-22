const p = document.querySelector('.show-classdemo');

function showClassDemo(item){
    switch(item){
        case 'W02_intro_22':
            p.innerHTML = `<iframe src="../demo/w02-intro-22/index.html" width="100%" 
            height="100%" />`;
            break;
        case 'W03_card_22':
            p.innerHTML = `<iframe src="../demo/w03_card/index.html" width="100%"
            height="100%" />`;
            break;
        case 'W06_blog_22':
            p.innerHTML = `<iframe src="../demo/w06_blog/index.html" width="100%"
            height="100%" />`;
            break;
        case 'W07_nav_22':
            p.innerHTML = `<iframe src="../demo/W07/w07.html" width="100%"
            height="100%" />`;
            break;
    }
}