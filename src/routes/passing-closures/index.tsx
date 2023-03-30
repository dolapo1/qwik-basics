/**
 * Props must be serializable so that Qwik can resume and render each component independently from other components on the page.
 * This poses a problem if we wish to pass a callback to a child component.
 * Callbacks are functions and functions are not directly serializable, but they are serializable through the $() by converting them to QRLs first.
 * Functions passing across serializable boundaries must be done through QRLs.
 * QRLs are serialized forms of a function.
 * @see - https://qwik.builder.io/docs/advanced/qrl/
 *
 * Qwik has convenience APIs that end in $ these are equivalent to calling $() directly. These two lines are equivalent:
 * inline: useTask$(() => {...}/>
 *
 * explicit: const callbackQrl = $(() => {...});
 * useTaskQrl(callbackQrl)
 *
 *
 */

import { component$, $ } from "@builder.io/qwik";

import type { PropFunction } from "@builder.io/qwik";

export default component$(() => {
  const goodbye$ = $(() => alert("Good Bye!"));
  return (
    <div>
      <MyComponent
        goodbye$={goodbye$}
        hello$={async (name) => alert("Hello " + name)}
      />
    </div>
  );
});

interface MyComponentProps {
  goodbye$: PropFunction<() => void>;
  hello$: PropFunction<(name: string) => void>;
}
export const MyComponent = component$((props: MyComponentProps) => {
  return (
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block"
        onClick$={props.goodbye$}
      >
        good bye
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mt-1"
        onClick$={async () => await props.hello$("World")}
      >
        hello
      </button>
    </div>
  );
});
