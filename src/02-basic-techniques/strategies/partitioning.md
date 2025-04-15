# Partitioning

- 精神: 先把問題分小塊計算，合併時需要處理的再另外擦屁股。

## Example 1. Parallel Merge ([SM-06](https://github.com/NTHU-SCOPELAB/parallel-algorithm-code/tree/main/SM06_Merging))
- Input: `A[1...n]`, `B[1...n]` (sorted arrays)
- Output: `C[1...2n]` (sorted array)
- Model: ***CREW*** PRAM of \\( \frac{n}{\log n}  \\) processors, \\( n = 2^m \\)
<img width="545" alt="image" src="https://github.com/user-attachments/assets/b43fd13e-50fa-44d3-b0b8-4f6ae2b95e3c" />
- 精神:
  - 一開始已排序，所以已經知道自己的local rank
  - 選定一邊，每m個人去對面找自己能打敗多少人，記下來。
    - 按去找的人打敗的分組，然後分工(兩邊)每人都去對面看自己打敗多少人。 
    - 如果分組後這邊少那邊多，就跳過不做。
  - 換邊也再做一次，以免有之前跳過的沒有算到。
  - (patch) 解決2不管地帶...?
  - 每人都有自己的local rank，跟打敗對方的人數，所以就有global rank了，於是各自歸位。
