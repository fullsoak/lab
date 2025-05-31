import { type FunctionComponent } from "preact";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card.tsx";

type Props = { foo: string }

export const MyShadcnComponent: FunctionComponent<Props> = ({ foo }) => {

  return <section className="my-shadcn-section">
    <h1 className="text-3xl font-bold underline mb-5">
      {foo}
    </h1>
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  </section>;
}
