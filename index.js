const counterWrapper = document.getElementById('counter')
const subtractButton = document.getElementById('-')
const addButton = document.getElementById('+')
const heartButton = document.getElementById('<3')
const likeList = document.getElementById('likes')
const likeMap = {}
const commentList = document.getElementById('list')
const comment = document.getElementById('comment')
const submit = document.getElementById('submit')
const pause = document.getElementById('pause')


// let counter = parseInt(counterWrapper.innerText)

function incrementCounter() {
  const interval = setInterval(function(){
    counterWrapper.innerText++
  }, 1000)
}

incrementCounter()

subtractButton.addEventListener('click', function(e) {
  counterWrapper.innerText--
})

addButton.addEventListener('click', function(e) {
  counterWrapper.innerText++
})

heartButton.addEventListener('click', function(e) {
  if (document.getElementById(`${counterWrapper.innerText}`)) {
    listItem = document.getElementById(`${counterWrapper.innerText}`)
    likeMap[listItem.id]++
    listItem.innerText = `Liked ${counterWrapper.innerText} ${ likeMap[listItem.id]} times`
  } else {
    let i = 1
    let listItem = document.createElement('li')
    listItem.setAttribute("id", `${counterWrapper.innerText}`)
    listItem.innerText = `Liked ${counterWrapper.innerText} ${i} time`
    likeList.appendChild(listItem)
    likeMap[listItem.id] = i
  }
})

submit.addEventListener('click', function(e) {
    e.preventDefault();
    let listItem = document.createElement('li')
    listItem.innerText = comment.value
    commentList.appendChild(listItem)
})

pause.addEventListener('click', function(e) {
    clearInterval()
})
