const providerModel = require('../models/provider');
const CONSTANTS = require('../constants');

const parameters = [
  'max_discharges',
  'min_discharges',
  'max_average_covered_charges',
  'min_average_covered_charges',
  'max_average_medicare_payments',
  'min_average_medicare_payments',
  'state',
];

const dollarParameters = [
  'max_average_covered_charges',
  'min_average_covered_charges',
  'max_average_medicare_payments',
  'min_average_medicare_payments',
];

let instance = null;

class ProvidersRepository {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  _checkParams(values) {
    const urlParams = Object.keys(values);

    return urlParams.filter(param => parameters.includes(param));
  }

  _generateQueryParams(params, checkedParams) {
    let result = {};

    checkedParams.forEach(checkedParam => result = { ...result, [checkedParam]: params[checkedParam] })

    return result;
  }

  _generateWherePhrase(phrase, value) {
    const subphrases = phrase.split('_');

    if (dollarParameters.includes(phrase)) {
      value = `$${value}`;
    }

    switch (subphrases[0].toLowerCase()) {
      case CONSTANTS.MAX:
        return { [CONSTANTS[phrase]]: { $lt: value } };
      case CONSTANTS.MIN:
          return { [CONSTANTS[phrase]]: { $gt: value } };
      default:
        return { [CONSTANTS[phrase]]: value };
    }
  }

  getByParams(params) {
    const checkedParams = this._checkParams(params);
    const queryParams = this._generateQueryParams(params, checkedParams);
    let where = {};

    for (let key in queryParams) {
      if (where[CONSTANTS[key]]) {
        where[CONSTANTS[key]] = { 
          ...where[CONSTANTS[key]], 
          ...this._generateWherePhrase(key, queryParams[key])[CONSTANTS[key]],
        };
      } else {
        where = { ...where, ...this._generateWherePhrase(key, queryParams[key]) };
      }
    }  
    console.log(where);

    return providerModel.find(where, null, { limit: global.gConfig.maxDatabaseLimit });
  }
}

module.exports = ProvidersRepository;
