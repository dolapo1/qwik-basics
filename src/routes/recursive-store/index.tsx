import { component$, useStore } from "@builder.io/qwik";

interface DisplayProps {
  counter: { count: number };
}
export const Display = component$((props: DisplayProps) => {
  return <>Count: {props.counter.count}</>;
});

/**
 * This example shows how to use a recursive store.
 * @see - https://qwik.builder.io/tutorial/store/recursive/
 */
export default component$(() => {
  const store = useStore({ counter: { count: 0 } }, { recursive: true });

  return (
    <div class="container">
      <Display counter={store.counter} />
      <button
        // add tailwind button classess
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block"
        onClick$={() => store.counter.count++}
      >
        +1
      </button>
    </div>
  );
});
