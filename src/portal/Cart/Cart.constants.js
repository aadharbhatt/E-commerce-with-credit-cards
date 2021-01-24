export const ACTION = {
    CART_REMOVECARD: 'CART_REMOVECARD',
    CART_ADDNEWCREDITCARD: 'CART_ADDNEWCREDITCARD',
    CART_REMOVEEXISTINGCREDITCARD: 'CART_REMOVEEXISTINGCREDITCARD',
    CART_SETCARDFORCHECKOUT: 'CART_SETCARDFORCHECKOUT',
    PROCESS_PAYMENT_START: 'PROCESS_PAYMENT_START',
    PROCESS_PAYMENT_SUCCESS: 'PROCESS_PAYMENT_SUCCESS',
    PROCESS_PAYMENT_FAIL: 'PROCESS_PAYMENT_FAIL'
}

export const API_KEY = 'cHVibGljLTc3NTE6Qi1xYTItMC01ZjAzMWNiZS0wLTMwMmQwMjE1MDA4OTBlZjI2MjI5NjU2M2FjY2QxY2I0YWFiNzkwMzIzZDJmZDU3MGQzMDIxNDUxMGJjZGFjZGFhNGYwM2Y1OTQ3N2VlZjEzZjJhZjVhZDEzZTMwNDQ=';
export const OPTIONS = {
    environment: "TEST",
    fields: {
        cardNumber: {
            selector: "#card-number",
            placeholder: "Card number"
        },
        expiryDate: {
            selector: "#expiration-date",
            placeholder: "Expiration date"
        },
        cvv: {
            selector: "#cvv",
            placeholder: "CVV"
        }
    }
};


export const userObj = {
    "currency": "USD",
    "amount": 1000,
    "locale": "en_US",
    "customer": {
        "firstName": "John",
        "lastName": "Dee",
        "email": "johndee@paysafe.com",
        "phone": "1234567890",
        "dateOfBirth": {
            "day": 1,
            "month": 7,
            "year": 1990
        }
    },
    "billingAddress": {
        "nickName": "John Dee",
        "street": "20735 Stevens Creek Blvd",
        "street2": "Montessori",
        "city": "Cupertino",
        "zip": "95014",
        "country": "US",
        "state": "CA"
    },
    "environment": "TEST",
    "merchantRefNum": "1559900597607",
    "canEditAmount": true,
    "merchantDescriptor": {
        "dynamicDescriptor": "XYZ",
        "phone": "1234567890"
    },
    "displayPaymentMethods": ["skrill", "card"],
    "paymentMethodDetails": {
        "paysafecard": {
            "consumerId": "1232323"
        },
        "paysafecash": {
            "consumerId": "123456"
        },
        "sightline": {
            "consumerId": "123456",
            "SSN": "123456789",
            "last4ssn": "6789",
            "accountId": "1009688222"
        },
        "vippreferred": {
            "consumerId": "550726575",
            "accountId": "1679688456"
        }
    }
};
