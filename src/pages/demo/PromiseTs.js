import React from 'react'

export default class extends React.Component {

  randomValue() {
    console.log("randomValue")
    var value = Math.random() * 20
    return new Promise((resolve, reject) => {
      if (value > 8) {
        console.log("resolve:" + value)
        resolve()
      } else {
        console.log("reject:" + value)
        reject()
      }
    })
  }

  secondPromise() {
    return new Promise(() => {
      console.log("展示第二个promise function方法")
    })
  }

  handleError() {
    console.log("handleError")
  }


  testPromise() {
    new Promise((resolve, reject) => {
      resolve()
    }).then(this.randomValue)
        .then(this.secondPromise)
        .catch(() => {
          console.log("发生了错误")
        })
  }

  render() {
    return <div>
      <button>测试promise:{this.testPromise()}</button>
    </div>

  }
}