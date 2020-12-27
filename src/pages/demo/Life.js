import React from 'react'
import Child from './Child'

export default class Life extends React.Component {

  constructor() {
    super();
    // this.state.count = 0
    this.state = {
      count: 0
    }
  }


  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  clickBtn() {
    this.setState({
      count: this.state.count + 1
    })
  }


  render() {

    let style = {
      padding: 50
    }

    return <div style={style}>

      <p> react render生命周期方法演示</p>

      <button onClick={this.handleClick} value="点击一下">点击一下</button>
      {/*上面clickBtn直接写在了函数上，需要带上bind(this)才能有效*/}
      <button onClick={this.clickBtn.bind(this)} value="点击一下">点击按钮</button>

      <p>{this.state.count}</p>

      <Child name={this.state.count}></Child>
    </div>

  }


}