const initialstate={
    list:[]
}

const change = (state=initialstate,action)=>{
    switch(action.type){
        case "Add": 
        const {id,data}=action.payload;

        return{
            ...state,
            list:[
                ...state.list,
                {
                    id:id,
                    data:data
                }
            ]
        }
        case "Del":
                const ne = state.list.filter((obj)=>obj.id!==action.id)
            return{
                ...state,
                list:ne
            }
        case "RemAll":
            return{
                ...state,
                list:initialstate.list
            }    
        default: return state
    }
}
export default change;