import React from "react"

class Register extends React.Component {




  render()
    return (
      <div>
        <form acceptCharset="utf-8">
          username: <input type="text" value=""><br />
          password: <input type="text" value=""><br />
          email: <input type="text" value=""><br />
          Mobile: <input type="text" value=""><br />
          First name: <input type="text" value=""><br />
          Last name: <input type="text" value=""><br />
          Father name: <input type="text" value=""><br /> 
          Mother name: <input type="text" value=""><br />
          Date of Birth: <input type="text" value=""><br />
          Address: <input type="text" value=""><br />
          house no: <input type="text" value=""><br />
          Landmark: <input type="text" value=""><br />
          city/town: <input type="text" value=""><br />
          State: <input type="text" value=""><br />
          Pincode: <input type="text" value=""><br />
          <button input="Submit" value="Submit">
          <button input="reset" value="reset"
        </form>
      </div>

    )
}

export default Register;