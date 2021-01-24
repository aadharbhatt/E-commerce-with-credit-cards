import React from 'react';

class SetupContract extends React.PureComponent {
    handleClick1 = () => {
        window.location.push('/newContract');
    };

    render() {
        return (
            <div>
                SetupContract working : Real
                <div>
                    {/* Go to other component 1: <button onClick={() => this.handleClick1}>comp 1</button> */}
                </div>
            </div>
        );
    }
}

export default SetupContract;
