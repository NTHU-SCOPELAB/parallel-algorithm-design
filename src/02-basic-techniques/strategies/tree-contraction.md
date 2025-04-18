# Tree Contraction

## 0. Problem Statement (SM-12)
- Input: `P[1...n]`, `SIB[1...n]`: an n-node rooted binary tree `T`.
- Output: `T` is contracted to a 3-node binary tree, by applying a series of rake operation.
- Model: ***EREW*** PRAM of n processors.

## 1. Rake Operation
- 精神: 自爆之後將父母一波帶走，然後讓兄弟姐妹原地取代父母的位置。
- 平行方法:
  1. 用Euler Tour幫左到右(不含最左最右)的leaf node編號。
  2. 平行進行rake operation:
    - a. 每個left child的奇數編號的leaf node進行rake。
    - b. 每個left child的偶數編號的leaf node進行rake。
    - c. 每個right child的奇數編號的leaf node進行rake。
    - d. 每個right child的偶數編號的leaf node進行rake。
- 平行不會衡突的原因:


