
const getAllData = () =>{
    return JSON.parse(localStorage.getItem('inventory'))
}

const setItem = (data) =>{
    localStorage.setItem('inventory', JSON.stringify(data))
}

const addItem = (item) =>{
    data = getAllData()
    if(data){
        
        data.push(item)
        setItem(data)
    }
    else{
        data = []
        data.push(item)
        setItem(data)
    }
}

const removeItem = (id) =>{
    data = getAllData()
    data = data.filter((item)=>item.id!=id)
    setItem(data)
}


const clearDatabase = () =>{
    localStorage.clear()
}