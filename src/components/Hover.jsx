import React from 'react'

class Hover extends React.Component {
  state = { hovering: false }
  mouseOver = () => this.setState({ hovering: true })
  mouseOut = () => this.setState({ hovering: false })
  render() {
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {/* don't know what to render yet, can be a div, p or any tags, 
           this.props.children will pass in a function, which will use this.state.hovering as its argument
           and renders a tag or component, based on the function provided by this.props.render
           */}
        {this.props.children(this.state.hovering)}
      </div>
    )
  }
}

export default Hover
