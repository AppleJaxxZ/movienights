import React from "react";
import Collage from "../../components/Collage/Collage.component";
import TopRated from "../../components/toprated-carousel/Toprated.components";
import PriceTable from "../../components/PriceTable/pricetable.components";
import PriceTableHeading from "../../components/PriceTable/pricetable-heading.components";

const HomePage = () => (
  <div className="homepage">
    <Collage />
<PriceTableHeading />
<PriceTable />
<TopRated />
  </div>
);

export default HomePage;