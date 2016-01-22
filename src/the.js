var COLOR_COUNT = 3

var colorEls = []
var fragment = document.createDocumentFragment()
for (var i = 0; i < COLOR_COUNT; i++) {
  var div = document.createElement('div')
  div.className = 'color'

  colorEls.push(div)
  fragment.appendChild(div)
}

document.body.appendChild(fragment)

colorEls[0].style.backgroundColor = 'red'
colorEls[1].style.backgroundColor = 'tomato'
colorEls[2].style.backgroundColor = 'orange'
