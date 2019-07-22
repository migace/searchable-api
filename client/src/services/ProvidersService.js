import {
  API_URL,
  PROVIDERS_URL,
} from '../constants';

let instance = null;

class ProvidersService {
  constructor() {
    if (!instance) {
      instance = this;
    }

    this.url = `${API_URL}${PROVIDERS_URL}`;

    return instance;
  }

  async getData(params) {
    const queryString = this._generateQueryParams(params);
    const response = await fetch(`${this.url}?${queryString}`);

    return await response.json();
  }

  _generateQueryParams(params) {
    let result = '';

    for (let param in params) {
      if (params[param]) {
        result += `${param}=${params[param]}&`;
      }
    }

    return result.slice(0, -1);
  }
}

export default ProvidersService;
