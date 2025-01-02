const p = document.querySelector('.show-classdemo')

function showClassDemo(item) {
  switch (item) {
    case 'W02_intro_22':
      p.innerHTML = `<iframe src="../demo/w02-intro-22/index.html" width="100%" 
            height="100%" />`
      break
    case 'W03_card_22':
      p.innerHTML = `<iframe src="../demo/w03_card/index.html" width="100%"
            height="100%" />`
      break
    case 'W06_blog_22':
      p.innerHTML = `<iframe src="../demo/w06_blog/index.html" width="100%"
            height="100%" />`
      break
    case 'W07_nav_22':
      p.innerHTML = `<iframe src="../demo/W07/w07.html" width="100%"
            height="100%" />`
      break
    case 'w13_multipage_22':
      p.innerHTML = `<iframe src="../demo/w13_multipage/index.html" width="100%"
            height="100%" />`
      break
    case 'final_22':
      p.innerHTML = `<iframe src="../exam/final1_22/final_p1_22.html" width="100%"
            height="100%" />`
      break
  }
}
