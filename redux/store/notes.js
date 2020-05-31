import Actions from '../action';

const NoteReducer = (state,action) =>{
    console.log('NoteReducer ==> ', action);
    switch(action.type){
        case Actions.CREATE:
            break;
        default:
            return state;
    }
};
export default NoteReducer;