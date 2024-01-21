"use client";

import { trpc } from "lib/trpc/client";

export function QueryTest() {
  //const res: object = { data: { greeting: "ugh" } };
  const res = trpc.messages.hello.useQuery({ text: "world!" });

  return (
    <div className="m-auto p-20 bg-red-500 text-yellow-400 text-lg text-center">
      {res?.data?.greeting}
    </div>
  );
}
