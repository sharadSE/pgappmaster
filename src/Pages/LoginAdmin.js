import React from 'react'

export default function LoginAdmin (props) {
    return(
        <>
        <div class="header-banner">
  <div class="container-width">
    <div class="clearfix">
    </div>
    <div class="lead-title">Login as Admin
    </div>
    <form class="form">
      <div class="form-group">
        <label class="label">User Id</label>
        <input type="text" required type="text" class="input"/>
      </div>
      <div class="form-group">
        <label class="label">Password</label>
        <input type="password" required type="password" class="input"/>
      </div>
      <div class="form-group">
      </div>
      <div id="Go" title="Submit" class="form-group">
        <button type="submit" class="button">Login</button>
      </div>
    </form>
  </div>
  </div>
        </>
    )
}