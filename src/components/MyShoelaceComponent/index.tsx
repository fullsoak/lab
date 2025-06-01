import type { FunctionComponent } from "preact";
import type { SlButton, SlCard, SlRating } from "@shoelace-style/shoelace";
import { get1stPropAt, getDescAt, getNameAt } from "./texts.ts";
import { useEffect } from "preact/hooks";

const css = `
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--sl-color-neutral-500);
  }

  .card-overview [slot="footer"] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

// https://stackoverflow.com/questions/61015445/using-web-components-within-preact-and-typescript
declare module "preact/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "sl-card": HTMLAttributes<SlCard>;
      "sl-button": HTMLAttributes<SlButton> & {
        variant: string;
        pill: boolean;
      };
      "sl-rating": HTMLAttributes<SlRating>;
    }
  }
}

const PHOTOS = (new Array(20)).fill(1).map((_, i) =>
  `https://picsum.photos/seed/${i + 1}/300/200`
);

export const MyShoelaceComponent: FunctionComponent = () => {
  // @TODO fix preact/hooks useEffect crash and re-enable the block below
  /*
  useEffect(() => {
    let scrolling = false;
    let scrollAmount = 0;

    const onMouseWheel = (event: WheelEvent) => {
      event.preventDefault();
      scrollAmount += event.deltaY;
      if (!scrolling) {
        scrolling = true;
        requestAnimationFrame(updateScroll);
      }
    };

    document.addEventListener("wheel", onMouseWheel, { passive: false });

    function updateScroll() {
      document.querySelector('div.container')!.scrollLeft += scrollAmount;
      scrollAmount = 0;
      if (scrollAmount !== 0) {
        requestAnimationFrame(updateScroll);
      } else {
        scrolling = false;
      }
    }

    return () => {
      document.removeEventListener("wheel", onMouseWheel);
    };
  }, []);
  */

  return (
    <>
      <header>
        <div>
          <h1>fullsoak lab</h1>
          <p>
            this page is SSR'ed. Here's the{" "}
            <a href="https://github.com/fullsoak/lab/blob/lab/src/controllers/ShoelaceExampleController.ts">
              Server code
            </a>. Here's the{" "}
            <a href="https://github.com/fullsoak/lab/blob/lab/src/components/MyShoelaceComponent/index.tsx">
              Client code
            </a>.
          </p>
        </div>
      </header>
      <div className="container">
        <section>
          {PHOTOS.map((url, i) => (
            <sl-card key={i} class="card-overview">
              <img
                slot="image"
                src={url}
                alt={getNameAt(i)}
              />

              <strong>{getNameAt(i)}</strong>
              <br />
              {getDescAt(i)}
              <br />
              <small>{get1stPropAt(i)}</small>

              <div slot="footer">
                <sl-button variant="primary" pill>Try now</sl-button>
                <sl-rating></sl-rating>
              </div>
            </sl-card>
          ))}

          <style dangerouslySetInnerHTML={{ __html: css }}></style>
        </section>
      </div>
      <footer>
        <div>
          <p>Tip: Ctrl+U (Cmd+U on MacOS) to view source</p>
          <p>
            Concept of the framework on which this web page is built:{" "}
            <a href="https://github.com/fullsoak/fullsoak/wiki/Concepts-&-Example-Deployment">
              https://github.com/fullsoak/fullsoak/wiki/Concepts-&-Example-Deployment
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
