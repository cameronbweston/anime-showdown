import SignupForm from '../../components/SignupForm/SignupForm'
import GameForm from '../../components/GameForm/GameForm'

const Landing = ({user}) => {
  return (
    <main className="">
      {user ? (
          <GameForm user={user} />
      ) : (
        <SignupForm />
      )}
    </main>
  )
}
 
export default Landing