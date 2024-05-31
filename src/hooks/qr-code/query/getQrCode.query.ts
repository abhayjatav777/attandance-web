import { apiUrls } from "../../api-urls";
import { useQuery } from "react-query";
import { request } from "../../../services/axios.service";

const getQrCode = async () => {
  const queryParameters = new URLSearchParams(document.location.search);
  const token = queryParameters.get("_auth");
  const response: TServerResponse = await request({
    url: apiUrls.qrCode,
    method: "GET",
    params: {
      token: token,
    },
  });

  return response;
};

export const useGetQrCode = () => {
  return useQuery("qr", getQrCode);
};
