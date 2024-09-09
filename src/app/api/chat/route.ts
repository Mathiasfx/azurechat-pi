import { chatAPIEntry } from "@/features/chat/chat-services/chat-api-entry";

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  return await chatAPIEntry(body);
}
