import Link from "next/link";
import { Clock5, PenSquare } from "lucide-react";

export default function TodoPage() {
  return (
    <main className="min-h-screen w-screen px-4">
      <div className="flex h-full gap-4">
        <StatusColumn />
        <StatusColumn />
        <StatusColumn />
      </div>
    </main>
  );
}

function StatusColumn() {
  return (
    <div className="flex flex-col">
      <div className="py-4 font-semibold">Status</div>
      <div className="flex w-96 shrink-0 flex-col gap-4 pb-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="flex flex-col gap-4 rounded bg-white p-5 shadow">
      <div className="flex justify-between">
        <div className="flex items-center font-semibold">Title</div>
        <Link
          href="/todo/id"
          className="grid h-10 w-10 place-items-center rounded hover:bg-gray-100"
        >
          <PenSquare className="h-4 w-4" />
        </Link>
      </div>
      <div className="text-sm">overview</div>
      <div className="flex h-7 justify-end">
        <div className="flex items-center justify-center gap-2 rounded-lg bg-indigo-100 px-3 text-sm font-medium text-indigo-600">
          <Clock5 className="h-4 w-4" />
          2023/12/01
        </div>
      </div>
    </div>
  );
}
