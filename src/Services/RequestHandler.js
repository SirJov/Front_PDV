import axios from "axios";

class RequestHandler {
  async Post(data) {
    return await axios
      .request(data)
      .then((response) => {
        //console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }
}

export default RequestHandler;
