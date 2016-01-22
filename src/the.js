/* global COLORS */

var COLOR_COUNT = 3

function sampleColors () {
  var color = COLORS[Math.floor(Math.random() * COLORS.length)]
  return '#' + color
}

function updateColors () {
  colorEls.forEach(function (el) {
    var color = sampleColors()

    el.textContent = color
    el.style.backgroundColor = color
  })
}

var colorEls = []
var fragment = document.createDocumentFragment()

for (var i = 0; i < COLOR_COUNT; i++) {
  var div = document.createElement('div')
  div.style.width = (100 / COLOR_COUNT) + '%'
  div.className = 'color'

  colorEls.push(div)
  fragment.appendChild(div)
}

document.body.appendChild(fragment)

updateColors()
