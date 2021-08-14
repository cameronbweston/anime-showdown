import AnimeCard from '../../components/AnimeCard/AnimeCard'
import SignupForm from '../../components/SignupForm/SignupForm'

const Landing = ({user}) => {
  return (
    <main className="">
      <div className="mt-5">
        {user ? (
          <div className="flex justify-center">
            <div className="border p-5 bg-white rounded-3xl shadow-2xl">
              <span className="text-3xl font-semibold">
                Welcome, { user.name }!
              </span>
            </div>
          </div>
        ) : (
          <>
          </>
        )}
      </div>
    
    {user ? (
      <AnimeCard/>
    ) : (
      <SignupForm/>
    )}
    </main>
  )
}
 
export default Landing