import { createAPIFileRoute } from '@tanstack/react-start/api';

export const APIRoute = createAPIFileRoute('/api/hello')({
  GET: ({ request }) => {
    console.log('GET request received', request.url);
    return new Response('Hello World!');
  },
});
