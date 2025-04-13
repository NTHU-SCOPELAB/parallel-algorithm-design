# Categorization of PRAM models

- From now on, we'll focus on SIMD PRAM models.

## 1. Models

- Note that
\\[
\begin{align}
\text{completely connected interconnection network} &\Leftrightarrow \text{shared-memory computer} \\\\
\text{SIMD shared-memory computer} &\Leftrightarrow \text{PRAM} \\\\
                                   &\Leftrightarrow \text{Parallel Random Access Machine}
\end{align}
\\]

## 2. Resuolution rules for concurrent write 
### a. Weak conflict-resolution rule (W-PRAM)
- 只能寫在固定的記憶體區塊。
- 只能寫入0或1。
- 同時寫入的話，只能都寫入1才能成功寫入。

### b. Equality conflict-resolution rule
- 只有在大家都寫同一個值的時候才能正常寫入

### c. Priority conflict-resolution rule
- 事先定好優先級
