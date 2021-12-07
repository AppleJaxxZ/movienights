import React from "react";
import Collage from "../../components/Collage/Collage.component";
import PriceTable from "../../components/PriceTable/pricetable.components";
import PriceTableHeading from "../../components/PriceTable/pricetable-heading.components";
import FamilyFeaturedNavigation from "../../components/family-featured/family-featured-navbar/family-featured-navbar.components";
import TodaysTopThree from "../../components/TodaysTopThree/TodaysTopThree.components";
const HomePage = () => (
  <div className="homepage">
    <Collage />
<PriceTableHeading />
<PriceTable />
<FamilyFeaturedNavigation />
<TodaysTopThree />
  </div>
);

export default HomePage;