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

    const body = {email, password};
    const url = `login`;
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
      type: 'AUTH/LOGIN.START'
    });

    return setTimeout(() => {
      if(email === testEmail && password === testPwd) {
        JwtConfig.setJwtToken('this+is+test+token+please+ignore+it+:)');
        return dispatch({
          type: 'AUTH/LOGIN.SUCCESS',
          payload: true
        });
      }

      return dispatch({
        type: 'AUTH/LOGIN.ERROR',
        payload: ['Invalid credential']
      });
    }, 2000);
  }
}

export function mockLogout() {
  return function (dispatch) {
    dispatch({
      type: 'AUTH/LOGOUT.SUCCESS'
    });
  }
}