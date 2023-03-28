import { component$, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button } from "~/components/button";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="container">
      <h1>Hello Qwik</h1>
      <Link
        href="/state-management"
        style={{
          display: "block",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        State Management
      </Link>
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
