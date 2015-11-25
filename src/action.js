import React, {Component} from 'react'
import {VelocityComponent,VelocityTransitionGroup} from 'velocity-react'

let rt = (pointX, pointY, originX, originY, angle)=>{
	angle = angle * Math.PI / 180.0;
	return {
		x: Math.cos(angle) * (pointX-originX) - Math.sin(angle) * (pointY-originY) + originX,
		y: Math.sin(angle) * (pointX-originX) + Math.cos(angle) * (pointY-originY) + originY
	};
}
let mainIconStyle = {
	position:'absolute',
	left: 12,
	top:12
}
let mainStyle = {
	width: 60,
	height: 60,
	backgroundColor: '#FFCF1E',
	color: 'white',
	borderRadius: 30,
	textAlign: 'center',
	cursor: 'pointer',
	lineHeight: '60px',
	display: 'inline-block'
}

let ActionButton = React.createClass({
  getInitialState(){
    return {active: false}
  },
  _toggle(){
    this.setState({active:!this.state.active})
  },
  render(){
		let _this = this
		let adjust = -(45*(this.props.children.length/2))-22
    let close = (<svg style={mainIconStyle} width="36" height="36" fill="#fff"><path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"/></svg>)
    let menu = (<svg style={mainIconStyle} width="36" height="36" fill="#fff"><path d="M9 15c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm18 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-9 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>)
    let children = React.Children.map(this.props.children, function(child) {
      adjust=adjust+45
      let x = rt(15,-50,15,15,adjust).x
      let y = rt(15,-50,15,15,adjust).y
      console.log(adjust);
      return React.cloneElement(child, {
        style: {
          WebkitTouchCallout: 'none',WebkitUserSelect: 'none',KhtmlUserSelect: 'none',MozUserSelect: 'none',msUserSelect: 'none',userSelect: 'none',
          cursor: 'pointer',
          position: 'absolute',
          textAlign:'center',
          width: 40,
          height: 40,
          backgroundColor: 'rgba(0,0,0,.3)',
          borderRadius: 20,
          lineHeight: '48px',
          textAlign: 'center',
          color: 'white',
          top: 15,
          left: 15,
        },
        transform: {
          scale: _this.state.active ? 1 : 0,
          translateX: _this.state.active ? x-20 : 0,
          translateY: _this.state.active ? y-20 : 0,
          opacity: _this.state.active ? 1 : 0
        },
        iconTransform: {
          scale: _this.state.active ? 1 : 0
        }
      },)
    });

    return (
      <div style={{position: 'relative'}}>
        <VelocityComponent animation={{scale:this.state.active ? 0.8 : 1}} duration={300} easing={[.41,-0.86,.76,1.89]}>
          <div style={mainStyle} onClick={this._toggle}>
            <VelocityTransitionGroup enter={{animation: {scale:1}, duration:200, easing:[.41,-0.86,.76,1.89] }} leave={{animation: {scale:0}, duration: 200, easing:[.41,-0.86,.76,1.89]}}>
              {this.state.active ? close : undefined}
              {!this.state.active ? menu : undefined}
            </VelocityTransitionGroup>
          </div>
        </VelocityComponent>
        {children}
      </div>
    )
  }
})

let ActionOption = React.createClass({
  _handleAction(){
    this.props.action()
  },
  render(){
    return (
      <VelocityComponent animation={this.props.transform} duration={300} easing={[.41,-0.86,.76,1.89]}>
        <div onClick={this._handleAction} style={this.props.style}>
          <VelocityComponent animation={this.props.iconTransform} duration={500} easing={[.41,-2,.76,2]}>
            {this.props.children}
          </VelocityComponent>
        </div>
      </VelocityComponent>
    )
  }
})

export default {ActionButton,ActionOption}
