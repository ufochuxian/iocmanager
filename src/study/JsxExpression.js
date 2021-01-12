import React from 'react'

export class JsxExpression extends React.Component {


  render() {

    const jsxElement = "john"

    //这种包含html标签语法，可以被称为jsx，是一个javascript的语法扩展

    //React设计理念
    // React认为渲染逻辑本质上与其他UI逻辑内在耦合，比如，在ui中需要绑定处理事件，在某些时刻状态发生变化时需要通知到ui
    //以及需要在ui中准备数据
    //React并没有采用将标记与逻辑进行分离到不同文件这种人为地分离方式，而是通过将二者共同存放在称之为"组件"的松散耦合单元之中
    //来实现关注点分离

    const  jsxExpress2 = <h3>hello,{jsxElement}</h3>

    return <div>
      "hello, {jsxExpress2}"
    </div>
  }
}