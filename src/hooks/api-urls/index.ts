import { authUrls } from "./auth.url";
import { qrCodeUrl } from "./qrCode.url";
export const apiUrls = {
  ...authUrls,
  ...qrCodeUrl,
};
