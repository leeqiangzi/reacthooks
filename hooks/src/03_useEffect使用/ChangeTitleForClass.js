import React, {Component} from 'react';

class ChangeTitleForClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }
    }

    componentDidMount() {
        document.title = this.state.counter;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        document.title = this.state.counter;
    }

    render() {
        return (
            <div>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={e => this.setState({counter: this.state.counter + 1})}>+1</button>
            </div>
        );
    }
}

export default ChangeTitleForClass;
