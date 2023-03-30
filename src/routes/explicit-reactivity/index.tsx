import { component$, useStore, useTask$ } from "@builder.io/qwik";

interface AppStore {
  count: number;
  delayCount: number;
}
export default component$(() => {
  const store = useStore({
    count: 0,
    delayCount: 0,
  });
  console.log("Render: <App>");
  useTask$(({ track }) => {
    track(() => store.count);
    const id = setTimeout(() => (store.delayCount = store.count), 2000);
    return () => clearTimeout(id);
  });
  return (
    <>
      <DisplayCount store={store} />
      <DisplayDelayCount store={store} />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block"
        onClick$={() => store.count++}
      >
        +1
      </button>
    </>
  );
});

export const DisplayCount = component$((props: { store: AppStore }) => {
  console.log("Render: <DisplayA>");
  return <>{props.store.count}</>;
});

export const DisplayDelayCount = component$((props: { store: AppStore }) => {
  console.log("Render: <DisplayB>");
  return <>{props.store.delayCount}</>;
});
