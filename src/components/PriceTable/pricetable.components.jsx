import React from 'react';
import { Table } from 'react-bootstrap';
import './pricetable.styles.scss';
import '../../config.json'
// import 'bootstrap/dist/css/bootstrap.min.css';



const PriceTable = () => {
    return (
<Table striped bordered hover variant="dark">
<thead>
    <tr>
      <th></th>
      <th>Watch Free</th>
      <th>Premium $4.99/mo</th>
      <th>Plus $9.99/mo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Watch 40,000+ hours of hit movies, TV shows, and more.</td>
      <td>&#10003;</td>
      <td>&#10003;</td>
      <td>&#10003;</td>
    </tr>
    <tr>
      <td>Enjoy 50+ always-on channels.</td>
      <td>&#10003;</td>
      <td>&#10003;</td>
      <td>&#10003;</td>
    </tr>
    <tr>
      <td>Unlock all 60,000+ hours of hit movies, TV shows, and more.</td>
      <td></td>
      <td>&#10003;</td>
      <td>&#10003;</td>
      
    </tr>

    <tr>
      <td>All our live sports and events, including Sunday Night Football, Premier League, and WWE.</td>
      <td></td>
      <td>&#10003;</td>
      <td>&#10003;</td>
      
    </tr>

    <tr>
      <td>Next-day access to current NBC hits.</td>
      <td></td>
      <td>&#10003;</td>
      <td>&#10003;</td>
      
    </tr>

    <tr>
      <td>Download and watch select titles offline.</td>
      <td></td>
      <td></td>
      <td>&#10003;</td>
      
    </tr>

    <tr>
      <td>Watch ad-free.*</td>
      <td></td>
      <td></td>
      <td>&#10003;</td>
      
    </tr>

    <tr>
      <td colSpan="4">*Due to streaming rights, a small amount of programming will still contain ads (MovieKnight channels, events, and a few shows and movies).</td>
      
      </tr>
  </tbody>
    </Table>
    )}



export default PriceTable;