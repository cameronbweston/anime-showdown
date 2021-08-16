import AnimeCard from '../../components/AnimeCard/AnimeCard'
import SignupForm from '../../components/SignupForm/SignupForm'
import GameForm from '../../components/GameForm/GameForm'

const Landing = ({user}) => {
  return (
    <main className="">
      <div className="mt-5">
        {user ? (
          
          <form>
      <label>anime, manga, movie?</label>
        <input></input>
      <label>Question 2</label>
        <input></input>
      <label>Question 3</label>
        <input></input>
      <label>Question 4</label>
        <input></input>
    </form>
          
          // <GameForm user={user} />

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