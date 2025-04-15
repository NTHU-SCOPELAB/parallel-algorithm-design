# Pipelining

- 精神: 把工作分成多個階段(前面不能影響後面)，每個階段可以同時進行而不會互相影響。

## Example 1. Insert a sorted sequence into a 2-3 tree ([SM-07](https://github.com/NTHU-SCOPELAB/parallel-algorithm-code/blob/main/SM07_Inserting_A_Sorted_Sequence_Into_A_2_3_Tree))
- Input: a 2-3 tree T holding n items \\( a_1 < a_2 < \ldots < a_n \\) and a sorted sequence \\(  b_1 < b_2 < \ldots < b_k \\)  
- Output: a 2-3 tree obtained by inserting the items \\( b_1, b_2, \ldots , b_k \\) into T.
- Model: ***CREW*** PRAM of \\( k \\) processors
<img width="470" alt="image" src="https://github.com/user-attachments/assets/bdef7ce4-fee7-4a92-ac7c-6c50727a5dbe" />
- 精神:
  - 一開始大家都平行快速找到插入的位置(不用考慮有chain的問題)，並建好leaf放數字。
  - 因為2-3 tree最多三個child，所以如果超過的話，chain的中位數連到parent，chain的長度就會減半。
  - 重複幾次，可以上去的就上去，上不去的就再切兩半(chain的中位數上去)。
  - 每一層都會有chain，中間層的節點也有可能(因為下面的insertion)，但沒有影響，帶著小孩一起去找新家就好。
