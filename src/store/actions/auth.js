import axios from 'axios';
import JwtConfig from '../../JwtConfig';

/**
 * get Home details data by id
 * @param {*} id 
 */
export function login(email, password) {
  return function (dispatch) {
    dispatch({
      type: 'AUTH/LOGIN.START'
    });

    const url = `login`;
    const body = {email, password};
    return axios.post(JwtConfig.getApiAddress() + url, body, JwtConfig.getConfig())
      .then((response) => {
        JwtConfig.setJwtToken(response.data.jwt_token);
        dispatch({
          type: 'AUTH/LOGIN.SUCCESS',
          payload: response.data
        })
      })
      .catch((error) => {
        dispatch({
          type: 'AUTH/LOGIN.ERROR',
          payload: error
        })
      })
  }
}
/**
 * 
 * @param {*} email :  test@offer1.com
 * @param {*} password : password
 */
const testEmail = 'test@offer1.com';
const testPwd = 'password';

export function mockLogin(email, password) {
  return function (dispatch) {
    dispatch({
      type: 'HOME/FETCH.START'
    });

    return setTimeout(() => {
      if(email === testEmail && password === testPwd) {
        JwtConfig.setJwtToken('this+is+test+token+please+ignore+it+:)');
        return dispatch({
          type: 'HOME/FETCH.SUCCESS',
          payload: true
        });
      }

      return dispatch({
        type: 'HOME/FETCH.ERROR',
        payload: ['Invalid credential']
      });
    }, 2000);
  }
}
