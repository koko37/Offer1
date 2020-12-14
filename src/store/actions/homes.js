import axios from 'axios';
import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';
import JwtConfig from '../../JwtConfig';
import sampleData from '../../homes.json';

/**
 * search home request
 * @param {*} criteria 
 */
export function searchHomes(criteria) {
  return function (dispatch) {
    dispatch({
      type: 'HOME/SEARCH.START'
    });

    const url = 'homes.json?' + queryString.stringify(criteria);
    if(!process.env.NODE_ENV !== 'production') {
      console.log('search homes url: ', url);
    }
    
    return axios.get(JwtConfig.getApiAddress() + url, JwtConfig.getConfig())
      .then((response) => {
        dispatch({
          type: 'HOME/SEARCH.SUCCESS',
          payload: response.data
        })
      })
      .catch((error) => {
        dispatch({
          type: 'HOME/SEARCH.ERROR',
          payload: error
        })
      })
  }
}

export function mockSearchHomes(criteria) {
  // test results
  const allResults = sampleData;
  const filteredResults = [sampleData[2], sampleData[5]];

  return function (dispatch) {
    dispatch({
      type: 'HOME/SEARCH.START'
    });

    return setTimeout(() => {
      if(isEmpty(criteria) || Object.values(criteria).every(v => v.toString().trim()==='')) {
        return dispatch({
          type: 'HOME/SEARCH.SUCCESS',
          payload: {
            homes: allResults,
            pages: {
              count: sampleData.length,
              active: 1
            }
          }
        });
      } else {
        return dispatch({
          type: 'HOME/SEARCH.SUCCESS',
          payload: {
            homes: filteredResults,
            pages: {
              count: sampleData.length,
              active: 1
            }
          }
        });
      }
    }, 2000);
  }
}
