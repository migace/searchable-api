import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import {
  Record,
  Row,
  Key,
  Value,
} from './styles';

export const SearchResults = ({ data = [] }) => {
  const result = data.map(item => (
    <Record key={uniqid()}>
      <Row>
        <Key><b>Provider Name:</b></Key>
        <Value>{item['Provider Name']}</Value>
      </Row>

      <Row>
        <Key><b>Provider Street Address:</b></Key>
        <Value>{item['Provider Street Address']}</Value>
      </Row>

      <Row>
        <Key><b>Provider City:</b></Key>
        <Value>{item['Provider City']}</Value>
      </Row>

      <Row>
        <Key><b>Provider State:</b></Key>
        <Value>{item['Provider State']}</Value>
      </Row>

      <Row>
        <Key><b>Provider Zip Code:</b></Key>
        <Value>{item['Provider Zip Code']}</Value>
      </Row>

      <Row>
        <Key><b>Hospital Referral Region Description:</b></Key>
        <Value>{item['Hospital Referral Region Description']}</Value>
      </Row>

      <Row>
        <Key><b>Total Discharges:</b></Key>
        <Value>{item['Total Discharges']}</Value>
      </Row>

      <Row>
        <Key><b>Average Total Payments:</b></Key>
        <Value>{item['Average Total Payments']}</Value>
      </Row>

      <Row>
        <Key><b>Average Medicare Payments:</b></Key>
        <Value>{item['Average Medicare Payments']}</Value>
      </Row>
    </Record>
  ));

  return (
    <div>{ result }</div>
  );
};

SearchResults.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    'DRG Definition': PropTypes.string,
    'Provider Id': PropTypes.number,
    'Provider Name': PropTypes.string,
    'Provider Street Address': PropTypes.string,
    'Provider City': PropTypes.string,
    'Provider State': PropTypes.string,
    'Provider Zip Code': PropTypes.number,
    'Hospital Referral Region Description': PropTypes.string,
    'Total Discharges': PropTypes.number,
    'Average Covered Charges': PropTypes.string,
    'Average Total Payments': PropTypes.string,
    'Average Medicare Payments': PropTypes.string,
  })),
};
