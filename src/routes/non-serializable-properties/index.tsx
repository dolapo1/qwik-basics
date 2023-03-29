import { component$, noSerialize, useStore } from "@builder.io/qwik";

import type { NoSerialize } from "@builder.io/qwik";

interface AppStore {
  time: null | string;
  cleanup: NoSerialize<() => void>;
}

/**
 * Stores must always be serializable, however sometimes you may want to persist a value on a store that can't be serialized.
 * Values like these persist in the browser only when the application is resumed on the client.
 */
export default component$(() => {
  const store = useStore<AppStore>({
    time: null,
    cleanup: undefined,
  });
  return (
    <>
      <div>Current Time: {store.time}</div>
      <button
        onClick$={() => {
          const id = setInterval(
            () => (store.time = new Date().toString()),
            1000
          );
          store.cleanup = noSerialize(() => clearInterval(id));
        }}
      >
        start
      </button>
      <button
        onClick$={() => {
          store.cleanup && store.cleanup();
          store.cleanup = undefined;
        }}
      >
        stop
      </button>
    </>
  );
});
