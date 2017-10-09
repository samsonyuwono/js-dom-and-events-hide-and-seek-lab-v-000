function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const rankedList = document.querySelectorAll('.ranked-list')
  for (let i= 0; i< rankedList.length; i++){
    let children = rankedList[i].children

    for(let k= 0; k< children.length; k++){
      children[k].innerHTML = parseInt(children[k].innerHTML) + n
    }
  }
}

function deepestChild(){
  var node = document.getElementById('grand-node')
  var nextNode= node.children[0]

    while(nextNode){
      node = nextNode
      nextNode= node.children[0]
    }
    return node
}
