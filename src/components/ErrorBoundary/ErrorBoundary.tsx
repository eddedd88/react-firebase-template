import { Component, ReactNode, ErrorInfo } from 'react'

type Props = {
  onError: (error: Error, info: ErrorInfo) => void
  errorScreen: ReactNode
  children: ReactNode
}

type State = {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({
      hasError: true
    })

    this.props.onError(error, info)
  }

  render() {
    const { errorScreen, children } = this.props
    const { hasError } = this.state

    return hasError ? errorScreen : children
  }
}

export default ErrorBoundary
