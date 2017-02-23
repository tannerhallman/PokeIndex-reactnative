/* Created for example recipe project */

/* Basic template Api file that tells server that you want to "talk in json" and
provides the basis restAPI methods */

class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = 'http://pokeapi.co/api/v2';
    const url = `${host}${route}`;
    console.log(verb + " request at: " + url);
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Api.headers()
    //console.log("Options of the request: " + options)
    return fetch(url, options).then( resp => {
      let json = resp.json()
      //console.log("response:" + JSON.stringify(resp));
      //console.log("json resp: " + JSON.stringify(json));
      if (resp.ok) {
        return json
      }
      return json.then(err => {throw err});
      //return json;
    }).then( json => {
      // api wasn't return an array so forced to make one
      var jsonArray = []
      jsonArray.push(json);
      return jsonArray
      //return json.results
    }).catch(function(err) {
      console.log("Error in getting json data: "+ err)
    });
  }
}
export default Api
