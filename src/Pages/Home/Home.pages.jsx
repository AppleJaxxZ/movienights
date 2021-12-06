import React from "react";
import Collage from "../../components/Collage/Collage.component";
import TopRated from "../../components/toprated-carousel/Toprated.components";
import PriceTable from "../../components/PriceTable/pricetable.components";

const HomePage = () => (
  <div className="homepage">
    <Collage />
<TopRated />
<PriceTable />
  </div>
);

export default HomePage;