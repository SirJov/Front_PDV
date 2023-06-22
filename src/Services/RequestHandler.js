import axios from "axios";

class RequestHandler {
  async Post(endPoint, data) {
    return await axios
      .post(endPoint, data)
      .then((response) => {
        //console.log(response);
        return response;
      })
      .catch((error) => {
        //console.log(error);
        return error;
      });
  }
}

export default RequestHandler;
