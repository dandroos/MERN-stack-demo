import { GET_DOCUMENTS, INSERT_DOCUMENT, DELETE_DOCUMENT, LOADING_DOCUMENTS } from '../actionTypes'

const initialState = {
    documents: [],
    documentsLoading: false
}

export default(state=initialState, action)=>{
    switch(action.type){
        case LOADING_DOCUMENTS: {
            return {
                ...state,
                documentsLoading: true
            }
        }
        case GET_DOCUMENTS: {
            return {
                ...state,
                documentsLoading: false,
                documents: action.payload
            }
        }
        case INSERT_DOCUMENT: {
            console.log(action.payload)
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