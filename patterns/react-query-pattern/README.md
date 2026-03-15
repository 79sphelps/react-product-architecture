React Query Server State Architecture

This mini-project demonstrates **production-grade server state management**
using React Query (TanStack Query).

---

# Architecture Goals

- Separate **server state from UI state**
- Avoid manual loading/error management
- Enable caching and request deduplication
- Demonstrate optimistic updates

---

# Folder Structure


src/
api/
hooks/
components/
examples/
mocks/
tests/


---

# Data Flow

Component -> Custom Hook -> React Query Cache -> API Client -> Mock Server (MSW)
---

# Key Patterns Demonstrated

## Server State vs Client State

React Query manages server data:

useQuery(["user"], getUser)

UI state remains local:

useState()


---

## Cache Invalidation


queryClient.invalidateQueries(["user"])


---

## Optimistic Updates

Mutation responses update the cache immediately.

---

# Testing Strategy

## Unit Tests

Test API logic in isolation.


tests/unit


## Integration Tests

Test UI + data flow.


tests/integration


## E2E Tests

Test real user flows.


e2e


---

# Accessibility

- semantic HTML
- keyboard accessible controls
- visible loading states

---

# Architectural Principles

- Single Responsibility Principle
- Dependency Inversion
- UI / Data Layer separation
- Deterministic testing

---

# Takeaways

This project demonstrates:

• Server state architecture  
• React Query caching  
• Optimistic updates  
• API abstraction layers  
• Deterministic test environments  

---

# Future Improvements

- error boundaries
- retry strategies
- background refetching
- request cancellation
- pagination