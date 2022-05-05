import { render } from "react-dom"
import React form "React"

class Home extends React.Component {

  this.state = {
    name = "code lancer",
    username = "code@lancer",
    balance = 0
  }
}

render() {
  return (
    <h2> Welcome, {this.state.name</h2>
    <div>Balance: <h1>{this.state.balance}</h1>
    <div>
     <button>Deposit</button>
     <button>Withdraw<button>
    </div>
    <br>
    <div>
      <button>Change Profile<button><br />
      <button>Logout<button><br />
    </div>
  )
}