import React from "react";
import Collage from "../../components/Collage/Collage.component";
import PriceTable from "../../components/PriceTable/pricetable.components";
import PriceTableHeading from "../../components/PriceTable/pricetable-heading.components";
import FamilyFeaturedNavigation from "../../components/family-featured/family-featured-navbar/family-featured-navbar.components";
import TodaysTopThree from "../../components/TodaysTopThree/TodaysTopThree.components";
import InputWatchNow from "../../components/input-watchNow/input-watchnow.components";
import MockUpDisplay from "../../homepage-mockup-displays/mockupdisplay.components";
const HomePage = () => (
  <div className="homepage">
    <Collage />
<PriceTableHeading />
<PriceTable />
<FamilyFeaturedNavigation />
<InputWatchNow />
<TodaysTopThree />
<MockUpDisplay />
  </div>
);

export default HomePage;