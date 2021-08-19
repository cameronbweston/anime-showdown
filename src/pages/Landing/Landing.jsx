import SignupForm from '../../components/SignupForm/SignupForm'
import GameForm from '../../components/GameForm/GameForm'

const Landing = (props) => {
  return (
    <main className="">
      {props.user ? (
        <GameForm 
        user={props.user} 
        history={props.history}
        getRandomShowsForGameStart={props.getRandomShowsForGameStart}
        />
      ) : (
        <SignupForm />
      )}
    </main>
  )
}
 
export default Landing