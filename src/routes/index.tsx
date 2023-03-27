import { component$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/button";

export default component$(() => {
  return (
    <div class="container">
      <h1>Hello Qwik</h1>
      <Button
        handleClick={$(() => {
          alert("Hello Qwik");
        })}
      />
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
