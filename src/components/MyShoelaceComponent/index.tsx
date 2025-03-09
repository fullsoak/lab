import type { FunctionComponent } from "preact";

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
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "sl-card": any;
      "sl-button": any;
      "sl-rating": any;
    }
  }
}

export const MyShoelaceComponent: FunctionComponent = () => (
  <section>
    <sl-card class="card-overview">
      <img
        slot="image"
        src="https://unsplash.com/photos/yMkJtHu2GDI/download?ixid=M3wxMjA3fDB8MXxhbGx8MTQxfHx8fHx8fHwxNzQxNDg5MjIxfA&auto=format&fit=crop&w=500&q=80"
        alt="Everything you need for a great trip to Yosemite"
      />

      <strong>Yosemite</strong>
      <br />
      The journey is worth the lifetime experience. You are awaited!<br />
      <small>polaroid not included</small>

      <div slot="footer">
        <sl-button variant="primary" pill>Book now</sl-button>
        <sl-rating></sl-rating>
      </div>
    </sl-card>

    <style>{css}</style>
  </section>
);
