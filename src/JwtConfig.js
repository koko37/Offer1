import Cookies from 'universal-cookie';

export default class JwtConfig {
  static jwt = '';
  static apiAddress = process.env.REACT_APP_API_URL;
  static primaryAppUrl = process.env.REACT_APP_PRIMARY_APP_URL;

  static _config = {
    headers: {
      'Accept': 'application/json, text/javascript, /; q=0.01',
      'Content-Type': 'application/json',
    }
  };

  static _cookies = new Cookies();

  static setJwtToken(token) {
    JwtConfig.jwt = token;
  }

  static getJwtToken() {
    return JwtConfig.jwt;
  }

  static clearJwtToken() {
    JwtConfig.jwt = '';
    JwtConfig._cookies.remove('jwt', { path: '/' });
  }

  static getConfig() {
    return JwtConfig._config;
  }

  static getJwtConfig() {
    return {
      headers: {
        ...JwtConfig._config.headers,
        'Authorization': ('Bearer ' + JwtConfig.jwt)
      }
    }
  }

  static getApiAddress() {
    return JwtConfig.apiAddress
  }

  static getPrimaryAppAddress() {
    return JwtConfig.primaryAppUrl;
  }

  static getSharedCookieDomain() {
    let url = JwtConfig.primaryAppUrl.replace('http://', '').replace('https://', '');
    if (url.indexOf(':') !== -1) {
      url = url.substr(0, url.indexOf(':'));
    } else if (url.indexOf('/') !== -1) {
      url = url.substr(0, url.indexOf('/'));
    }
    return url;
  }

  static getCookieNameDomain() {
    return '_' + JwtConfig.primaryAppUrl.replace(/^http(s|):\/\//, '').replace(/\/$/, '').replace(/\./g, '_');
  }
}
