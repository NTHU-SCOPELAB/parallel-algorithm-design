# Tree Contraction

## 0. Problem Statement (SM-12)
- Input: `P[1...n]`, `SIB[1...n]`: an n-node rooted binary tree `T`.
- Output: `T` is contracted to a 3-node binary tree, by applying a series of rake operation.
- Model: ***EREW*** PRAM of n processors.

## 1. Rake Operation
- 精神: `u`自爆之後將父母`p(u)`一波帶走，然後讓兄弟姐妹`sib(u)`原地取代父母`p(u)`的位置(橘色的部份在這個過程中必需保持不被改動)。
  ![image](https://github.com/user-attachments/assets/8c5863bd-b19a-4492-be09-b5f5ceea5f3d)

- 平行方法:
  1. 用Euler Tour幫左到右(不含最左最右)的leaf node編號。
  2. 平行進行rake operation:
    - a. 每個left child的奇數編號的leaf node進行rake。
    - b. 每個left child的偶數編號的leaf node進行rake。
    - c. 每個right child的奇數編號的leaf node進行rake。
    - d. 每個right child的偶數編號的leaf node進行rake。
- 平行不會衡突的原因:
![image](https://github.com/user-attachments/assets/1a34690e-ca94-4713-9486-20e836a6625b)


