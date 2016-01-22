/* global COLORS */

var COLOR_COUNT = 3

function sampleColors () {
  var color = COLORS[Math.floor(Math.random() * COLORS.length)]
  return '#' + color
}

function isDark (color) {
  // see https://en.wikipedia.org/wiki/Luma_(video)
  var r = parseInt(color.substr(1, 2), 16) * 0.2126
  var g = parseInt(color.substr(3, 2), 16) * 0.7152
  var b = parseInt(color.substr(5, 2), 16) * 0.0722

  return ((r + g + b) / 255) < 0.5
}

var updateCount = 0
function updateColors () {
  var randoms = colorEls.map(Math.random)
  var randomTotal = randoms.reduce(function (total, n) {
    return total + n
  }, 0)

  colorEls.forEach(function (el, i) {
    var color = sampleColors()

    el.textContent = color
    el.style.backgroundColor = color
    el.style.width = (100 * (randoms[i] / randomTotal)) + '%'

    if (isDark(color)) {
      el.classList.add('dark')
      el.classList.remove('light')
    } else {
      el.classList.add('light')
      el.classList.remove('dark')
    }
  })

  updateCount += 1

  if (updateCount === 4) {
    var instructionsEl = document.querySelector('.instructions')
    instructionsEl.classList.add('hidden')
  }
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

document.body.removeChild(document.querySelector('.loading'))
document.body.appendChild(fragment)

updateColors()

document.addEventListener('click', updateColors)
document.addEventListener('keyup', function (event) {
  if (event.keyCode === 32) {
    updateColors()
  }
})
