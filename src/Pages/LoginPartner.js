import React from 'react'

export default function LoginPartner() {
    return (
        <>
            <div class="header-banner">
  <div class="container-width">
    <div class="clearfix">
    </div>
    <div class="lead-title">Login to Proceed
    </div>
    <form class="form">
      <div class="form-group">
        <label class="label">User_Id</label>
        <input type="text" required type="text" class="input"/>
      </div>
      <div class="form-group">
        <label class="label">Password</label>
        <input type="password" required type="password" class="input"/>
      </div>
      <div id="Go" title="Submit" class="form-group">
        <button type="submit" class="button">Login</button>
      </div>
      <div id="Register" title="Register" class="form-group">
        <button type="Register" class="button">Register</button>
      </div>
    </form>
  </div>
  </div>
        </>
    )
}
