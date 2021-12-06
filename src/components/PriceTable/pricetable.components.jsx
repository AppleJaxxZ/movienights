import React from 'react';
// import { Table } from 'react-bootstrap';
import './pricetable.styles.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';



const PriceTable = () => {
    return (
<table className="pricetable">
<thead>
    <tr>
      <th></th>
      <th className="pricetable__title-header">Watch Free</th>
      <th className="pricetable__title-header">Premium $4.99/mo</th>
      <th className="pricetable__title-header">Plus $9.99/mo</th>
    </tr>
  </thead>
  <tbody>
    <tr className="pricetable__tablerow-light">
      <td>Watch 40,000+ hours of hit movies, TV shows, and more.</td>
      <td>&#10003;</td>
      <td>&#10003;</td>
      <td>&#10003;</td>
    </tr>
    <tr className="pricetable__tablerow-dark">
      <td>Enjoy 50+ always-on channels.</td>
      <td>&#10003;</td>
      <td>&#10003;</td>
      <td>&#10003;</td>
    </tr>
    <tr className="pricetable__tablerow-light"> 
      <td>Unlock all 60,000+ hours of hit movies, TV shows, and more.</td>
      <td></td>
      <td>&#10003;</td>
      <td>&#10003;</td>
      
    </tr>

    <tr className="pricetable__tablerow-dark">
      <td>All our live sports and events, including Sunday Night Football, Premier League, and WWE.</td>
      <td></td>
      <td>&#10003;</td>
      <td>&#10003;</td>
      
    </tr>

    <tr className="pricetable__tablerow-light">
      <td>Next-day access to current NBC hits.</td>
      <td></td>
      <td>&#10003;</td>
      <td>&#10003;</td>
      
    </tr>

    <tr className="pricetable__tablerow-dark">
      <td>Download and watch select titles offline.</td>
      <td></td>
      <td></td>
      <td>&#10003;</td>
      
    </tr>

    <tr className="pricetable__tablerow-light">
      <td>Watch ad-free.*</td>
      <td></td>
      <td></td>
      <td>&#10003;</td>
      
    </tr>

    <tr className="pricetable__tablerow-dark">
      <td colSpan="4">*Due to streaming rights, a small amount of programming will still contain ads (MovieKnight channels, events, and a few shows and movies).</td>
      
      </tr>
  </tbody>
    </table>
    )}



export default PriceTable;