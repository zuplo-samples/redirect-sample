import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  const url = new URL(request.url);
  url.hostname = 'docs.example.com';

  return new Response(null, { status: 307, headers: {
    Location: url.toString()
  }});
}
