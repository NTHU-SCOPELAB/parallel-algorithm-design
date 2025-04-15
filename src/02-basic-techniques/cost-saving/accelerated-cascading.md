# Accelerated Cascading

- 精神: 先用慢但optimal的算法算到一半，再用快的算法算完，希望能保有原有的時間複雜度，但又能省去浪費的成本。

## Example 1. Finding maximum using double logarithmic depth tree ([SM-10](https://github.com/NTHU-SCOPELAB/parallel-algorithm-code/blob/main/SM10_Finding_Maximum))
- Input: `A[1...n]` (array)
- Output: `max(A[1...n])`
- Model: ***CRCW*** PRAM of \\( \frac{n}{\log\log n} \\) processors

### Savings
- Originally, we have:
\\[
\begin{align}
    p   &= n = 2^{2^k} \\\\
  T(n)  &= O(\log \log n) \\\\
  \text{Cost} &= O(n \log \log n) \\\\
\end{align}
\\]

- By swapping part of the computation with an optimal algorithm, we have the computation time as follow:
\\[ 
O(\log \log n) + O(\frac{n}{p}) \approx O(\log \log n)
\\]

- Hence, we can plug in \\( p = \frac{n}{\log \log n} \\) to minimize the cost, while retaining the same time complexity:
\\[
O(\log \log n) + O(\frac{n}{p}) = O(\log \log n) + O(\frac{n}{\frac{n}{\log \log n}}) = O(\log \log n) + O(\log \log n) = O(\log \log n)
\\]

## Example 2. 3-coloring on a directed cycle ([SM-11](https://github.com/NTHU-SCOPELAB/parallel-algorithm-code/tree/main/SM11_3_Coloring_On_A_Directed_Cycle), Brent's Theorem does not apply directly)
- Input: `A[1...n]` (array, directed cycle)
- Output: A coloring `C[1...n]`, `C[i]` is either `0`, `1`, or `2`. In addition, `C[i]!=C[j]` if `S[i]=j`
- Model: ***EREW*** PRAM of \\( n \\) processors
