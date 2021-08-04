export const add = (data) => {
    return{
        type: "Add",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}
export const del = (id) => {
    return{
        type: "Del",
        id
    }
}
export const rem = () => {
    return{
        type: "RemAll"
    }
}