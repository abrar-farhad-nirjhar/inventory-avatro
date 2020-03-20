localStorage.clear()
for(let i=0; i<5; i++){
    item = new Item(i, "Abrar", "Farhad", "Image", "Price")
    addItem(item)
}

console.log(getAllData())
console.log(getLength())
removeItem(1)
console.log(getLength())

console.log(getAllData())

