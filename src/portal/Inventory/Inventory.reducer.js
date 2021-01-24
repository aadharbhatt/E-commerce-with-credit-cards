import {ACTION_TYPE} from './Inventory.constants';

const initialState = {}
export default function (state=initialState, action) {
    switch(action.type) {
        case ACTION_TYPE.INVENTORY_ADDTOCART:
            console.log(state)
            return {
                ...state,
                // Cart: {
                //     ...state.Cart,
                //     Items: [...state.Cart.Items, action.payload]
                // }
            }
        default:
            return state;
    }
}