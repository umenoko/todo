import Link from "next/link";

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
    <div className="flex flex-col gap-4 rounded bg-white p-5">
      <div className="flex justify-between">
        <div className="font-semibold">Title</div>
        <Link href="/todo/id">■</Link>
      </div>
      <div className="text-sm">overview</div>
      <div className="flex h-7 justify-end">
        <div className="grid place-items-center rounded-lg bg-violet-100 px-3 text-sm font-medium text-violet-800">
          ● 2023/12/01
        </div>
      </div>
    </div>
  );
}
