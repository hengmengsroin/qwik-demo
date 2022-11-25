import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ProvinceList from "~/components/ProvinceList";

export default component$(() => {
  return <div>{/* <ProvinceList /> */}</div>;
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
