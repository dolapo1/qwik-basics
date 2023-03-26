import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Hello Qwik</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Hello Qwik",
  meta: [
    {
      name: "description",
      content: "Hello Qwik",
    },
  ],
};
