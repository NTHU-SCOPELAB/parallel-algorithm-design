# Cost Saving Techniques

- 平行計算當中，可能會因為平行的特質導致浪費計算資源:
    - 重複計算
    - 閒置的處理器(最主要的原因)  
      <img width="667" alt="image" src="https://github.com/user-attachments/assets/85c441f5-f8b0-438f-827f-e7529c1b7d1f" />


- e.g. 在balanced binary tree 的例子中，每算完一層，就會多出一半的處理器閒置。

- 所以在這個章節中我們會整理一些可以減少這些閒置資源的技巧。

## 結論
### 1. Brent's Theorem
- 實際計算量\\( M << \text{cost} \\)  => 代表有很多閒置的處理器
- 可以用Brent's Theorem來減少閒置的處理器數量。

### 2. Accelerated Cascading
- 如果實際計算量\\( M \approx \text{cost} \\) => 代表處理器基本上都有用到
- 但這並不代表你的演算法是optimal的，你可能只是都把計算資源丟進水裡面而已。
- 可以用Accelerated Cascading來向optimal的演算法靠近。
