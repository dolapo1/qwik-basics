import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="page">
      <main>
        <Link
          href="/"
          style={{
            display: "block",
            color: "blue",
            textDecoration: "underline",
          }}
        >
          Home
        </Link>
        <hr
          style={{
            margin: "1rem 0",
          }}
        />
        <Slot />
      </main>
    </div>
  );
});
