# 🫖 I'm a Teapot Worker

[![Status: Short and Stout](https://img.shields.io/badge/status-short_and_stout-yellow)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Deploy with Wrangler](https://img.shields.io/badge/deploy-wrangler-brightgreen)](#deployment)
[![Lines of Whimsy](https://img.shields.io/badge/length-very--long-orange)](#readme)

---

## Table of Contents

1. [What Is This?](#what-is-this)
2. [Philosophy (Because Even Teapots Need One)](#philosophy-because-even-teapots-need-one)
3. [Features](#features)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Examples](#examples)
7. [Customization](#customization)
8. [Testing It Locally](#testing-it-locally)
9. [Deployment](#deployment)
10. [Why 418? Why Teapots?](#why-418-why-teapots)
11. [FAQ / For Those Who Ask Too Many Questions](#faq--for-those-who-ask-too-many-questions)
12. [Contributing](#contributing)
13. [License](#license)
14. [Acknowledgments & Tea Quotes](#acknowledgments--tea-quotes)

---

## What Is This?

This is a Cloudflare Worker whose sole purpose in life is to respond to *any and every* HTTP request with the illustrious, often misunderstood, and always amusing:

> **HTTP 418 – I'm a teapot.**

Yes. Every request. GET, POST, PUT, DELETE, OPTIONS, even if you try to whisper a `PATCH` in its ear. It will politely, firmly, and with JSON-formatted sincerity tell you:

> *"I'm a teapot. Short and stout."*

This is the internet’s playful nod to the [RFC 2324](https://datatracker.ietf.org/doc/html/rfc2324) April Fool’s joke spec about the Hyper Text Coffee Pot Control Protocol. You’re welcome.

---

## Philosophy (Because Even Teapots Need One)

Software exists for humans to understand what is happening inside the machine. This worker embraces that by being:

- **Explicit**: Every response includes method, URL, and a clear message. No magic, no silent failures.
- **Playful**: Life is too short for boring responses. If the web can serve JSON with a wink, it should.
- **Minimal**: No dependencies. No bloat. Just a teapot doing what teapots do best: refuse with style.

---

## Features

- 🫖 Always responds with HTTP `418 I'm a teapot`
- 📦 Supports both plain JavaScript and TypeScript (strong typing optional, delightful readability mandatory)
- 🔁 Stateless, side-effect-free, and pleasantly deterministic
- 🪄 Minimal headers that still say something (including a custom `X-Teapot`)
- 🧪 JSON body that echoes request method and URL for easy debugging or logging
- 🚀 Zero configuration required for the basic use case (“just deploy it and forget it” energy)

---

## Installation

This project assumes you have [Wrangler](https://developers.cloudflare.com/workers/wrangler/) installed. If you do not, install it globally:

```bash
npm install -g wrangler
```

## Why 418? Why Teapots?
Because nothing says “I understand HTTP and also have a sense of humor” like the teapot status code. Originally part of the Hyper Text Coffee Pot Control Protocol (HTCPCP) – an April Fools’ RFC from 1998 – it was a deliberate joke, but it stuck in the hearts of developers who enjoy purposeful whimsy in protocol-level responses.

Also, the teapot refuses to brew coffee. It respects its identity.

## FAQ / For Those Who Ask Too Many Questions
Q: Can I use this to rate-limit angry bots?
A: Absolutely. Let your aggressive scrapers hit the teapot and they’ll be gently reminded they’re talking to the wrong appliance.

Q: Is this production-safe?
A: If your production needs include making a service that always returns 418 I’m a teapot, then yes. Otherwise… maybe pair it with a real backend.

Q: Can I change the status code?
A: The project’s soul is 418. Changing it is betrayal, but the code is tiny; fork it and evolve it as you please.

Q: Why is there a header X-Teapot?
A: Because the teapot wants to be recognized. It’s subtle swagger for HTTP headers.

Q: Does it drink tea or just make a statement?
A: It is a teapot in spirit, not function. It exists to refuse gracefully.

## Contributing
Contributions are welcome, as long as they honor the spirit of the teapot: clarity, humor, and zero unnecessary complexity.

Some ideas for contributions:

Translations of the message into different languages (keeping the 418 spirit)

A customizable variant with query-parameter-controlled “stoutness”

Integration tests that verify the teapot behavior across edge cases

A visual status dashboard (spoiler: it will still show “I’m a teapot”)

Please fork, branch, and open a pull request. Include descriptive commit messages. No cryptic one-liners. Humans read this later.


## Bonus: ASCII Teapot (for README flair)

Because every teapot deserves a little personality. Here's an ASCII rendition you can drop into the README for extra charm:

<details>
<summary><strong>Show me the teapot</strong></summary>

```bash

   (
    )     (
     ___...--'`-.
  .-'          /
 /   .------.  \
|   /        \  |
|  |  .----.  | |
 \  \_/____\_/ /
  '._        _.'
     `''''''`
```

</details>
