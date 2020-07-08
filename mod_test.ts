import { assertEquals } from "./test_deps.ts";
import { getHelloWorld } from "./mod.ts";

Deno.test("get hello world string", function test_get_hello_world(): void {
  assertEquals(getHelloWorld(), "\x1b[1mHello World\x1b[22m");
});
