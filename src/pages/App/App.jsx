import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import * as authService from '../../services/authService'
import Users from '../Users/Users'

class App extends Component {
	state = {
		user: authService.getUser()
	}

	handleLogout = () => {
		authService.logout()
		this.setState({ user: null })
		this.props.history.push('/')
	}

	handleSignupOrLogin = () => {
		this.setState({ user: authService.getUser() })
	}

	render() {
		const { user } = this.state
		return (
			<>
				<NavBar user={user} handleLogout={this.handleLogout} />
				<Route exact path='/'>
          <Landing user={user} />
        </Route>
				<Route exact path='/signup'>
          <Signup history={this.props.history} handleSignupOrLogin={this.handleSignupOrLogin}/>
        </Route>
				<Route exact path='/login'>
          <Login handleSignupOrLogin={this.handleSignupOrLogin} history={this.props.history}/>
        </Route>
				<Route 
					exact path="/users"
					render={()=> 
						user ? <Users /> : <Redirect to='/login'/>
				}/>

			</>
		)
	}
}

export default App

//S1-D: Create components for Primary Game Cards
//S2-D: Create and stub up Friends page, Profile page, Saved Anime page, Final Game Results page
//S3-D: Style Login UI
//S4-D: Style Main Game UI
//S5-D: Add Search Bar to the Nav Bar for searching shows
//S6-D: Create Routes/Links with React Router in App.jsx for navigating to different pages
//S7-Z: Stub up models with all of the keys:values that we will need
//S8-Z: Stub up controllers with routes to pass from front end to back end
//S̶9̶-̶Z̶:̶ S̶t̶u̶b̶ u̶p̶ a̶n̶d̶ c̶r̶e̶a̶t̶e̶ n̶e̶w̶ d̶a̶t̶a̶b̶a̶s̶e̶ f̶i̶l̶e̶   
//S10-Z: Help Damien create and stub up extra components we might need
//S11-C: Setup animeService.js and anime API Fetch requests
//S12-C: Register with AniList API 
//S13-C: Stub up AniList API calls for backend retrieval
//S14-C: Handle passing JSON res back to frontend for Damien to display