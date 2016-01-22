/* global COLORS */

var COLOR_COUNT = 3

var instructionsEl = document.querySelector('.instructions')
var isTouchScreen = ('ontouchstart' in window) || !!(window.navigator && window.navigator.msPointerEnabled) || !!(window.DocumentTouch && document instanceof window.DocumentTouch)

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
    el.style.width = Math.ceil(100 * (randoms[i] / randomTotal)) + '%'

    if (i === 0) {
      // Avoids a 1-pixel thing on the left
      document.body.style.backgroundColor = color
    }

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
    instructionsEl.classList.add('hidden')
  }
}

var colorEls = []
var fragment = document.createDocumentFragment()

for (var i = 0; i < COLOR_COUNT; i++) {
  var div = document.createElement('div')
  div.className = 'color'

  colorEls.push(div)
  fragment.appendChild(div)
}

if (isTouchScreen) {
  instructionsEl.innerHTML = 'tap for a new scheme'
} else {
  document.body.classList.add('not-touch')
  instructionsEl.innerHTML = 'click or press space for a new scheme'
}
instructionsEl.style.display = 'block'

document.body.removeChild(document.querySelector('.loading'))
document.body.appendChild(fragment)

updateColors()

document.addEventListener('click', updateColors)
document.addEventListener('keyup', function (event) {
  if (event.keyCode === 32) {
    updateColors()
  }
})
