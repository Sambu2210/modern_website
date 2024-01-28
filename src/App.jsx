import styles from "./style";
import {Navbar, Hero, Billing, Bussiness, Button, CardDeal, Clients, CTA, Feedback, Footer, GetStarted, Starts, Testimonials} from "./components";

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      {/* <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
            <Billing/>
            <Bussiness/>
            <Button/>
            <CardDeal/>
            <Clients/>
            <CTA/>
            <Feedback/>
            <Footer/>
            <GetStarted/>
            <Starts/>
            <Testimonials/>
        </div>
      </div> */}
    </div>
  )
}

export default App