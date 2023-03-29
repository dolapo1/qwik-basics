import { component$, useOn, $ } from "@builder.io/qwik";

/**
 * This example shows how to use `useOn` to add an event listener.
 * @see - https://qwik.builder.io/tutorial/events/programmatic/
 */
export default component$(() => {
  useOn(
    "click",
    $(() => alert("Hello World!"))
  );

  return <div>Hello Qwik!</div>;
});
