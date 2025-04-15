# Doubling (pointer-jumping)

- 精神: 在一系列有dependency的資料中，將每個下一個iteration的目標指向parent的目標，以此達成快速cover大量資料的目的。

## Example 1. Parallel prefix on rooted directed tree ([SM-02](https://github.com/NTHU-SCOPELAB/parallel-algorithm-code/tree/main/SM02_Parallel_Prefix_On_A_Rooted_Directed_Tree))
- Input: `P[1...n]`, `W[1...n]` (linked list, but in the form of array)
- Output: Update each entry in `W` such that it is equal to the sum of the weights of nodes on the path from i to the root of its tree. `W[1...n]` (array)
- Model: ***CREW*** PRAM of \\( n \\) processors  
<img width="400" alt="image" src="https://github.com/user-attachments/assets/db66b04f-902c-430b-9d60-e5e9214fb258" />


## Example 2. Prefix sums (prefix computation) ([SM-03](https://github.com/NTHU-SCOPELAB/parallel-algorithm-code/tree/main/SM03_Prefix_Sums))
- Input: `X[1...n]` (array)
- Output: `S[1...n]`, where `S[i] = X[1] + X[2] + ... + X[i]`
- Model: ***EREW*** PRAM of \\( n \\) processors  
<img width="513" alt="image" src="https://github.com/user-attachments/assets/c0b401bc-c950-4f5d-8e35-77b46497b90f" />
