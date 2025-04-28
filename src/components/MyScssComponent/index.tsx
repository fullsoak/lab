import { FunctionComponent } from "preact";

type Props = { foo: string }

export const MyScssComponent: FunctionComponent<Props> = ({ foo }) => {

  return <>
    <div className="div-1">
      <span>This is div-1</span>
      <div className="div-2">
        <span>This is div-2, prop passed in has value: `{foo}` | </span>
        <a href="/">go back</a>
      </div>
    </div>
  </>;
}
