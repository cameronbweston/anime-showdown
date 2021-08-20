import SignupForm from '../../components/SignupForm/SignupForm'
import GameForm from '../../components/GameForm/GameForm'

const Landing = (props) => {
  return (
    <main className="">
      {props.user ? (
        <GameForm 
        user={props.user} 
        userProfile={props.userProfile}
        history={props.history}
        handleGetShows={props.handleGetShows}
        />
      ) : (
        <SignupForm handleSignupOrLogin={props.handleSignupOrLogin} history={props.history}/>
      )}
    </main>
  )
}
 
export default Landing