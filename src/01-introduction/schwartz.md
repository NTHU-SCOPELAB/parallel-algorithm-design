# Schartz's Classification

## 1. Important characteristics of Parallel Computers
- n: number of processors
- diameter: The maximum distance between any two processors in the network
- max degree: The maximum number of connections that a processor can have with other processors
- link complexity: The total number of links in the system

## 2. Types

#### a. Paracomputer (shared-memory computer)
<img width="355" alt="image" src="https://github.com/user-attachments/assets/36e7e7cb-e54d-4128-a760-73de577c4c01" />

- Cost of communication between processors is O(1).
- SIMD shared-memory computer is also called ***Parallel Random Access Machine (PRAM)***


#### b. Ultracomputer (processors with interconnection network)
<img width="365" alt="image" src="https://github.com/user-attachments/assets/b929a22a-fd82-4429-9f51-46681aba962a" />


##### i. Linear Processor Array
<img width="356" alt="image" src="https://github.com/user-attachments/assets/1424ebc8-67cc-4b59-b015-48b47527a48a" />
\[
\begin{align}
n &= 7 \\\\
\text{diameter} &= n - 1 \\\\
\text{max degree} &= 2 \\\\
\text{link complexity} &= n - 1 \\\\
\end{align}
\]

##### ii. Mesh-Connected Computer
<img width="209" alt="image" src="https://github.com/user-attachments/assets/8c622658-3f1b-423a-ac0b-18ffcccd62cb" />
\[
\begin{align}
n &= k^2 = 3^2 = 9 \\\\
\text{diameter} &= 2(k-1) \\\\
\text{max degree} &= 4 \\\\
\text{link complexity} &= (k-1) \cdot k \cdot 2 \\\\
\end{align}
\]

##### iii. Tree Machine
<img width="517" alt="image" src="https://github.com/user-attachments/assets/2cdbc929-753d-4e8f-a599-06b6364ff3dd" />
\[
\begin{align}
n &= 2^\text{level} - 1 = 2^4 - 1 = 15 \\\\
\text{diameter} &= \text{level} - 1 \\\\
\text{max degree} &= 3 \\\\
\text{link complexity} &= n - 1 = (2^\text{level} - 1) - 1 \\\\
\end{align}
\]

##### iv. Hypercube (k-dimensional cube)
<img width="490" alt="image" src="https://github.com/user-attachments/assets/7fb38aaa-48fe-4836-accc-d5c951d46331" />
\[
\begin{align}
n &= 2^k \\\\
\text{diameter} &= k \\\\
\text{max degree} &= k \\\\
\text{link_complexity}(k) &= 2\cdot \text{link_complexity}(k - 1) + 2^{k-1} \\\\
                          &= k \cdot 2^{k-1}
\end{align}
\]

##### v. Cube-connected Cycle network (each node of a k-cube is replayed by a cycle of k processors)
<img width="236" alt="image" src="https://github.com/user-attachments/assets/890d0d43-9bb6-4449-9402-291394a74f8c" />
\[
\begin{align}
n &= 2^{k} \cdot k \\\\
\text{diameter(k)}  &= k + (k-1) + \lfloor\frac{k}{2}\rfloor \\\\
\text{max degree} &= k \\\\
\text{link_complexity}(k) &= \frac{n \cdot \text{max degree} }{2} \\\\
                          &= \frac{(2^{k} \cdot k) \cdot k}{2} \\\\
                          &= 2^{k-1} \cdot k^2
\end{align}
\]

##### vi. Perfect Shuffle (k-dimensional)
<img width="452" alt="image" src="https://github.com/user-attachments/assets/8c4ab045-7b26-4b3b-87bd-5045df529264" />
\[
\begin{align}
n &= 2^{k} \\\\
\text{diameter} &= \text{does not exist} \\\\
\text{max degree} &= 2 \\\\
\text{link complexity} &= n = 2^{k} 
\end{align}
\]

##### vii. Shuffle Exchange Network (developed from perfect shuffle)
<img width="450" alt="image" src="https://github.com/user-attachments/assets/07921b81-947a-48f2-bb4d-9fa1baa3805d" />
\[
\begin{align}
n &= 2^{k} \\\\
\text{diameter} &= ? \\\\
\text{max degree} &= 4 \\\\
\text{link complexity} &= n = 2^{k} 
\end{align}
\]

##### viii. Single-channel broadcast communication system
<img width="504" alt="image" src="https://github.com/user-attachments/assets/47789708-6324-4a1f-85fe-67df3d2f4208" />
\[
\begin{align}
n &= 2^{k} \\\\
\text{diameter} &= 1 \\\\
\text{max degree} &= 1 \\\\
\text{link complexity} &= 1
\end{align}
\]

- Modern CPU architecture
##### ix. Mesh-connected computer with multiple broadcasting channels (k-dimensional)
<img width="474" alt="image" src="https://github.com/user-attachments/assets/90f74f56-22d0-49b7-83f6-5cbf1a382dc8" />
\[
\begin{align}
n &= 2^k = 3^2 = 9 \\\\
\text{diameter} &= \text{node -> row_bus -> node -> col_bus -> node} = 2 \\\\
\text{max degree} &= 4 \cdot \text{mesh link} + 2 \cdot \text{bus} = 6 \\\\
\text{link complexity} &= \text{mesh link} + 2\cdot k \cdot \text{bus} \\\\
                          &= (k \cdot (k-1) \cdot 2) + 2k            \\\\
                          &= 2k^2
\end{align}
\]

- Have separated channels for each column and row
