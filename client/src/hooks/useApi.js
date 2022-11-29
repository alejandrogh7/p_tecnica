import { useState } from "react";
import apiConfig from "../api/apiConfig";

const useApi = () => {
  const [api, setApi] = useState(apiConfig.apiKey);

  return api;
};

export default useApi;
