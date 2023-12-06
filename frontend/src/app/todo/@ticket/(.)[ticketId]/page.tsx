"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TicketPage() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 h-screen w-full bg-background/80 backdrop-blur-sm">
      <div className="fixed left-[50%] top-[50%] z-50 grid w-[42rem] max-w-2xl translate-x-[-50%] translate-y-[-50%] border bg-background p-6 shadow-lg duration-200">
        <div className="flex justify-between">
          <div>Title</div>
          <button onClick={() => router.back()}>✗</button>
        </div>
      </div>
    </div>
  );
}
