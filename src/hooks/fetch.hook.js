import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://api.purposeblacketh.com";

/** Custom hook */
export default function useFetch(token) {
  const [getData, setData] = useState({
    isLoading: false,
    apiData: undefined,
    status: null,
    serverError: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData((prev) => ({ ...prev, isLoading: true }));

        // Assuming you have a valid token, include it in the headers
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get("https://api.purposeblacketh.com/api/shareHolder/dashBoard/", { headers });

        if (response.status === 201) {
          setData((prev) => ({ ...prev, apiData: response.data, status: response.status }));
        }

        setData((prev) => ({ ...prev, isLoading: false }));
      } catch (error) {
        setData((prev) => ({ ...prev, isLoading: false, serverError: error }));
      }
    };

    fetchData();
  }, [token]);

  return [getData, setData];
}
