# Divide and Conquer

- 精神: 把工作分成小塊來遞迴解決。

## Example 1. Balanced Binary Tree Method ([SM-01](https://github.com/NTHU-SCOPELAB/parallel-algorithm-code/tree/main/SM01_Summing))
- Input: `A[1...n]` (array)
- Output: `A[1] + A[2] + ... + A[n]`
- Model: ***EREW*** PRAM of \\( \frac{n}{2} \\) processors
- Time: \\( \log n \\)  
<img width="506" alt="image" src="https://github.com/user-attachments/assets/2918b6dd-7173-4051-a9b5-589fca9e48d5" />


## Example 2. Parallel M-way Search ([SM-04](https://github.com/NTHU-SCOPELAB/parallel-algorithm-code/tree/main/SM04_Parallel_M_Way_Search))
- Input: sorted `A[1...n]` (array), `x` (target)
- Output: `i` such that `A[i] == x` (if exists)
- Model: ***CREW*** PRAM of \\( p \\) processors  
<img width="486" alt="image" src="https://github.com/user-attachments/assets/eb48b9a9-b5c8-41db-954a-a56e755c0942" />


## Example 3. Double Logarithmic Tree Method ([SM-09](https://github.com/NTHU-SCOPELAB/parallel-algorithm-code/tree/main/SM09_Finding_Maximum))
- Input: `A[1...n]` (array)
- Output: `max(A[1], A[2], ..., A[n])`
- Model: ***CRCW*** PRAM of \\( n = 2^k \\) processors  
<img width="479" alt="image" src="https://github.com/user-attachments/assets/f7ec6ed8-f8a8-4589-8818-eab3f69f36dc" />


## Example 4. Finding the Convex Hull ([SM-05](https://github.com/NTHU-SCOPELAB/parallel-algorithm-code/tree/main/SM05_Convex_Hull))
- Input: a set \\( S = \{ v_1, v_2, \ldots , v_n \} \\)
- Output: the convex hull \\( CH(S) \\) of \\( S \\) (clockwise)
- Model: ***CREW*** PRAM of \\( n \\) processors  
<img width="430" alt="image" src="https://github.com/user-attachments/assets/c2509a89-0536-4b49-8177-1010f0e69295" />
- 精神:
  1. 先將所有點按照x座標排序
  2. 將所有點分成兩組，左邊的點和右邊的點
  3. 對左邊的點和右邊的點分別計算出上半部和下半部的convex hull
  4. 最後再合併兩邊的convex hull (?)
- 合併convex hull的方法:
  1. 對於左邊的點，使用parallel m-way search，找出最上面的點。
     - 對於右邊的點，使用parallel m-way search，找出左邊的點對應的最上面的點。

