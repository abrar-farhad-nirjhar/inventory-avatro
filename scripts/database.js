
const getAllData = () => {
    return JSON.parse(localStorage.getItem('inventory'))
}

const setItem = (data) => {
    localStorage.setItem('inventory', JSON.stringify(data))
}

const addItem = (item) => {
    data = getAllData()
    if (data) {

        data.push(item)
        setItem(data)
    }
    else {
        data = []
        data.push(item)
        setItem(data)
    }
}

const removeItem = (id) => {
    data = getAllData()
    data = data.filter((item) => item.id != id)
    setItem(data)
}

const getLength = () => {
    if (getAllData()) {
        return getAllData().length
    }
    else{
        return 0
    }
}

const getCategoryNumber = () =>{
    let data = getAllData()
    let unique_elements = {}
    let count = 0
    for(let i=0; i<getLength(); i++){
        if(!unique_elements[data[i].category.toLowerCase()]){
            unique_elements[data[i].category.toLowerCase()] = i
            count+=1
        }
    }
    
    return Object.keys(unique_elements).length
    
}

const searchObjects = (term) =>{
    let data = getAllData()
    let result = data.filter(item=>item.name.toLowerCase().includes(term))
    
    return result
}


const clearDatabase = () => {
    localStorage.removeItem('inventory')
}