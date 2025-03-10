import { Controller, Get, ssr } from "fullsoak";
import { MyShoelaceComponent } from "../components/MyShoelaceComponent/index.tsx";
import { makeHat } from "fullsoak/batteries";

const headContent = makeHat({
  title: "FullSoak Lab",
  links: [{
    rel: "stylesheet",
    href:
      "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/themes/light.css",
  }, {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=DM%20Mono",
  }],
  scripts: [{
    type: "module",
    src:
      "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/shoelace-autoloader.js",
  }],
});

@Controller()
export class ShoelaceExampleController {
  @Get("/lab")
  serveShoelaceExample() {
    return ssr(MyShoelaceComponent, {}, { headContent });
  }
}
