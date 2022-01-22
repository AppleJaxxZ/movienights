import React from 'react';
import './who-is-watching-page.styles.scss';
import CustomButton from '../../components/CustomButton/CustomButton.components';
import Carousel, {
  CarouselItem,
} from '../../components/custom-carousel/custom-carousel.component';
import PeacockGreen from '../../media/peackcockgreen.png';
import PeacockBlue from '../../media/peacockblue.png';
import UserAvatar from '../../components/user-avatars/useravatar.component';
import Title from '../../components/title/title.component';
import PlusSmall from '../../media/plusSmall.png';
import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';

const WhoIsWatching = ({ history }) => {
  // const backgroundGradient = backround: rgb(39,39,159),
  //     background: radial-gradient(circle, rgba(39,39,159,1) 0%, rgba(2,0,36,1) 100%, rgba(0,212,255,1) 100%)

  return (
    <div className="whoIsWatching-container">
      <span className="whoIsWatching-title">
        <Title history={history} />
      </span>
      <CustomButton
        onClick={() => history.push('/accountpage')}
        className="whoswatching__account-button"
      >
        <EngineeringTwoToneIcon />
        <span>ACCOUNT</span>
      </CustomButton>

      <div className="whoswatching__header">
        <span>Who's Watching?</span>
      </div>

      <ul className="whoswatching__carousel-container">
        {/* <Carousel>
                    <CarouselItem><img className='peacockGreen' src={PeacockGreen} alt='peacock green' /></CarouselItem>
                    <CarouselItem><img className='peacockGreen' src={PeacockGreen} alt='peacock green' /></CarouselItem>
                    <CarouselItem><img className='peacockGreen' src={PeacockGreen} alt='peacock green' /></CarouselItem>
                </Carousel> */}

        <li>
          <UserAvatar image={PeacockGreen} color={'#52f166'} />
        </li>
        <li>
          <UserAvatar image={PeacockBlue} color={'#3071ff'} />
        </li>
        <li>
          <img
            className="whoswatching__addAvatar-button"
            src={PlusSmall}
            alt="add button"
          />
        </li>
      </ul>
    </div>
  );
};
export default WhoIsWatching;
