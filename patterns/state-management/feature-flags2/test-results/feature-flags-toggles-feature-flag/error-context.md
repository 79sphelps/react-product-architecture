# Page snapshot

```yaml
- generic [ref=e2]:
  - complementary [ref=e3]:
    - heading "Feature Flags" [level=2] [ref=e4]
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]: newUI
        - checkbox "Toggle newUI" [checked] [active] [ref=e8]
      - paragraph [ref=e9]: Enable redesigned UI
      - combobox [ref=e10]:
        - option "Default" [selected]
        - option "Variant A"
        - option "Variant B"
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e13]: experiment
        - checkbox "Toggle experiment" [ref=e14]
      - paragraph [ref=e15]: A/B test experiment
    - generic [ref=e16]:
      - generic [ref=e17]:
        - generic [ref=e18]: admin
        - checkbox "Toggle admin" [ref=e19]
      - paragraph [ref=e20]: Admin permissions
  - generic [ref=e21]:
    - paragraph [ref=e22]: "Experiment Variant:"
    - paragraph [ref=e23]: Variant A UI
  - generic [ref=e24]:
    - heading "Feature Demo" [level=1] [ref=e25]
    - generic [ref=e26]:
      - generic [ref=e27]: newUI
      - generic [ref=e28]: default
    - generic [ref=e30]: New UI Experience 🎉
  - paragraph [ref=e32]: Admin access required
```