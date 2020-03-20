document.getElementById('remove').addEventListener('click', () => {
    clearDatabase()
    render()
})

let image = null
document.getElementById('image').addEventListener('change', (e) => {
    console.log(event.target.files[0])
    let reader = new FileReader()

    reader.onload = () => {
        image = reader.result;
        localStorage.setItem('image', image)
    }



    reader.readAsDataURL(event.target.files[0])
})
const createItem = () => {
    let name = document.getElementById('name').value
    let description = document.getElementById('description').value
    let category = document.getElementById('category').value
    let price = document.getElementById('price').value
    if (localStorage.getItem('image')) {
        item = new Item(getLength() + 1, name, description, category, localStorage.getItem('image'), price)
        addItem(item)
        localStorage.removeItem('image')

    }
    else {
        item = new Item(getLength() + 1, name, description, category, "", price)
        addItem(item)


    }

    document.getElementById('name').value = ""
    document.getElementById('description').value = ""
    document.getElementById('category').value = ""
    document.getElementById('price').value = ""




    console.log(getAllData())

    render()







}

document.getElementById('add').addEventListener('click', createItem)

const remove = (id) => {
    removeItem(id)
    render()
}

const render = () => {
    display = ""
    console.log(getLength())
    data = getAllData()
    if (data) {
        document.getElementById('no-data').innerHTML = ''
        for (let i = 0; i < getLength(); i++) {
            display += `<tr>
        <th scope="row" section=${data[i].id}>${data[i].name}</th>
        <th>${data[i].description}</th>
        <th>${data[i].category}</th>
        <th><img src=${data[i].image} alt="No Image Uploaded" width="100px" /></th>
        <th>${data[i].price}</th>
        <th><button type="button" class="btn btn-danger" onclick="remove(${data[i].id})">Delete</button></th>
        
        </tr>`
        }
    }
    if (getLength() == 0) {
        document.getElementById('no-data').innerHTML = '<strong>No data found! Add item to show in table!</strong>'
    }

    document.getElementById('data').innerHTML = display
}

render()

