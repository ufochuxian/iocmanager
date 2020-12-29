import React from 'react'

export default class Child extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  // 父组件向子组件传输属性的时候，会hook到这里函数,这是新的api
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps:' + props.name,state.count)
    return true
  }

  render() {
    return <div>

      <p>这里是子组件</p>
      <p>{this.props.name}</p>
    </div>
  }


}