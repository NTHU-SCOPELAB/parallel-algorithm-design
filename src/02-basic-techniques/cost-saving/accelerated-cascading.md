# Accelerated Cascading

- 精神: 先用慢但optimal的算法算到一半，再用快的算法算完，希望能保有原有的時間複雜度，但又能省去浪費的成本。

## Example 1. Finding maximum using double logarithmic depth tree ([SM-10](https://github.com/NTHU-SCOPELAB/parallel-algorithm-code/blob/main/SM10_Finding_Maximum))
- Input: `A[1...n]` (array)
- Output: `max(A[1...n])`
- Model: ***CRCW*** PRAM of \\( \frac{n}{\log\log n} \\) processors
