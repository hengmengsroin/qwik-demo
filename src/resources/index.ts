import { useResource$ } from "@builder.io/qwik";
import { apiHelper } from "~/services/api-helper";

type ProvinceProp = {
  _id: string;
  name: string;
  thumbnail: string;
};

export const useProvinces = useResource$<ProvinceProp[]>(async () => {
  const res = await apiHelper.getProvinces();
  return res.data;
});
