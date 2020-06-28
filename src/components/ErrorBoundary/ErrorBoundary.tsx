import { Component, ReactNode, ErrorInfo } from 'react'

type Props = {
  onError: (error: Error, info: ErrorInfo) => void
  errorComponent: ReactNode
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
    const { errorComponent, children } = this.props
    const { hasError } = this.state

    return hasError ? errorComponent : children
  }
}

export default ErrorBoundary
