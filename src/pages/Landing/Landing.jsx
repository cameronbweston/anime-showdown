import AnimeCard from '../../components/AnimeCard/AnimeCard'
import SignupForm from '../../components/SignupForm/SignupForm'

const Landing = ({user}) => {
  return (
    <main className="">
      <div className="mt-5">
        {user ? (
          <div className="flex flex-col justify-center items-center">
            <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-8 animate__animated animate__backInLeft">
              <div className="text-3xl font-semibold">
                Welcome, { user.name }!
              </div>
            </div>
            <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-12 animate__animated animate__backInRight">
              <div className="text-3xl font-semibold">
                Are you looking for <a href="/" className="text-red-600 hover:text-red-200 underline">anime</a> or <a href="/" className="text-red-600 hover:text-red-200 underline">manga</a>?
              </div>
            </div>
            <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-12 animate__animated animate__backInDown">
              <div className="text-3xl font-semibold">
                Genres of interest?
              </div>
            </div>
            <div className="border p-5 bg-white rounded-3xl shadow-2xl mt-12 animate__animated animate__backInUp">
              <div className="text-3xl font-semibold">
                Do you want a movie or show?
              </div>
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