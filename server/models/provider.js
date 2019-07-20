const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const providerSchema = new Schema({
  'DRG Definition': String,
  'Provider Id': Number,
  'Provider Name': String,
  'Provider Street Address': String,
  'Provider City': String,
  'Provider State': String,
  'Provider Zip Code': Number,
  'Hospital Referral Region Description': String,
  'Total Discharges': Number,
  'Average Covered Charges': String,
  'Average Total Payments': String,
  'Average Medicare Payments': String,
});


module.exports = mongoose.model('Provider', providerSchema);
