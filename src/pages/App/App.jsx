import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import AnimeSearch from '../AnimeSearch/AnimeSearch'
import * as authService from '../../services/authService'
import * as profileAPI from '../../services/profileService'
import * as animeAPI from '../../services/animeService'
import AnimeDetails from '../AnimeDetails/AnimeDetails'
import GamePage from '../GamePage/GamePage'
import ProfileDetails from '../ProfileDetails/ProfileDetails'

class App extends Component {
	state = {
		user: authService.getUser(),
		userProfile: null
	}

	handleLogout = () => {
		authService.logout()
		this.setState({ user: null, userProfile:null })
		this.props.history.push('/')
	}

	handleSignupOrLogin = async() => {
		this.setState({ user: authService.getUser(), userProfile: await profileAPI.getUserProfile() })
	}
	handleAddFriend = async friendId => {
		const updatedProfile = await profileAPI.friend(friendId)
		this.setState({ userProfile: updatedProfile })
	}

	handleRemoveFriend = async friendId => {
		const updatedProfile = await profileAPI.unfriend(friendId)
		this.setState({ userProfile: updatedProfile })
	}

	async componentDidMount() {
		if (!this.state.userProfile){
			const userProfile = await profileAPI.getUserProfile()
			this.setState({ userProfile })
		}
	}

	handleAddToUserCollection = async anime => {
		const updatedProfile = await animeAPI.addToUserCollection(anime)
		this.setState({userProfile: updatedProfile})
	  }
	
	handleRemoveFromUserCollection = async mal_id => {
		const updatedProfile = await animeAPI.removeFromUserCollection(mal_id)
		this.setState({userProfile: updatedProfile})
	  }

	  
	render() {
		const { user, userProfile } = this.state
		console.log(this.state.location)

		return (
		<>
			<NavBar user={user} userProfile={userProfile} handleLogout={this.handleLogout} history={this.props.history} />
			<Route exact path='/'>
				<Landing user={user} history={this.props.history}/>
			</Route>
			<Route exact path='/signup'>
				<Signup history={this.props.history} handleSignupOrLogin={this.handleSignupOrLogin}/>
			</Route>
			<Route exact path='/login'>
				<Login handleSignupOrLogin={this.handleSignupOrLogin} history={this.props.history}/>
			</Route>
			<Route exact path='/anime'
				render={({match})=>
				<AnimeDetails 
				match={match} />}
			/>
			<Route 
				exact path='/profile/:id'
				render={({ match })=> 
					authService.getUser() ?
					<ProfileDetails
						match={match}
						userProfile={userProfile}
						handleAddFriend={this.handleAddFriend}
						handleRemoveFriend={this.handleRemoveFriend}
					/> 
					: 
					<Redirect to='/login' />
				}
			/>
			<Route exact path ='/search'
				render={()=>
				<AnimeSearch />}
			/>
			<Route 
				exact path="/users"
				render={()=> 
					user ? <Users 		
							userProfile={userProfile}		
							handleAddFriend={this.handleAddFriend}
							handleRemoveFriend={this.handleRemoveFriend}/> 
							: 
							<Redirect to='/login'/>
			}/>
			<Route exact path='/GamePage'>
				<GamePage 
					history={this.props.history} 
					handleAddToUserCollection={this.handleAddToUserCollection}
					userProfile={userProfile}
				/>
			</Route>
			<Route
				exact path='/animes/:id'
				render={({ match, history })=>
					authService.getUser() ?
					<AnimeDetails
						match={match}
						history={history}
						userProfile={userProfile}
					/> : <Redirect to='/login'/>
				}
			/>
		</>
		)
	}
}

export default App

//S̶1̶-̶D̶:̶ C̶r̶e̶a̶t̶e̶ c̶o̶m̶p̶o̶n̶e̶n̶t̶s̶ f̶o̶r̶ P̶r̶i̶m̶a̶r̶y̶ G̶a̶m̶e̶ C̶a̶r̶d̶s̶
//S2-D: Create and stub up Friends page, Profile page, Saved Anime page, Final Game Results page
//S̶3̶-̶D̶:̶ S̶t̶y̶l̶e̶ L̶o̶g̶i̶n̶ U̶I̶
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