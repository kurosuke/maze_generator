# mage generator by python

- cluster algorithm
- 1 way solution
- markup enter and exit yourself



ex) generate 10x10 matrix maze

```
% python maze_generate.py 10 | tee maze.txt
+-+-+-+-+-+-+-+-+-+-+
| |   |       |     |
+ + + + +-+ +-+ +-+-+
|   | |   | |       |
+-+ +-+-+ +-+-+-+ +-+
|   |     |   |     |
+ + + +-+-+ +-+ +-+ +
| |     |       |   |
+-+-+ + +-+-+-+ +-+ +
| | | |   |       | |
+ + + +-+-+ +-+ +-+-+
|       |   |       |
+ + + + + + +-+-+-+ +
| | | | | |   |   | |
+-+ +-+ +-+-+ + +-+-+
|   |     |       | |
+ +-+-+ + + +-+-+ + +
| |     | | | |     |
+-+-+ +-+ +-+ + + + +
|       |       | | |
+-+-+-+-+-+-+-+-+-+-+
```


ex) slove 10x10 matrix maze

```
% python maze_slove.py maze.txt
GOAL!
+-+-+-+-+-+-+-+-+-+-+
Sx|   |       |     |
+x+ + + +-+ +-+ +-+-+
|xxx| |   | |       |
+-+x+-+-+ +-+-+-+ +-+
|  x|     |   |     |
+ +x+ +-+-+ +-+ +-+ +
| |xxx  |       |   |
+-+-+x+ +-+-+-+ +-+ +
| | |x|   |       | |
+ + +x+-+-+ +-+ +-+-+
|    xxx|   |       |
+ + + +x+ + +-+-+-+ +
| | | |x| |   |   | |
+-+ +-+x+-+-+ + +-+-+
|   |  xxx|       | |
+ +-+-+ +x+ +-+-+ + +
| |     |x| | |xxxxx|
+-+-+ +-+x+-+ +x+ +x+
|       |xxxxxxx| |xG
+-+-+-+-+-+-+-+-+-+-+
```
