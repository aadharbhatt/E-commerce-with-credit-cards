import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { processPayment } from '../Cart.action';
import { API_KEY, userObj } from '../Cart.constants';

class OrderStatus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            output: "Processing"
        };
    }

    componentDidMount() {
        const amount = this.props.userItems.map(item => item.price).reduce((prev, curr) => prev + curr, 0) || 0;
        const { userCard } = this.props;
        console.log(amount, userCard);
        window.paysafe.checkout.setup(API_KEY, userObj, function (instance, error, result) {
            console.warn(result)

            if (result && result.paymentHandleToken) {
                console.log(result.paymentHandleToken);
                instance.showSuccessScreen("Your token is generated");
            } else {
                console.error(error);
            }
        }, function (stage, expired) {
            console.warn(stage)
            switch (stage) {
                case "PAYMENT_HANDLE_NOT_CREATED":
                case "PAYMENT_HANDLE_CREATED":
                case "PAYMENT_HANDLE_REDIRECT":
                case "PAYMENT_HANDLE_PAYABLE":
                default:
                    return <div>Something went wrong</div>
            }
        });
    }

    render() {
        return (
            <Paper variant="outlined">
                payment : {this.state.output}
            </Paper>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        userCard: state.Cart.cardForCheckout,
        userItems: state.Cart.Items,
        paymentStatus: state.Cart.paymentStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps)
    return {
        processUserPayment: (amount, userCard) => dispatch(processPayment(amount, userCard)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderStatus);
