interface Product {
  id: number;
  name: string;
  price: number;  
}

interface State {
  data: Product[]; 
}

export enum ActionType {
  add = "add",
  edit = "edit",
  delete = "delete",
}

interface AddAction {
  type: ActionType.add;
  payload: Product;
}

interface EditAction {
  type: ActionType.edit;
  payload : Product;
}

interface DeleteAction {
  type: ActionType.delete;
  payload : number;
}

export type Action = AddAction | EditAction | DeleteAction;

export default function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.delete:
      const productId = action.payload;
      const index = state.data.findIndex((item) => item.id === productId);
      if (index !== -1) {
        let newState = [...state.data];
        newState.splice(index, 1);
        return {...state, data: newState}
      }
      return state;    
    case ActionType.add:
      return {
        ...state,
        data: [...state.data,action.payload]
      }
    case ActionType.edit:
      const id = action.payload?.id;
      const editId = state.data.findIndex(item => item.id === id);
      if(editId !== -1 && action.payload)
        {
          let newState = [...state.data];
          newState[editId] = {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
          }
          return {...state, data: newState}
        }
      return state;
    default:
      return state;
  }
}
