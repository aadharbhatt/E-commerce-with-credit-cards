/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { CentralWrapper } from './Dashboard.styled';
import 'bootstrap/dist/css/bootstrap.css';

class dummyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Male1: 0,
            Male2: 0,
            Male3: 0,
            Male4: 0,
            Male5: 0,
            Female1: 0,
            Female2: 0,
            Female3: 0,
            Female4: 0,
            Female5: 0,
            femaleInput: '',
            MaleInput: ''
        };
    }

    getMaleVar = (num) => {
        if (num >= 18 && num <= 25) {
            return 'Male1';
        } if (num >= 26 && num <= 35) {
            return 'Male2';
        } if (num >= 36 && num <= 50) {
            return 'Male3';
        } if (num >= 51 && num <= 60) {
            return 'Male4';
        } if (num >= 61) {
            return 'Male5';
        }

        return '';
    }

    getFemaleVar = (num) => {
        if (num >= 18 && num <= 25) {
            return 'Female1';
        } if (num >= 26 && num <= 35) {
            return 'Female2';
        } if (num >= 36 && num <= 50) {
            return 'Female3';
        } if (num >= 51 && num <= 60) {
            return 'Female4';
        } if (num >= 61) {
            return 'Female5';
        }

        return '';
    }

    handleKeyDown = (e, type) => {
        if (e.key === 'Enter') {
            if (type === 'Male') {
                const maleVar = this.getMaleVar(Number(e.target.value));
                this.setState((prevState) => ({ [maleVar]: prevState[maleVar] + 1, MaleInput: '' }));
            } else {
                const femaleVar = this.getFemaleVar(Number(e.target.value));
                this.setState((prevState) => ({ [femaleVar]: prevState[femaleVar] + 1, femaleInput: '' }));
            }
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { Male1, Male2, Male3, Male4, Male5, Female1, Female2, Female3, Female4, Female5 } = this.state;
        console.log(Male1, Male2, Male3, Male4, Male5, Female1, Female2, Female3, Female4, Female5);
        return (
            <CentralWrapper>
                <div className="container">
                    {/* <div>
                        <button type="button" className="btn btn-primary" onClick={() => this.setState({ Male1: Male1 + 1 })}>  +  </button>
                        <button type="button" className="btn btn-danger" onClick={() => this.setState({ Male1: Male1 + 1 })}>-</button>
                    </div> */}

                    <div className="row">
                        <div className="col-xs-6">
                            <h2>Election Counting</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6">
                            <h3>
                                Total : {Male1 + Male2 + Male3 + Male4 + Male5 + Female1 + Female2 + Female3 + Female4 + Female5}
                            </h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 center-block">
                            <div className="row">
                                <h3 className="col-sm-4">Male</h3>
                                <h3>{Male1 + Male2 + Male3 + Male4 + Male5}</h3>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    18-25 :
                                </div>
                                <div className="col-sm-2">
                                    {Male1}
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary btn-lg" onClick={() => this.setState({ Male1: Male1 + 1 })}>  +  </button>
                                    <button type="button" className="btn btn-danger" onClick={() => this.setState({ Male1: Male1 - 1 })}>-</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 ">
                                    26-35 :
                                </div>
                                <div className="col-sm-2">
                                    {Male2}
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary btn-lg" onClick={() => this.setState({ Male2: Male2 + 1 })}>  +  </button>
                                    <button type="button" className="btn btn-danger" onClick={() => this.setState({ Male2: Male2 - 1 })}>-</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 ">
                                    36-50 :
                                </div>
                                <div className="col-sm-2">
                                    {Male3}
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary  btn-lg" onClick={() => this.setState({ Male3: Male3 + 1 })}>  +  </button>
                                    <button type="button" className="btn btn-danger" onClick={() => this.setState({ Male3: Male3 - 1 })}>-</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 ">
                                    51-60 :
                                </div>
                                <div className="col-sm-2">
                                    {Male4}
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary  btn-lg" onClick={() => this.setState({ Male4: Male4 + 1 })}>  +  </button>
                                    <button type="button" className="btn btn-danger" onClick={() => this.setState({ Male4: Male4 - 1 })}>-</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 ">
                                    61 + :
                                </div>
                                <div className="col-sm-2">
                                    {Male5}
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary  btn-lg" onClick={() => this.setState({ Male5: Male5 + 1 })}>  +  </button>
                                    <button type="button" className="btn btn-danger" onClick={() => this.setState({ Male5: Male5 - 1 })}>-</button>
                                </div>
                            </div>
                            {/* <div className="row">
                                <Form.Group controlId="formControlInput">
                                    <Form.Control
                                        name="MaleInput"
                                        value={this.state.MaleInput}
                                        type="number"
                                        placeholder="Male Age"
                                        onKeyDown={e => this.handleKeyDown(e, 'Male')}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </Form.Group>
                            </div> */}
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <h3 className="col-sm-4">Female</h3>
                                <h3>{Female1 + Female2 + Female3 + Female4 + Female5}</h3>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 ">
                                    18-25 :
                                </div>
                                <div className="col-sm-2">
                                    {Female1}
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary  btn-lg" onClick={() => this.setState({ Female1: Female1 + 1 })}>  +  </button>
                                    <button type="button" className="btn btn-danger" onClick={() => this.setState({ Female1: Female1 - 1 })}>-</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 ">
                                    26-35 :
                                </div>
                                <div className="col-sm-2">
                                    {Female2}
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary  btn-lg" onClick={() => this.setState({ Female2: Female2 + 1 })}>  +  </button>
                                    <button type="button" className="btn btn-danger" onClick={() => this.setState({ Female2: Female2 - 1 })}>-</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 ">
                                    36-50 :
                                </div>
                                <div className="col-sm-2">
                                    {Female3}
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary btn-lg" onClick={() => this.setState({ Female3: Female3 + 1 })}>  +  </button>
                                    <button type="button" className="btn btn-danger" onClick={() => this.setState({ Female3: Female3 - 1 })}>-</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    51-60 :
                                </div>
                                <div className="col-sm-2">
                                    {Female4}
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary btn-lg" onClick={() => this.setState({ Female4: Female4 + 1 })}>  +  </button>
                                    <button type="button" className="btn btn-danger" onClick={() => this.setState({ Female4: Female4 - 1 })}>-</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    61 + :
                                </div>
                                <div className="col-sm-2">
                                    {Female5}
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary btn-lg" onClick={() => this.setState({ Female5: Female5 + 1 })}>  +  </button>
                                    <button type="button" className="btn btn-danger" onClick={() => this.setState({ Female5: Female5 - 1 })}>-</button>
                                </div>
                            </div>
                            <div className="row">
                                {/* <Form.Group controlId="formControlInput">
                                    <Form.Control
                                        name="femaleInput"
                                        value={this.state.femaleInput}
                                        type="number"
                                        placeholder="Female Age"
                                        onKeyDown={e => this.handleKeyDown(e)}
                                        onChange={e => this.handleChange(e)}
                                    />
                                </Form.Group> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-sm-6">
                                <Form.Group controlId="formControlInput">
                                    <Form.Control
                                        name="MaleInput"
                                        value={this.state.MaleInput}
                                        type="number"
                                        placeholder="Male Age"
                                        onKeyDown={(e) => this.handleKeyDown(e, 'Male')}
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <Form.Group controlId="formControlInput">
                                <Form.Control
                                    name="femaleInput"
                                    value={this.state.femaleInput}
                                    type="number"
                                    placeholder="Female Age"
                                    onKeyDown={(e) => this.handleKeyDown(e)}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </Form.Group>
                        </div>
                    </div>

                </div>
            </CentralWrapper>
        );
    }
}

const mapStateToProps = (store) => ({});
const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(dummyPage);
