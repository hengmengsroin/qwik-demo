import { component$, Resource } from "@builder.io/qwik";
import { useProvinces } from "~/resources";

export default component$(() => {
  const provinceResource = useProvinces;
  return (
    <Resource
      value={provinceResource}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Failed to load weather</div>}
      onResolved={(provinces) => {
        return (
          <div>
            {provinces.map((item) => (
              <div>{item.name}</div>
            ))}
          </div>
        );
      }}
    />
  );
});
