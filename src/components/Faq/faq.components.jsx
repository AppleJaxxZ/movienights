import React, {useState} from 'react';
import "./faq.styles.scss";


const FaqSection = () => {
const [isOpen, setIsOpen] = useState(false);



return (
    <div className="faq__container">
      <h3 className="faq__heading">Frequently Asked Questions</h3>
      <div className="faq__questions-container">

          {/* Question #1 */}
          <div className='faq__div-0'>
          <span className={isOpen? "faq__question-0" : "faq__question-0 faq__question-0-open"} onClick={()=> setIsOpen(!isOpen)}>Is MovieKnights Really Free?</span>
          {isOpen && (<p className="faq__question-0-answer faq__question-0-open"> YES!  Ofcoursem, our service will always be free1</p>)}
          </div>

           {/* Question #2 */}
          <div className='faq__div-0'>
          <span className={isOpen? "faq__question-0" : "faq__question-0 faq__question-0-open"} onClick={()=> setIsOpen(!isOpen)}>Is MovieKnights Really Free?</span>
          {isOpen && (<p className="faq__question-0-answer faq__question-0-open"> YES!  Ofcoursem, our service will always be free1</p>)}
          </div>

          {/* Question #3 */}
          <div className='faq__div-0'>
          <span className={isOpen? "faq__question-0" : "faq__question-0 faq__question-0-open"} onClick={()=> setIsOpen(!isOpen)}>Is MovieKnights Really Free?</span>
          {isOpen && (<p className="faq__question-0-answer faq__question-0-open"> YES!  Ofcoursem, our service will always be free1</p>)}
          </div>

          {/* Question #4 */}
          <div className='faq__div-0'>
          <span className={isOpen? "faq__question-0" : "faq__question-0 faq__question-0-open"} onClick={()=> setIsOpen(!isOpen)}>Is MovieKnights Really Free?</span>
          {isOpen && (<p className="faq__question-0-answer faq__question-0-open"> YES!  Ofcoursem, our service will always be free1</p>)}
          </div>

          
          
      </div>
    </div>
)
}

export default FaqSection;