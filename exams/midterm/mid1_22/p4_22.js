const p = document.querySelector('.show-midterm-answer')
console.log('show-midterm-answer', p)

function showMidtermPage(item) {
  switch (item) {
    case 'p1_22':
      p.innerHTML = `<iframe src='./p1_22/p1_22.html' width="100%" height="100%" />`
      break
    case 'p2_22':
      p.innerHTML = `<iframe src='./p2_22/p2_22.html' width="100%" height="100%" />`
      break
    case 'p3_22':
      p.innerHTML = `<iframe src='./p3_22/p3_22.html' width="100%" height="100%" />`
      break
  }
}
