import { fetchGet } from "@/lib/fetch";

type Ticket = {
  id: string;
  title: string;
  description: string;
  statusId: string;
};

export const getTickets = async () => {
  // TODO: BASE_URLを環境変数にする
  return await fetchGet<{ accounts: Ticket[] }>(
    new URL("/api/v1/tickets", "http://localhost:5000"),
  );
};
