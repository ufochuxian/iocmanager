import React from "react"

const user = {age: 12, name: "amy"}

function formatName(user) {
  return user.name + " is " + user.age + " years old"
}

export class JsxExpression2 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      "{formatName(user)}"
    </div>

  }
}