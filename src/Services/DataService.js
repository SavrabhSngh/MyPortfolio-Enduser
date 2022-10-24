import axios from "axios";

export class DataService {
  static async login(param) {
    try {
      const resp = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/login`,
        param
      );
      return resp;
    } catch (error) {
      return error;
    }
  }
}
