import AnimeCard from '../../components/AnimeCard/AnimeCard'
import styles from './Landing.module.css'

const Landing = ({user}) => {
  return (
    <>
    <main className={styles.container}>
      <h1 className="mt-5">
        Hello, {user ? user.name : "friend"}.
      </h1>
    </main>
    <AnimeCard/>
    </>
  )
}
 
export default Landing