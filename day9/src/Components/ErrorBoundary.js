import { Component } from "react"
class ErrorBoundary extends Component{
    constructor(props) {
        super(props)

        this.state = {
            hasError:false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError:true
        }
    }
    render() {
        if (this.state.hasError === true) {
            return <h1>Error boundary works here</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary