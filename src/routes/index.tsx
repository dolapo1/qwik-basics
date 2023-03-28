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
      <Link
        href="/fetch-resource-on-state-change"
        style={{
          display: "block",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        Fetch Resource on State Change
      </Link>
      <Link
        href="/lit-components"
        style={{
          display: "block",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        Lit Components
      </Link>
      <Link
        href="/listening-document-window"
        style={{
          display: "block",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        Listening to Document and Window
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
