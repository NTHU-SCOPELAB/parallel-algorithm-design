# Performance of Parallel Algorithms

## 1. Definitions

Given each problem and \\(p\\) processors, we can define the following terms for the parallel algorithms: 
### a. Speedup
\\[
\text{Speedup} = \frac{\text{worst-case running time of fastest known sequential algorithm}}{\text{worst-case running time of parallel algorithm}}
\\]

- A parallel algorithm is said to achieve ***linear speedup*** if the speedup with \\(p\\) processors is $$\theta (p)$$.
- 除非有外部因素, e.g. I/O, CR, CW等不同的模型因素，否則不可能有超過***linear speedup***的情況 (aka ***superlinear speedup***)。

### b. Cost
\\[
\begin{align}
\text{Cost of sequential algorithm} &= (\text{sequential running time}) \times (\text{number of processors}) = T_s \times 1 = T_s \\\\
\text{Cost of parallel algorithm} &= (\text{parallel running time}) \times (\text{number of processors}) = T_p \times p
\end{align}
\\]
- A parallel algorithm is said to be ***cost optimal*** if the cost of the parallel algorithm matches the cost of the sequential algorithm in terms of big-O notation, i.e. $$T_p \times p = O(T_s)$$.

### c. Efficiency
\\[
\begin{align}
\text{Efficiency} &= \frac{\text{cost of fastest known sequential algorithm}}{\text{cost of parallel algorithm}} \\\\
&= \frac{T_s \times 1}{T_p \times p} \\\\
&= \frac{\text{parallel speed up}}{p} \\\\
&\leq 1
\end{align}
\\]

## 2. Remark
### a. Cost optimal is equivalent to linear speedup
\\[
\text{Cost optimal} \Leftrightarrow \text{linear speedup} \Leftrightarrow \text{efficiency} = 1
\\]

### b. Does these notations actually make sense? (No)

|               | Cost | Speedup | Efficiency |
|---------------|------|---------|------------|
| notation      | \\( p \cdot  T_p \\) |   \\( \frac{T_s}{T_p} \\)    |     \\( \frac{T_s}{\text{cost}} = \frac{\text{speed up}}{p} \\)    |
| experiment (number)|  ✔️  |    ✔️   |     ✔️     |
| algorithm (big-\\(O\\))     |  ✔️  |    Δ    |     ❌     |
