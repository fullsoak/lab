import { type Context, Controller, ControllerMethodArgs, Get } from "fullsoak";

import * as utils from "@/lib/utils.ts";

@Controller()
export class ShadcnController {
  @Get("/lib/:file")
  @ControllerMethodArgs("param")
  async serveTailwindcss({ file }: { file: string }, ctx: Context) {
    // @TODO ensure `file` is sanitized
    console.log(utils);
    ctx.response.body = utils;
  }
}
