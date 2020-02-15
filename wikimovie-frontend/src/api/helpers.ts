import { baseApiDev, baseApiProd } from './rest/constants';
import { isDevelopmentMode } from '../common/util/isDevMode';

// tslint:disable-next-line:no-any
export const requestConfig: any = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  mode: 'cors',
};

export const getApiURL = (endPoint: string): string => {
  return isDevelopmentMode() ?
    `${baseApiDev}${endPoint}` :
    `${baseApiProd}${endPoint}`;
};

export const apiMethods = {
  DELETE: 'DELETE',
  GET: 'GET',
  HEAD: 'HEAD',
  OPTIONS: 'OPTIONS',
  PATCH: 'PATCH',
  POST: 'POST',
  PUT: 'PUT',
  CONNECT: 'CONNECT',
  TRACE: 'TRACE',
};

interface ParseResponse {
  status: number;
  ok: boolean;
  // tslint:disable-next-line: no-any
  json: any;
}
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON, status from the response
 */
function parseJSON(response: Response): Promise<ParseResponse> {
  return new Promise((resolve, reject) =>
    response
      .json()
      .then((json) => resolve({
        status: response.status,
        ok: response.ok,
        json,
      }))
      .catch(err => reject(err))
  );
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {Promise}           The request promise
 */
export function apiRequest(url: string, options: RequestInit): Promise<string> {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(parseJSON)
      .then(response => {
        if (response.ok) {
          return resolve(response.json);
        }
        // extract the error from the server's json
        return reject(response.json.message ? 
          response.json.message : 
          (response.json.meta ? response.json.meta.error : response.status)
        );
      })
      .catch((error) => reject(error));
  });
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  REQUEST_TIMEOUT = 408,
  INTERNAL_SERVER_ERROR = 500
}