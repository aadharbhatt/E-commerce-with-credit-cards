import { ACTION_TYPE as INVENTORY_ACTION } from '../Inventory/Inventory.constants';
import { ACTION, API_KEY, userObj } from './Cart.constants';

export function addToCart(currCard) {
    return (dispatch) =>
        dispatch({
            type: INVENTORY_ACTION.INVENTORY_ADDTOCART,
            payload: currCard
        })
};

export function removeCardAction(currCard) {
    return (dispatch) =>
        dispatch({
            type: ACTION.CART_REMOVECARD,
            payload: currCard
        })
}

export function addNewCreditCardAction(newCreditCard) {
    return (dispatch) =>
        dispatch({
            type: ACTION.CART_ADDNEWCREDITCARD,
            payload: newCreditCard
        })
}

export function deleteCreditCardAction(CreditCard) {
    return (dispatch) =>
        dispatch({
            type: ACTION.CART_REMOVEEXISTINGCREDITCARD,
            payload: CreditCard
        })
}

export function setSelectedCard(selectedCard) {
    return (dispatch) =>
        dispatch({
            type: ACTION.CART_SETCARDFORCHECKOUT,
            payload: selectedCard
        })
}




// const instantelizePaysafe = (OPTIONS) => {
//     window.paysafe.fields.setup(API_KEY, OPTIONS, function (paysafeInstance, error) {
//         if (error) {
//             alert("Setup error: " + error.code + " " + error.detailedMessage);
//         }
//         return paysafeInstance;
//     });
// }

// function pay(instance) {
//     if (!instance) {
//       console.log("No instance");
//     }
//     instance.tokenize(function (paysafeInstance, error, result) {
//       if (error) {
//         alert("Tokenization error: " + error.code + " " + error.detailedMessage);
//       } else {
//         alert("Token: " + result.token);
//       }
//     });
//   }

export function processPayment(amount, cardDetails) {
    console.log('processing payment of ', amount, cardDetails);
    window.paysafe.checkout.setup(API_KEY, userObj, function (instance, error, result) {
        console.warn(result)
        if (result && result.paymentHandleToken) {
            console.log(result.paymentHandleToken);
            // make AJAX call to Payments API
        } else {
            console.error(error);
            // Handle the error
        }
    }, function (stage, expired) {
        switch (stage) {
            case "PAYMENT_HANDLE_NOT_CREATED":
                alert('PAYMENT_HANDLE_NOT_CREATED')
                break;// Handle the scenario
            case "PAYMENT_HANDLE_CREATED":
                alert('PAYMENT_HANDLE_CREATED');
                break;// Handle the scenario
            case "PAYMENT_HANDLE_REDIRECT":
                alert('PAYMENT_HANDLE_REDIRECT');
                break;// Handle the scenario
            case "PAYMENT_HANDLE_PAYABLE":
                alert('PAYMENT_HANDLE_PAYABLE');
                break;// Handle the scenario
            default: alert('default')// Handle the scenario
        }
    });
};
// return (dispatch) =>
//     dispatch({
//         type: ACTION.PROCESS_PAYMENT_START,
//         payload: 'fetching'
//     })
