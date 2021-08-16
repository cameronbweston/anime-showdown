import AnimeCard from '../../components/AnimeCard/AnimeCard'
import SignupForm from '../../components/SignupForm/SignupForm'
import GameForm from '../../components/GameForm/GameForm'

const Landing = ({user}) => {
  return (
    <main className="">
      <div className="mt-5">
        {user ? (
          <GameForm user={user} />
        ) : (
          <>
          </>
        )}
      </div>
    
    {user ? (
      <AnimeCard />
    ) : (
      <SignupForm />
    )}
    </main>
  )
}
 
export default Landing