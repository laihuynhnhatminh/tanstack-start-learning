import { Button } from "@/components/ui/button";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import fs from "fs";

const filePath = "count.txt";

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, "utf-8").catch(() => "0")
  );
}

const getCount = createServerFn({
  method: "GET",
}).handler(() => {
  return readCount();
});

const addCount = createServerFn({
  method: "POST",
})
  .validator(z.number())
  .handler(async ({ data }) => {
    const count = await readCount();
    return fs.promises.writeFile(filePath, (count + data).toString());
  });

const subCount = createServerFn({
  method: "POST",
})
  .validator(z.number())
  .handler(async ({ data }) => {
    const count = await readCount();
    return fs.promises.writeFile(filePath, (count - data).toString());
  });

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => await getCount(),
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>Counter</h1>
      <h2>{state}</h2>
      <div className="flex gap-4">
        <Button
          type="button"
          onClick={() => {
            addCount({ data: 1}).then(() => {
              router.invalidate();
            });
          }}
        >
          Add 1
        </Button>
        <Button
          type="button"
          onClick={() => {
            subCount({ data: 1 }).then(() => {
              router.invalidate();
            });
          }}
        >
          Remove 1
        </Button>
      </div>
    </div>
  );
}
