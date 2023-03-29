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
      <Link
        href="/prevent-default"
        style={{
          display: "block",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        Prevent Default
      </Link>
      <Link
        href="/synchronous-event"
        style={{
          display: "block",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        Synchronous Event
      </Link>
      <Link
        href="/programmatic-listeners"
        style={{
          display: "block",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        Programmatic Listeners
      </Link>
      <Link
        href="/recursive-store"
        style={{
          display: "block",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        Recursive Store
      </Link>
      <Link
        href="/non-serializable-properties"
        style={{
          display: "block",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        Non-Serializable Properties
      </Link>
      <Link
        href="/passing-data-to-components"
        style={{
          display: "block",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        Passing Data to Components
      </Link>
      <Link
        href="/passing-stores"
        style={{
          display: "block",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        Passing Stores
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
