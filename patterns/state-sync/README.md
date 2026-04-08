# State Sync Architecture

## Overview

This project demonstrates how to synchronize state across:

- URL (search params)
- UI inputs
- internal store
- query layer

It shows how to build:
- a deterministic state synchronization system across multiple sources of truth (similar to how React Router, TanStack Query, Zustand, and RTK work)

The tools that cover this type of architecture typically:
- handle URL state
- sync with the store
- manage caching

## Usages

1) URL-driven apps (pretty common)
- search pages
- filters
- pagination
- sort order

Real-world: Amazon product filtering, Airbnb search filters, Google search results

This pattern allows for users to refresh the page but keep state.
URLs are shareable, too.

2) Data fetching systems
> state.q -> query key -> fetch data

Real-world: Netflix search, Spotify filtering playlists

-> The sync layer becomes the input to the data layer

3) Dashboards and Analytics Tools

Examples:
- Date ranges
- filters
- metrics

Real-world: Datadog, Tableau

Why?
- complex state must persist
- users share dashboards via URL
- state must be reproducible

4) Multi-Source State Systems

Where state comes from:
- UI
- URL
- Local storage
- Server

So, the arch becomes: 
- multiple inputs -> unified store -> multiple outputs

5) Collaborative / Real-Time Apps

Can extend the system:
- UI <-> Store <-> URL <-> Server <-> Other Users

Real-world: Figma, Notion

## Why This Matters

State desynchronization is one of the most common sources of bugs in frontend systems.

This project teaches:

- Single source of truth
- Bidirectional sync
- Avoiding infinite loops
- Controlled inputs
- Debounced updates

## Architecture

User Input → Store → Sync Engine → URL + Query

## Features

- URL-driven state
- Real-time sync
- Dev panel
- Debounced updates
- Fully typed

## Running

```bash
npm install
npm run dev
npm test