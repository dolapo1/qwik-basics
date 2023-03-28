import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const user = useStore({
    username: "",
    password: "",
  });

  console.log("🚀 ~ file: index.tsx:9 ~ user:", user);

  return (
    <div class="w-full h-full">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-8 max-w-xs m-auto">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={user.username}
            onInput$={(event) => {
              const input = event.target as HTMLInputElement;
              user.username = input.value;
            }}
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={user.password}
            onInput$={(event) => {
              const input = event.target as HTMLInputElement;
              user.password = input.value;
            }}
          />
          <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
});

export const head: DocumentHead = {
  title: "State Management",
  meta: [
    {
      name: "description",
      content: "State Management",
    },
  ],
};
