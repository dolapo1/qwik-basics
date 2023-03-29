import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// Since Qwik processes asynchronously by default,
// your code must be explicitly configured for synchronous calls.
// This example shows how to eagerly load an event handler that processes a synchronous event.

export default component$(() => {
  const aHref = useSignal<Element>();

  useVisibleTask$(() => {
    const handler = (event: Event) => {
      event.preventDefault();
      alert("Hello World!");
    };
    aHref.value!.addEventListener("click", handler);
    return () => aHref.value!.removeEventListener("click", handler);
  });

  return (
    <a href="/" ref={aHref}>
      click me
    </a>
  );
});

export const head: DocumentHead = {
  title: "Synchronous event",
  meta: [
    {
      name: "description",
      content: "Synchronous event",
    },
  ],
};
