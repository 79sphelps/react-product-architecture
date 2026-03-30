# Error Handling Patterns (Frontend Architecture)

This project demonstrates production-grade error handling patterns.

---

## Goals

- Normalize all error shapes
- Handle errors at multiple layers
- Provide strong UX feedback
- Ensure full testability

---

## Architecture Overview

### Layers

| Layer        | Pattern                        |
|-------------|-------------------------------|
| UI          | Error Boundary + Fallback     |
| Async       | Controlled async wrapper      |
| Forms       | Field-level validation        |
| Global      | Central error store           |

---

## Data Flow

Error occurs
↓
normalizeError()
↓
(optional) errorStore
↓
hooks consume state
↓
UI renders feedback

---

## Core Modules

### `createErrorStore`
- Observer pattern
- Global error state
- Subscription-based updates

### `normalizeError`
- Converts unknown errors → consistent shape

---

## Hooks

### `useAsyncError`
- Wraps async calls
- Captures + normalizes errors
- Sends to global store

### `useFormErrors`
- Field-level error management
- Controlled validation

### `useErrorBoundary`
- Escalates errors to UI boundary

---

## Components

### `ErrorBoundary`
- Functional wrapper pattern
- Catches rendering errors

### `ErrorFallback`
- Accessible error UI (`role="alert"`)

### `FieldError`
- Inline validation messaging

### `GlobalErrorBanner`
- Global error visibility

---

## UX Principles

- Immediate feedback
- Clear messaging
- Accessible alerts
- Non-blocking async flows

---

## Testing Strategy

| Layer        | Coverage                          |
|-------------|----------------------------------|
| Unit        | store + normalization            |
| Integration | component + hook interaction     |
| E2E         | real user error flows            |

---

## Key Takeaways

- Always normalize errors early
- Separate concerns (UI vs logic)
- Use observer pattern for global state
- Make errors visible + testable
- Avoid undefined in state models


## Extensions and Enhancements

- Retry strategies
- Error logging (Sentry, Datadog)
- Toast notification system
- Suspense-based error handling

## Summary

This project demonstrates:

- Modern React patterns (hooks-first)
- Strong TypeScript guarantees
- Real-world system design
- Full test coverage strategy
