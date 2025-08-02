export default {
  async fetch(request) {
    // Prepare the 418 response body and headers
    const responseBody = JSON.stringify({
      status: 418,
      message: "I'm a teapot. Short and stout.",
      method: request.method,
      url: request.url
    }, null, 2);

    const responseHeaders = new Headers({
      "Content-Type": "application/json; charset=utf-8",
      "X-Teapot": "Yes, really",
      "Cache-Control": "no-store"
    });

    return new Response(responseBody, {
      status: 418,
      statusText: "I'm a teapot",
      headers: responseHeaders
    });
  }
};
