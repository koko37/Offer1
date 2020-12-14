import axios from 'axios';
import JwtConfig from '../../JwtConfig';
import sampleData from '../../homes.json';

/**
 * get Home details data by id
 * @param {*} id 
 */
export function getHomeData(id) {
  return function (dispatch) {
    dispatch({
      type: 'HOME/FETCH.START'
    });

    const url = `homes/${id}.json?`;
    if(!process.env.NODE_ENV !== 'production') {
      console.log('get home data url: ', url);
    }
    
    return axios.get(JwtConfig.getApiAddress() + url, JwtConfig.getConfig())
      .then((response) => {
        dispatch({
          type: 'HOME/FETCH.SUCCESS',
          payload: response.data
        })
      })
      .catch((error) => {
        dispatch({
          type: 'HOME/FETCH.ERROR',
          payload: error
        })
      })
  }
}

export function mockGetHomeData(id) {
  return function (dispatch) {
    dispatch({
      type: 'HOME/FETCH.START'
    });

    return setTimeout(() => {
        return dispatch({
          type: 'HOME/FETCH.SUCCESS',
          payload: sampleData[parseInt(id)-1]
        });
    }, 2000);
  }
}
