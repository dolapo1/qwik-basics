import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";

import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const github = useStore({
    org: "BuilderIO",
  });

  // Use useResource$() to set up how the data is fetched from the server.
  // The useResource$() function returns a ResourceReturn object, which is a Promise-like object that can be serialized by Qwik.
  const reposResource = useResource$<string[]>(({ track, cleanup }) => {
    // We need a way to re-run fetching data whenever the `github.org` changes.
    // Use `track` to trigger re-running of this data fetching function.
    track(() => github.org);

    // A good practice is to use `AbortController` to abort the fetching of data if
    // new request comes in. We create a new `AbortController` and register a `cleanup`
    // function which is called when this function re-runs.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Fetch the data and return the promises.
    return getRepositories(github.org, controller);
  });

  return (
    <div class="container">
      <h1>Fetch Resource on State Change</h1>
      <span>
        GitHub username:
        <input
          class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block mb-4"
          value={github.org}
          onInput$={(ev) =>
            (github.org = (ev.target as HTMLInputElement).value)
          }
        />
      </span>
      <Resource
        value={reposResource}
        onPending={() => <>Loading...</>}
        onRejected={(error) => <>Error: {error.message}</>}
        onResolved={(repos) => (
          <ul>
            {repos.map((repo, index) => (
              <li key={index}>
                <a href={`https://github.com/${github.org}/${repo}`}>{repo}</a>
              </li>
            ))}
          </ul>
        )}
      />
    </div>
  );
});

export async function getRepositories(
  username: string,
  controller?: AbortController
): Promise<string[]> {
  console.log("FETCH", `https://api.github.com/users/${username}/repos`);
  const resp = await fetch(`https://api.github.com/users/${username}/repos`, {
    signal: controller?.signal,
  });
  console.log("FETCH resolved");
  const json = await resp.json();
  return Array.isArray(json)
    ? json.map((repo: { name: string }) => repo.name)
    : Promise.reject(json);
}

export const head: DocumentHead = {
  title: "Fetch Resource on State Change",
  meta: [
    {
      name: "description",
      content: "Fetch Resource on State Change",
    },
  ],
};
