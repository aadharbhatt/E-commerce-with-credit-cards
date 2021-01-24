import { ACTION_TYPE as INVENTORY_ACTION } from '../Inventory/Inventory.constants';
import { ACTION } from './Cart.constants';

const initialState = {
    Items: []
}
export default function (state = initialState, action) {
    switch (action.type) {
        case INVENTORY_ACTION.INVENTORY_ADDTOCART:
            const itemList = [...state.Items, action.payload]
            return {
                ...state,
                Items: [...itemList.filter((v, i, a) => a.findIndex(t => (t.cardTitle === v.cardTitle)) === i)]
            }
        case ACTION.CART_REMOVECARD:
            const currItem = action.payload
            return {
                ...state,
                Items: state.Items.filter((item) => item.cardTitle !== currItem.cardTitle)
            }
        case ACTION.CART_ADDNEWCREDITCARD:
            let cardList = state.userCards ? [...state.userCards, action.payload] : [action.payload]
            return {
                ...state,
                userCards: [...cardList.filter((v, i, a) => a.findIndex(t => (t.number === v.number)) === i)]
            }
        case ACTION.CART_REMOVEEXISTINGCREDITCARD:
            return {
                ...state,
                userCards: state.userCards.filter((item) => item.number !== action.payload.number)
            }
        case ACTION.CART_SETCARDFORCHECKOUT:
            return {
                ...state,
                cardForCheckout: action.payload
            }

        case ACTION.PROCESS_PAYMENT_START:
        case ACTION.PROCESS_PAYMENT_FAIL:
        case ACTION.PROCESS_PAYMENT_SUCCESS:
            return {
                ...state,
                paymentStatus: action.payload
            }
        default:
            return state;
    }
}