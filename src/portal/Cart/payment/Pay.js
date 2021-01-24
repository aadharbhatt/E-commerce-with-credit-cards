/* eslint-disable react/no-direct-mutation-state */
import React from 'react'
import { CardContainer, style } from './Pay.styled'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from './Card'
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
} from './Pay.utils'

const initialState = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null
};



class Pay extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.getInitialState();
    }

    getInitialState() {
        return initialState
    };

    handleCallback = ({ issuer }, isValid) => {
        if (isValid) {
            this.setState({ issuer });
        }
    };

    handleInputFocus = ({ target }) => {
        this.setState({
            focused: target.name
        });
    };

    handleInputChange = ({ target }) => {
        if (target.name === "number") {
            target.value = formatCreditCardNumber(target.value);
        } else if (target.name === "expiry") {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === "cvc") {
            target.value = formatCVC(target.value);
        }

        this.setState({ [target.name]: target.value });
    };

    handleSubmit = e => {
        console.log(e, this.state)
        const { addingNewCards, handleAddingNewCards, addNewCreditCard } = this.props;
        e.preventDefault();
        console.log(this.state);
        addNewCreditCard(this.state);
        handleAddingNewCards(!addingNewCards);
        this.form.reset();
    };

    render() {
        const { name, number, expiry, cvc, focused } = this.state;

        return (
            <>
                <Grid container spacing={3} alignContent='space-around'>
                    <Grid item xs={12} sm={12} xl={6} md={6} lg={6}>
                        <CardContainer>
                            <Card
                                number={number || ''}
                                name={name || ''}
                                expiry={expiry || ''}
                                cvc={cvc || ''}
                                focused={focused}
                            />
                        </CardContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} xl={6} md={6} lg={6}>

                        {/* <Styles> */}
                        <form className={style} ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
                            <Grid item xs={12} sm={12} xl={12} md={12} lg={12} m={2}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <TextField
                                        name="number"
                                        type="text"
                                        pattern="[\d| ]{16,22}"
                                        label="Card Number"
                                        placeholder=".... .... .... ...."
                                        fullWidth
                                        variant="outlined"
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                        value={number}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} xl={12} md={12} lg={12} m={2}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <TextField
                                        name="name"
                                        type="text"
                                        label="Name"
                                        fullWidth
                                        variant="outlined"
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                        value={name}
                                    />
                                </div>
                            </Grid>
                            <div style={{ marginBottom: '1rem' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} m={2}>
                                        <div style={{ marginLeft: '1rem' }}>
                                            <TextField
                                                name="cvc"
                                                type="text"
                                                pattern="\d{3}"
                                                placeholder="CVC"
                                                fullWidth
                                                variant="outlined"
                                                onChange={this.handleInputChange}
                                                onFocus={this.handleInputFocus}
                                                value={cvc}
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xs={5} l={2} m={2}>
                                        <TextField
                                            name="expiry"
                                            type="text"
                                            pattern="\d\d/\d\d"
                                            placeholder="Valid Thru"
                                            fullWidth
                                            variant="outlined"
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                            value={expiry}
                                        />
                                    </Grid>

                                </Grid>

                            </div>
                        </form>
                        {/* </Styles> */}
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button type="button" variant="contained" color="primary" onClick={(e) => this.handleSubmit(e)}>
                                    Submit
                            </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary" type="button"
                                    onClick={() => this.setState(this.getInitialState())}>
                                    Reset
                            </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    }

};
export default Pay;