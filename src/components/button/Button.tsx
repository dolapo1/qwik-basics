import { component$ } from "@builder.io/qwik";

import type { QRL } from "@builder.io/qwik";

type ButtonProps = {
  handleClick: QRL<() => void>;
};

export const Button = component$((props: ButtonProps) => {
  return (
    <button
      /**
       * Events
       * For a web application to be interactive, there needs to be a way to respond to user events. This is done by registering callback functions in the JSX template.
       * Notice that onClick$ ends with $. This is a hint to both the Optimizer and the developer that a special transformation occurs at this location. The presence of the $ suffix implies a lazy-loaded boundary here. The code associated with the click handler will not download until the user triggers the click event.
       * @see https://qwik.builder.io/docs/components/events/
       */
      onClick$={props.handleClick}
    >
      Click me
    </button>
  );
});
