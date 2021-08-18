import SignupForm from '../../components/SignupForm/SignupForm'
import GameForm from '../../components/GameForm/GameForm'


const Landing = ({user}, {history}) => {
  return (
    <main className="">
      {user ? (
        <GameForm user={user} history={history} />
      ) : (
        <SignupForm />
      )}
    </main>
  )
}
 
export default Landing