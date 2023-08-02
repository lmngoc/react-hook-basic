import React from "react";
import { useState, useEffect } from "react";
class CountDown extends React.Component {
    state = {
        count: 10
    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    componentDidMount() {
        // setTimeout(() => {

        // }, 1000);
        this.timer = setInterval(() => {
            this.setState(
                { count: this.state.count - 1 }
            );
        }, 1000);
    }
    componentDidUpdate(preProps, preState) {
        if (preState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer);
                // this.props.onTimeUp();
            }

        }
    }

    render() {
        return (
            <div>{this.state.count} class</div>
        )
    }
}
const NewCountDown = (props) => {
    const [count, setCount] = useState(10);
    useEffect(() => {

        if (count === 0) {
            props.onTimeUp();
            return;

        }

        let timer = setInterval(() => {
            setCount(count - 1);
        }, 1000)

        return () => {
            clearInterval(timer);
        }


    }, [count])
    return (
        <div>{count} hook</div>
    )
}
export { CountDown, NewCountDown };