import { component$, useStore } from "@builder.io/qwik";

interface AppStore {
  countA: number;
  countB: number;
}

export default component$(() => {
  const store = useStore({
    countA: 0,
    countB: 0,
  });

  console.log("Render: <App>");

  return (
    <>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block"
        onClick$={() => store.countA++}
      >
        a++
      </button>
      <DisplayA store={store} />
      <hr />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mt-4"
        onClick$={() => store.countB++}
      >
        b++
      </button>
      <DisplayB store={store} />
    </>
  );
});

export const DisplayA = component$((props: { store: AppStore }) => {
  console.log("Render: <DisplayA>");
  return <>{props.store.countA}</>;
});

export const DisplayB = component$((props: { store: AppStore }) => {
  console.log("Render: <DisplayB>");
  return <>{props.store.countB}</>;
});
