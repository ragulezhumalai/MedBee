# RCM Matrix

RCM Matrix is a browser-based toolkit for healthcare operations and billing workflows. It brings quick notes, reference lookups, and links to payer authorization resources into one dashboard.

## Features

- **Quick Notes:** Create, edit, complete, and delete notes. Notes are saved in the current browser using `localStorage`.
- **MUE Edits Lookup:** Search MUE data by CPT code to view the MUE value and adjudication indicator.
- **CLIA Lookup (Beta):** Search the CLIA facility listing by CLIA ID or ZIP code. The listing identifies QCOR (CMS) as its source.
- **Authorization Lookup:** Open selected payer and Medicare authorization lookup resources.
- **Time Zones:** View current times in IST, CST, EST, and PST.
- **Policies:** A placeholder for a future feature.

The Portals feature is also marked as coming soon.

## Requirements

- Node.js
- npm

## Getting Started

Install dependencies and start the Vite development server:

```sh
npm install
npm run dev
```

Vite prints the local URL in the terminal, typically `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Data and Use

Lookup searches are processed locally in the browser using datasets bundled with the app; they do not query a live service. The CLIA listing is derived from CMS's QCOR dataset. Other references, such as payer contact details and authorization links, may come from non-CMS sources. Because reference data and payer URLs may change, verify them with the appropriate official source before using them for operational decisions. RCM Matrix is a reference aid; it does not replace payer guidance or professional judgment.

## Architecture and Privacy

RCM Matrix is a frontend-only application with no backend server. Notes and lookup searches are processed in the browser. Notes are stored in that browser's `localStorage`, and neither notes nor lookup inputs are uploaded to an RCM Matrix server. Authorization links open external payer or Medicare websites. Those sites are outside RCM Matrix's control and may receive standard browser requests when visited.
