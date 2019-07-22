import React, { useState } from 'react';
import PropTypes from 'proptypes';

import Field from '../../../../common/ui/Form/Field';
import Input from '../../../../common/ui/Input';

export const SearchBar = ({ onSearch }) => {
  const [ min_total_discharges, setMin_total_discharges ] = useState();
  const [ max_total_discharges, setMax_total_discharges ] = useState();

  const [ min_average_covered_charges, setMin_average_covered_charges ] = useState();
  const [ max_average_covered_charges, setMax_average_covered_charges ] = useState();

  const [ min_average_medicare_payment, setMin_average_medicare_payment ] = useState();
  const [ max_average_medicare_payment, setMax_average_medicare_payment ] = useState();

  const [ state, setState ] = useState();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch({
        min_total_discharges,
        max_total_discharges,
        min_average_covered_charges,
        max_average_covered_charges,
        min_average_medicare_payment,
        max_average_medicare_payment,
        state
      });
    }}>
      <Field label="Total Discharges">
        <Input 
          icon="minus" 
          placeholder="The minimum number of Total Discharges"
          value={min_total_discharges}
          onChange={(value) => setMin_total_discharges(value)}
        />
        <Input
          icon="plus"
          placeholder="The maximum number of Total Discharges"
          value={max_total_discharges}
          onChange={(value) => setMax_total_discharges(value)}
        />
      </Field>
      <Field label="Average Covered Charges">
        <Input
          icon="minus"
          placeholder="The minimum Average Covered Charges"
          value={min_average_covered_charges}
          onChange={(value) => setMin_average_covered_charges(value)}
        />
        <Input
          icon="plus"
          placeholder="The maximum Average Covered Charges"
          value={max_average_covered_charges}
          onChange={(value) => setMax_average_covered_charges(value)}
        />
      </Field>
      <Field label="Average Medicare Payment">
        <Input
          icon="minus"
          placeholder="The minimum Average Medicare Payment"
          value={min_average_medicare_payment}
          onChange={(value) => setMin_average_medicare_payment(value)}
        />
        <Input
          icon="plus"
          placeholder="The maximum Average Medicare Payment"
          value={max_average_medicare_payment}
          onChange={(value) => setMax_average_medicare_payment(value)}
        />
      </Field>
      <Field label="The exact state that the provider is from">
        <Input
          icon="city"
          placeholder="State"
          value={state}
          onChange={(value) => setState(value)}
        />
      </Field>
      <div className="field is-grouped is-grouped-right">
        <div className="control">
          <button className="button is-link">Search</button>
        </div>  
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
