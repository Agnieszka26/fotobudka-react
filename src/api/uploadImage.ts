import { base_api_url } from "./config";
// headers: {
//   "Content-Type":
//     "multipart/form-data",
//     // boundary=<calculated when request us sent>",
//   "Accept": "*/*",
//   "Access-Control-Allow-Origin": "*",
//   "Accept-Encoding": "gzip, deflate, br",
//   // "Connection": "keep-alive",
//   "Authorization":
//     "Custom 1Bzh9NoRhE_ldAuV1_f1IS_g1K3x200AANIfIy36cGMVM6tmr0Za1kqjops95hbvGGo76RaLCOP85e0o3yzlpw",
// },

function dataURLtoBlob(dataUrl: string): Blob {
  const arr = dataUrl.split(",");
  const mimeMatch = arr[0].match(/:(.*?);/);
  const mime = mimeMatch ? mimeMatch[1] : "image/png";
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

export const uploadImage = async (image: string): Promise<string> => {
  "use server";
  const formData = new FormData();
    const imageBlob = dataURLtoBlob(image);
  formData.append("image", image,);
  console.log("Image to upload:", image);
  const response = await fetch(`${base_api_url}photos/`, {
    method: "POST",
    body: formData,
  });
  console.log("Response status:", response);
};
