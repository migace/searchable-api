const providerModel = require('../models/provider');

const parameters = [
  'max_discharges',
  'min_discharges',
  'max_average_covered_charges',
  'min_average_covered_charges',
  'max_average_medicare_payments',
  'min_average_medicare_payments',
  'state',
];

let instance = null;

class ProvidersRepository {
  constructor(params) {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  getAll() {
    return new Promise((resolve, reject) => {
      providerModel.find({}, null, { limit: global.gConfig.maxDatabaseLimit }, (err, providers) => {        
        err ? reject(err) : resolve(providers);
      });
    });
  }
}

module.exports = ProvidersRepository;
