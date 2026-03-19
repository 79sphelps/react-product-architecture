# Virtualized Data Grid

This project demonstrates rendering large datasets efficiently using virtualization. It helps highlight rendering costs, abstraction boundaries, and knowledge of performant systems.

---

# Concepts

- windowing
- scroll performance
- rendering optimization

---

# Why It Matters

Rendering 10,000 rows without virtualization causes:

- memory spikes
- frame drops
- slow UI

---

# Architecture

Scroll Container  
↓  
Virtualizer Hook  
↓  
Visible Rows Only  

---

# Features

- configurable engine
- testable system
- production-aligned architecture
- strong typing
- demonstrable perf behavior

---

# Future Improvements

- column virtualization
- sticky headers
- dynamic row heights
- windowing + server pagination combo