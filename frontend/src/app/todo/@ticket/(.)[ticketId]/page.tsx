"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";
import { Archive, ClipboardList, Copy, Eye, X } from "lucide-react";

export default function TicketPage() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-50 h-screen w-full bg-background/80 backdrop-blur-sm">
      <div className="fixed left-[50%] top-[50%] z-50 grid w-[42rem] max-w-2xl translate-x-[-50%] translate-y-[-50%] rounded border bg-background shadow-lg duration-200">
        <div className="flex justify-between border-b px-6 py-4">
          <div className="flex items-center text-xl font-semibold">Title</div>
          <button
            className="grid h-10 w-10 place-items-center rounded text-sm hover:bg-gray-100"
            onClick={() => router.back()}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="h-48 px-6 py-4">overview</div>
        <div className="flex items-center justify-start gap-2 border-t p-6">
          <Button>
            <ClipboardList className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Button variant="outline">
            <Copy className="mr-2 h-4 w-4" />
            Copy
          </Button>
          <Button variant="outline">
            <Archive className="mr-2 h-4 w-4" />
            Archive
          </Button>
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            Watch
          </Button>
        </div>
      </div>
    </div>
  );
}
