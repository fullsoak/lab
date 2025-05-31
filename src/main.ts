import {
  type Context,
  Controller,
  Get,
  setupDefaultFullsoakLogger,
  ssr,
  useFullSoak,
} from "fullsoak";
import { makeHat } from "fullsoak/batteries";
import { MyComponent } from "./components/MyComponent/index.tsx";
import { MyRouteAwareComponent } from "./components/MyRouteAwareComponent/index.tsx";
import { ShoelaceExampleController } from "./controllers/ShoelaceExampleController.ts";
import { MyScssComponent } from "./components/MyScssComponent/index.tsx";
import { MyShadcnComponent } from "./components/MyShadcnComponent/index.tsx";
import { ShadcnController } from "./controllers/ShadcnController.ts";

setupDefaultFullsoakLogger();

const GLOBAL_COMPONENTS_DIR: string = Deno.cwd() + "/src/components";

@Controller()
class MyController {
  @Get("/")
  simpleExample() {
    return ssr(MyComponent, { foo: "bar" });
  }

  @Get("/example2")
  example2() {
    return ssr(MyScssComponent, { foo: "example 2" });
  }

  @Get("/example3")
  example3() {
    return ssr(MyShadcnComponent, { foo: "example 3" }, {
      headContent: makeHat({
        scripts: [{
          src: "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4",
        }],
      }),
      customImportMap: {
        "preact/compat": "https://esm.sh/preact@10.26.5/compat",
        "@/lib/": "/lib/",
      },
    });
  }

  @Get("/app/:page*")
  renderMyRouteAwareComponent(ctx: Context) {
    return ssr(MyRouteAwareComponent, {
      path: ctx.request.url.pathname,
      foo: "Lorem Ipsum",
    }, { headContent: makeHat({ title: "FullSoak App" }) });
  }
}

const port = Number(Deno.env.get("PORT") || 0) ?? 3991;

useFullSoak({
  port,
  controllers: [MyController, ShoelaceExampleController, ShadcnController],
  componentsDir: GLOBAL_COMPONENTS_DIR,
});
