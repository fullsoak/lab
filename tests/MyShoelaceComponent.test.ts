import { useFullSoak } from "fullsoak/testing";
import { assertSnapshot } from "@std/testing/snapshot";
import { superoak } from "superoak";
import { ShoelaceExampleController } from "../src/controllers/ShoelaceExampleController.ts";

Deno.test("MyComponent", async (t) => {
  const app = await useFullSoak({ controllers: [ShoelaceExampleController] });
  const req = await superoak(app);
  const resp = await req.get("/lab");
  await assertSnapshot(t, resp.text);
});
