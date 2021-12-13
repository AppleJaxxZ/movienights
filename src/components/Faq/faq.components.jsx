import React, {useState} from 'react';
import "./faq.styles.scss";
import MovieLinker from '../TodaysTopThree/TodaysTopThree.movielinker';


const FaqSection = () => {
const [isOpen0, setIsOpen0] = useState(false);
const [isOpen1, setIsOpen1] = useState(false);
const [isOpen2, setIsOpen2] = useState(false);
const [isOpen3, setIsOpen3] = useState(false);



return (
    <div className="faq__container">
      <h3 className="faq__heading">Frequently Asked Questions</h3>
      <div className="faq__questions-container">

          {/* Question #1 */}
          <div className='faq__div'>
          <span className={isOpen0? "faq__question" : "faq__question faq__question-open"} onClick={()=> setIsOpen0(!isOpen0)}>Is MovieKnights Really Free?</span>
          {isOpen0 && (<p className="faq__question-answer faq__question-open"> YES!  Ofcoursem, our service will always be free!</p>)}
          </div>

           {/* Question #2 */}
          <div className='faq__div'>
          <span className={isOpen1? "faq__question" : "faq__question faq__question-open"} onClick={()=> setIsOpen1(!isOpen1)}>What is Just Watch?</span>
          {isOpen1 && (<p className="faq__question-answer faq__question-open"> Just Watch is a movie provider.  It provides a huge selection of movies to watch by stream, download, rental or purchase.</p>)}
          </div>

          {/* Question #3 */}
          <div className='faq__div'>
          <span className={isOpen2? "faq__question" : "faq__question faq__question-open"} onClick={()=> setIsOpen2(!isOpen2)}>What can I watch with MovieKnight and JustWatch?</span>
          {isOpen2 && (<p className="faq__question-answer faq__question-open">MovieKnight will provide you the service of finding the movies that Just Watch has in it's database.  The movie database used for this app has thousands of movies to choose from!
          Many of us use multiple streaming services.  Weather we pay for them ourselves, use our families or company's account there can many so many movies to search through between all the different services like HBO MAX, Netflix, Hulu, PeacockTv, etc..  Finding which service is hosting the movie 
          we are looking for has never been easier with MovieKnight!  MovieKnight finds the movie you want and uses Just Watch and a movie database to find where you can watch the movie your looking for!   Awesome! </p>)}
          </div>

          {/* Question #4 */}
          <div className='faq__div'>
          <span className={isOpen3? "faq__question" : "faq__question faq__question-open"} onClick={()=> setIsOpen3(!isOpen3)}>What devices does MovieKnight support?</span>
          {isOpen3 && (<p className="faq__question-answer faq__question-open">Right now I this MovieKnight has been built for desktop, mobile, and tablet devices as a PWA or (Progressive Web App).  Other buiklds using React Native may happen in the future.</p>)}
          </div>

          
          
      </div>
    </div>
)
}

export default FaqSection;