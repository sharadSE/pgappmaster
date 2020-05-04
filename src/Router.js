import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Pgdetails from './Pages/Pgdetails'
import Header from './header/header'
import LoginUser from './Pages/LoginUser'
import LoginAdmin from './Pages/LoginAdmin'
import LoginPartner from './Pages/LoginPartner'
import Summary from './Pages/Summary'

const Router = () =>(
    <Switch>
        {/* <Route exact path='/' component={Header}></Route> */}
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/pgdetails' component={Pgdetails}></Route>
        <Route exact path='/loginuser' component={LoginUser}></Route>
        <Route exact path='/loginadmin' component={LoginAdmin}></Route>
        <Route exact path='/loginpartner' component={LoginPartner}></Route>
        <Route exact path='/Summary' component={Summary}></Route>

    </Switch>
)
export default Router