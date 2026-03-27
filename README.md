<div align="center">

# EdgeWord

[![Build Status](https://img.shields.io/github/actions/workflow/status/thefiredev/edgeword/ci.yml?branch=main&style=flat-square&color=ff4d4d)](https://github.com/thefiredev/edgeword/actions)
[![Coverage](https://img.shields.io/codecov/c/github/thefiredev/edgeword?style=flat-square&color=ff4d4d)](https://codecov.io/gh/thefiredev/edgeword)
[![Version](https://img.shields.io/npm/v/@thefiredev/edgeword?style=flat-square&color=ff4d4d)](https://www.npmjs.com/package/@thefiredev/edgeword)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Discord](https://img.shields.io/discord/1234567890?style=flat-square&logo=discord&color=5865F2)](https://discord.gg/thefiredev)
[![Latency](https://img.shields.io/badge/suggestion_latency-%3C2sec-brightgreen?style=flat-square)](https://docs.thefiredev.com/edgeword/performance)

**Never lose a negotiation again.**

*Real-time negotiation AI with earpiece mode, live coaching, and game theory tactics delivered in under 2 seconds.*

[Landing Page](https://thefiredev.com/edgeword) · [Docs](https://docs.thefiredev.com/edgeword) · [Discord](https://discord.gg/thefiredev) · [Report Bug](https://github.com/thefiredev/edgeword/issues)

</div>

---

## What It Does

EdgeWord is a real-time negotiation intelligence system. It listens to your call, understands the dynamics in play, and feeds you precise tactical suggestions through an earpiece — before the other side knows what hit them.

**Used by:** Sales professionals, recruiters, procurement teams, real estate agents, attorneys, executives in high-stakes conversations.

---

## Key Value Props

| | |
|---|---|
| 🎧 **Earpiece Mode** | Silent, real-time suggestions during live calls — no typing, no looking at screens |
| ⚡ **<2 Second Latency** | Deepgram ASR → game theory engine → tactical output in under 2 seconds |
| 🔬 **Pre-Call Research** | Auto-profile the other party: background, negotiation history, pressure points |
| 🧠 **Game Theory Engine** | BATNA analysis, anchoring detection, concession tracking, threat classification |
| 📊 **Post-Call Analysis** | Full transcript, scoring, what-you-should-have-said, improvement report |

---

## Features

### Real-Time Coaching

- 🎙️ **Deepgram Transcription** — <300ms word-by-word transcription, speaker-diarized
- 🧮 **Game Theory Engine** — Real-time BATNA tracking, Zeuthen/Nash equilibrium analysis
- 🎯 **Tactical Suggestions** — Anchoring, mirroring, labeling, calibrated questions (Chris Voss framework)
- 🚨 **Threat Detection** — Identifies pressure tactics, FUD, false urgency in real time
- 📉 **Concession Tracker** — Maps concession patterns, flags when you're giving too much too fast

### Pre-Call Intelligence

- 🕵️ **Party Profiling** — LinkedIn, news, deal history, public filings
- 📋 **Negotiation Briefing** — Goals, likely tactics, recommended opening position, walk-away point
- 💰 **Market Comps** — Real-time comparable data for price negotiations
- 🎭 **Persona Analysis** — Communication style, risk tolerance, decision-making patterns

### Post-Call Analysis

- 📝 **Full Transcript** — Timestamped, searchable, speaker-labeled
- 📊 **Performance Score** — Outcome vs. expected value, technique grades
- 🔁 **Replay & Drill** — Re-run scenarios with AI as the other party
- 📈 **Progress Tracking** — Skill improvement over time across all negotiations

---

## Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                        EdgeWord Platform                         │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐    ┌──────────────┐    ┌───────────────────┐  │
│  │   iOS/Web    │    │   Earpiece   │    │  Desktop Overlay  │  │
│  │     App      │    │  (BT Audio)  │    │   (Mac/Windows)   │  │
│  └──────┬───────┘    └──────┬───────┘    └────────┬──────────┘  │
│         │                   │                     │              │
│         └───────────────────┼─────────────────────┘              │
│                             │                                    │
│              ┌──────────────▼──────────────┐                    │
│              │       Audio Ingestion        │                    │
│              │    (WebRTC / System Audio)   │                    │
│              └──────────────┬──────────────┘                    │
│                             │                                    │
│              ┌──────────────▼──────────────┐                    │
│              │    Deepgram Streaming ASR    │                    │
│              │   (<300ms, speaker-diarized) │                    │
│              └──────────────┬──────────────┘                    │
│                             │                                    │
│         ┌───────────────────┼───────────────────┐               │
│         │                   │                   │               │
│         ▼                   ▼                   ▼               │
│  ┌─────────────┐   ┌─────────────────┐   ┌───────────────┐     │
│  │  Sentiment  │   │  Game Theory    │   │    Tactic     │     │
│  │  Analyzer   │   │    Engine       │   │   Detector    │     │
│  └──────┬──────┘   └────────┬────────┘   └───────┬───────┘     │
│         │                   │                    │              │
│         └───────────────────┼────────────────────┘              │
│                             │                                    │
│              ┌──────────────▼──────────────┐                    │
│              │     Coaching Synthesizer     │                    │
│              │   (GPT-4o + Prompt Engine)   │                    │
│              └──────────────┬──────────────┘                    │
│                             │                                    │
│         ┌───────────────────┼───────────────────┐               │
│         ▼                   ▼                   ▼               │
│    Earpiece TTS        Screen Card        Push Notification     │
│    (<2sec total)       (silent UI)        (mobile backup)       │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Deepgram](https://img.shields.io/badge/Deepgram-ASR-13EF93?style=flat-square)](https://deepgram.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?style=flat-square&logo=openai)](https://openai.com/)
[![WebRTC](https://img.shields.io/badge/WebRTC-Audio-333333?style=flat-square&logo=webrtc)](https://webrtc.org/)
[![Redis](https://img.shields.io/badge/Redis-7-DC382D?style=flat-square&logo=redis)](https://redis.io/)
[![React Native](https://img.shields.io/badge/React_Native-0.73-61DAFB?style=flat-square&logo=react)](https://reactnative.dev/)

---

## Quick Start

### Prerequisites

- Node.js 20+
- Deepgram API key
- OpenAI API key
- Bluetooth earpiece (for earpiece mode)

### Installation

```bash
git clone https://github.com/thefiredev/edgeword.git
cd edgeword
npm install
cp .env.example .env
# Add DEEPGRAM_API_KEY, OPENAI_API_KEY to .env
npm run dev
```

### Run a Test Session

```bash
# Start a simulated negotiation session
npm run demo:negotiation

# Test with a pre-recorded audio file
npm run analyze:audio -- --file ./samples/salary-negotiation.mp3

# Start live earpiece mode (requires mic access)
npm run earpiece:start
```

---

## API Reference

### `POST /v1/sessions`

Start a new negotiation session.

**Request**
```json
{
  "mode": "earpiece" | "screen" | "analysis",
  "context": {
    "negotiation_type": "salary" | "sales" | "procurement" | "real_estate" | "legal",
    "your_position": "string",
    "target_outcome": "string",
    "walkaway_point": "string"
  },
  "party_profile": {
    "name": "string",       // Optional: triggers pre-call research
    "company": "string",
    "linkedin_url": "string"
  }
}
```

**Response**
```json
{
  "session_id": "sess_abc123",
  "websocket_url": "wss://rt.thefiredev.com/edgeword/sess_abc123",
  "briefing": { ... },
  "recommended_opening": "string"
}
```

### WebSocket: Real-Time Coaching

Connect to `websocket_url` and stream audio. Receive coaching events:

```json
{
  "type": "suggestion",
  "urgency": "high" | "medium" | "low",
  "text": "They just anchored high. Counter at $X — don't justify it.",
  "technique": "counter_anchor",
  "latency_ms": 1847
}
```

**Full API docs:** [docs.thefiredev.com/edgeword/api](https://docs.thefiredev.com/edgeword/api)

---

## Pricing

| Plan | Price | Sessions/mo | Features |
|------|-------|-------------|----------|
| Starter | $79/mo | 10 | Screen coaching, post-call analysis |
| Pro | $299/mo | Unlimited | + Earpiece mode, pre-call research |
| Team | $899/mo | Unlimited | + Team analytics, API access, custom frameworks |

[Start free trial →](https://thefiredev.com/edgeword#pricing)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup, code style, and PR guidelines.

## Security

Found a vulnerability? See [SECURITY.md](SECURITY.md) for responsible disclosure.

## License

MIT — see [LICENSE](LICENSE)

---

<div align="center">

**Built by [The Fire Dev LLC](https://thefiredev.com)**

*The operating system for ambitious businesses.*

</div>
