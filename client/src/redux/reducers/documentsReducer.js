import { GET_DOCUMENTS, INSERT_DOCUMENT, DELETE_DOCUMENT } from '../actionTypes'

const initialState = {
    documents: []
}

export default(state=initialState, action)=>{
    switch(action.type){
        case GET_DOCUMENTS: {
            return {
                ...state,
                documents: action.payload
            }
        }
        case INSERT_DOCUMENT: {
            return {
                ...state,
                documents: [action.payload, ...state.documents]
            }
        }
        case DELETE_DOCUMENT: {
            return {
                ...state,
                documents: state.documents.filter((i)=>{
                    return action.payload !== i.id || action.payload !== i._id
                })
            }
        }
        default: return state
    }
}