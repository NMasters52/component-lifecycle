import { Component } from "react";

class LifeCycleLoggerClass extends Component {
    //runs when comoponent mounts and logs it has mounted
    constructor(props) {
        super(props)

        this.state = {
        count: 0
        }

        console.log('class component has mounted...')
    }

    incriment = () => {
        this.setState({count: this.state.count + 1});
     }

     //runs when component updates
     componentDidUpdate() {
        console.log(`Class Component updated... ${this.state.count} `)
     }

     componentWillUnmount() {
        console.log('Class Component unmounted...')
     }

    render() {
        return (
            <div>
                <h2>Class Component Mounted ✅</h2>
                <p>Count: {this.state.count}</p>
                <button
                    onClick={this.incriment}
                >
                    incriment
                </button>
            </div>

        )
    }
}

export default LifeCycleLoggerClass;