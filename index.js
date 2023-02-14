// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
    return cats
}

function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}

function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(name){
    appendCat = [...cats, name]
    return appendCat
}

function prependCat(name){
    prependCat = [name, ...cats]
    return prependCat
}

function removeLastCat(){
    removeLastCat = cats.slice (0,-1)
    return removeLastCat
}

function removeFirstCat(){
    removeFirstCat = cats.slice (1)
    return removeFirstCat
}
