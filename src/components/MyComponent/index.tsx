import type { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { MyOtherComponent } from "../MyOtherComponent/index.tsx";

console.log("MyComponent is being synchronously imported...");

type MyProps = {
  foo: string;
};

export const MyComponent: FunctionComponent<MyProps> = ({ foo }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`MyComponent mounted with initial props foo=${foo}`);
    return () => alert(`unmounted component with initial props foo=${foo}`);
  }, []);

  return (
    <>
      <section className="main">
        <h1>MyComponent</h1>
        <ul>
          <li>props 'foo' is {foo}</li>
          <li>
            state count is {count}{" "}
            <button type="button" onClick={() => setCount((x) => x + 1)}>
              +
            </button>
            <button type="button" onClick={() => setCount((x) => x - 1)}>
              -
            </button>
          </li>
          <li>
            <a href="/example2">An SSR component using scss</a>
          </li>
        </ul>
      </section>
      <MyOtherComponent baz={count} />
      <section style={{ padding: "1rem" }}>
        <h2>More Advanced Resources</h2>
        <ul>
          <li>
            <a href="/app">Route Aware App Component</a>
          </li>
          <li>
            <a href="/lab">Alpha Stuff &amp; Bleeding Edges</a>
          </li>
        </ul>
      </section>
      <footer>
        <div>
          <span>source code of this website:</span>{" "}
          <a href="https://github.com/fullsoak/lab">
            https://github.com/fullsoak/lab
          </a>
        </div>
      </footer>
    </>
  );
};
