# Data Fetching Architecture

A production-grade data-fetching system inspired by React Query.

This is a simplified React Query arch using a cache, observer pattern, and 
hooks to manage server state.

---

# Overview

This project demonstrates how to build a scalable data-fetching layer with:

- caching
- retries
- background updates
- UI state synchronization

---

# Features

- query caching
- request deduplication
- retry logic
- loading/error states
- manual refetching
- mutation support

---

# Architecture

## Core

- QueryClient → orchestrates queries
- QueryCache → stores data
- QueryObserver → connects UI to cache (subscription bridge)
- useQuery = React adapter

## Hooks

- useQuery → fetch + cache
- useMutation → update data

## UI

- QueryBoundary → handles loading/error
- DataViewer → displays results

## Data Fetching Pattern

- Query caching
- Stale vs fresh logic
- Cache invalidation
- Retry logic
- Parallel queries
- Dependent queries
- Observer pattern
- Accessbile UI states

## Concepts

- Server-state vs client-state
- Cache lifecycle
- Stale-while-revalidate
- Observer pattern
- Hook abstraction

---

# Testing Strategy

| Layer       | Coverage                  |
| ----------- | ------------------------- |
| Unit        | retry, TTL, cache logic   |
| Integration | hooks + UI rendering      |
| E2E         | user flows + invalidation |

---

# Patterns Demonstrated

## Observer Pattern

UI subscribes to query state.

---

## Cache Layer

Data persists across renders.

---

## Separation of Concerns

- fetching logic isolated
- UI purely declarative

---

# Learnings

- data fetching is state management
- caching improves performance
- retries improve resilience

---

# Future Upgrades

- pagination
- infinite scrolling
- suspense mode
- devtools panel
- optimistic updates
- SSR hydration
- websocket syncing

---

# Why This Matters

This is how modern apps manage server state at scale.
