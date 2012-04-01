var matrix = [];
var n = 0;
matrix[n++] = "+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+";
matrix[n++] = "|   |   |       |               |           |       |           |       |           |                 |       |     |   |   |                       |     |     |";
matrix[n++] = "+ +-+ +-+-+ +-+-+-+-+-+ +-+-+-+-+ +-+-+-+-+-+ +-+-+-+ + +-+ +-+-+-+ + +-+-+ + +-+ + +-+-+-+-+ +-+-+-+-+-+-+ +-+-+ +-+ +-+ +-+-+-+ +-+ + +-+-+ +-+-+ + +-+-+-+ +-+";
matrix[n++] = "|                                   |               | |   |         | |     |   | |   |         |   |     |                   |   |   | |   |     | |           |";
matrix[n++] = "+-+-+ + +-+ +-+-+-+-+-+-+-+-+ + +-+-+ + +-+-+ + +-+-+-+ +-+ + +-+-+ +-+-+ + + +-+-+ +-+-+ +-+-+-+ +-+ +-+-+ +-+ +-+-+-+-+ +-+-+ +-+-+-+-+ +-+ +-+-+ +-+ +-+ +-+-+";
matrix[n++] = "|     | |                 |   |     | |   |   | |   |   |   | |           | |     |   |           |   |     |     |       |     |   |             | |   |   |   |";
matrix[n++] = "+-+-+-+-+-+ +-+ +-+-+-+ +-+-+-+-+ +-+ +-+-+-+-+-+ +-+-+-+ +-+-+ + +-+-+-+-+-+ +-+-+-+-+ +-+ +-+ +-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+ +-+-+-+-+-+-+ +-+-+-+-+ +-+ +-+";
matrix[n++] = "|   |       |       |   |         |           |   |           | |         |     |         |   |                         |     |         |               |     | |";
matrix[n++] = "+ +-+-+ + +-+-+-+-+-+ + +-+-+ + +-+ +-+-+ +-+-+ +-+-+ +-+-+-+-+ +-+-+-+-+-+ +-+-+ +-+-+-+-+-+-+ +-+-+ +-+ +-+-+ +-+-+-+-+-+ +-+-+ + +-+-+ + +-+-+-+-+-+-+ + +-+ +";
matrix[n++] = "|       |   |       | | |     |     |   |       |   |         |           |     |   |       |   |       |   |             |       |       |   |         | |     |";
matrix[n++] = "+-+-+-+-+ +-+-+-+ +-+-+-+-+ +-+-+-+-+ + +-+-+-+-+ +-+ +-+-+-+ +-+-+-+-+-+-+-+ +-+ + + +-+-+-+ +-+-+ + +-+-+-+ +-+ + +-+-+-+-+ +-+ +-+ + +-+-+-+-+-+ + +-+-+ +-+-+";
matrix[n++] = "|           |             |       |   | |         |         |   |                 | |         |     | |       |   | |   |     |     | |       |   | |       |   |";
matrix[n++] = "+ +-+-+-+ +-+ +-+-+-+ +-+ + + + +-+ +-+-+ + +-+-+-+-+ + +-+-+ +-+-+-+-+ +-+ +-+-+-+ +-+-+ +-+-+ +-+-+-+ +-+-+-+ +-+-+ +-+ +-+-+-+-+-+ + +-+-+-+ +-+-+-+ + +-+-+ +";
matrix[n++] = "| |           |     |   | | | |           |     |     |     | |           |       |   |       |   |       |     |       |           | | |               |   |   |";
matrix[n++] = "+-+ + +-+-+-+-+ +-+-+ +-+-+-+-+-+ +-+-+ + +-+-+-+-+ +-+-+-+-+-+-+-+ + + +-+ +-+ +-+-+-+ +-+-+ +-+-+-+-+ +-+-+-+-+ +-+ +-+-+ +-+-+ +-+-+-+-+-+ +-+-+ +-+-+-+-+-+ +";
matrix[n++] = "|   |           |       |           |   |         |             |   | |   |   |       |     |     |   |   |   |   |     |   |               |     |       |     |";
matrix[n++] = "+-+-+ +-+-+ +-+-+ +-+ +-+ + + +-+-+-+ +-+ +-+-+ +-+-+ +-+-+-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+ +-+-+-+-+ +-+-+-+ +-+-+-+ +-+-+-+-+-+-+-+-+-+ +-+-+-+ +-+-+-+ +-+ +-+-+";
matrix[n++] = "|       |       | |   |   | |   |     |   |   |   |       |               |       |   |   |         |     |     |               |         |         |           |";
matrix[n++] = "+-+-+-+-+ +-+ +-+-+-+-+ +-+ + +-+ +-+-+-+-+ +-+ +-+ +-+ +-+ +-+-+-+ + +-+-+ +-+-+-+ +-+-+-+-+ +-+-+-+ +-+-+ + +-+-+-+-+-+ +-+-+-+-+-+-+ +-+ +-+ +-+-+-+-+-+ +-+ +";
matrix[n++] = "|       |   | |     |   |   | |     |               |   |         | |                       |           |   | |     |           |       |   |     |           | |";
matrix[n++] = "+-+ + +-+-+ +-+ + +-+ +-+ +-+-+-+-+-+-+-+-+-+-+ +-+-+-+-+ +-+-+-+-+-+ +-+ +-+ +-+-+-+-+ +-+-+ +-+ + +-+-+ +-+-+ +-+-+ + + + + +-+-+ + +-+ +-+ +-+-+-+-+-+-+ +-+-+";
matrix[n++] = "|   |           | |   |   |   |   |     |       |     |   |   |     |   |   |   |     |   |   |   |   |               | | | |   |   |       |         |   |     |";
matrix[n++] = "+-+-+ +-+ +-+-+-+-+-+-+-+-+ +-+ +-+-+ +-+ + +-+-+-+ +-+ +-+ +-+-+ +-+ +-+-+-+ +-+-+ +-+-+-+-+ + +-+ +-+ +-+ +-+ +-+ +-+-+-+-+ +-+-+-+ + +-+-+ +-+ +-+-+ +-+ +-+ +";
matrix[n++] = "|   | |   |       |                     | |   |       |   |             |                 |   | |   |     |   | |     |     |         |     | |     |         | |";
matrix[n++] = "+ +-+ + +-+ +-+ +-+ +-+-+-+-+-+ +-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+ +-+ + +-+-+-+-+ +-+ +-+ +-+-+ +-+ +-+-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+ +-+-+-+-+-+ +-+-+-+-+ +-+ +-+";
matrix[n++] = "|     | |     |     |                     |           |         |   |         |   |   | |     |         |                         |           |       |   |     |";
matrix[n++] = "+ +-+-+-+-+ +-+-+-+ +-+ +-+ + +-+-+-+-+-+-+ +-+-+-+-+-+ +-+-+ +-+-+ +-+-+-+ +-+-+-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+-+ + +-+-+-+-+-+-+-+ + +-+-+-+-+-+-+-+-+-+ +";
matrix[n++] = "|   |       |     |   |   | |     |                   |   |   |   | |                       |       |   |           |   | |         |   | |   |           |   | |";
matrix[n++] = "+ +-+-+-+-+-+ + +-+-+-+ +-+-+ +-+-+ + + +-+-+ +-+-+ +-+-+ +-+-+ +-+-+-+-+ + +-+-+-+-+-+-+ +-+ +-+ +-+ +-+ +-+-+-+-+-+ +-+-+-+-+ +-+-+ +-+-+-+-+-+-+ +-+-+-+ +-+-+";
matrix[n++] = "|   |         |   |   |   |   |     | |   |   |       |   |               | |     |     | |   |     |     |   |                   |       |   |         |       |";
matrix[n++] = "+ +-+-+-+ +-+-+ +-+ +-+ +-+-+-+ +-+-+ + +-+-+ + +-+-+-+ +-+ +-+-+ +-+-+-+ +-+ + +-+-+ +-+-+ +-+ +-+-+ + +-+ +-+ +-+-+-+ + +-+ +-+-+ + +-+-+ +-+-+-+ +-+-+ + + + +";
matrix[n++] = "|           |   |         |   |   |   | |     |       | |       | |         | |     |   |   |         |     |   |       |   |       |     |               | | | |";
matrix[n++] = "+-+-+-+-+-+-+ +-+-+-+ +-+-+ +-+-+-+-+-+-+-+ +-+-+ +-+-+-+ +-+ +-+-+ +-+ +-+-+-+-+ +-+ +-+ +-+-+ + +-+-+ +-+-+ +-+-+ + +-+ +-+-+-+ +-+-+ +-+-+ +-+-+-+-+-+-+-+ + +";
matrix[n++] = "|     |           |     |         |           |       |     |   |     |                   |   | |     |     |     | |   | |           |     |       |         | |";
matrix[n++] = "+ + +-+-+-+ +-+ +-+ + +-+ +-+-+ +-+-+ +-+-+ +-+-+ +-+-+ +-+-+-+-+-+-+-+-+-+ + +-+-+ +-+ +-+ +-+-+ +-+-+-+-+-+ +-+-+-+-+-+-+ +-+-+ +-+-+ + +-+ +-+-+-+-+-+ +-+-+-+";
matrix[n++] = "| |         |   |   |       |             |     |   |   |     |       |     | |     |   |         |         | |               |   |   | |             |       | |";
matrix[n++] = "+-+ +-+-+ +-+-+-+-+-+ +-+-+-+ +-+-+-+ +-+-+-+-+-+-+-+-+-+ + +-+-+ +-+-+ +-+-+-+ +-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+-+ +-+-+ +-+ +-+-+-+ +-+-+-+-+ +-+ +-+-+-+ +-+-+ +";
matrix[n++] = "|   |     |                 |     |   |     |         |   |     |           |     |             |           |   | |     |       |   |   |       |     |       | |";
matrix[n++] = "+ +-+-+-+-+-+ + +-+-+-+-+ +-+-+-+-+ +-+-+ +-+ +-+-+-+-+-+ +-+ +-+ +-+ +-+ +-+-+-+-+-+ +-+ +-+ +-+-+ +-+-+-+-+ +-+-+ +-+-+-+ +-+-+ +-+ +-+-+-+-+-+-+ +-+ + +-+-+ +";
matrix[n++] = "|           | |       |       |             |     |       |         | |         |     |     |         |     |           |           |             |   | | |     |";
matrix[n++] = "+-+ +-+-+-+-+-+ +-+-+-+-+ +-+-+-+-+ + +-+ +-+ +-+-+ +-+ +-+-+ + + +-+-+ +-+ +-+-+ + + +-+ +-+-+-+ +-+-+ +-+-+-+-+-+ +-+-+ + + +-+-+-+ +-+-+-+-+ +-+ +-+-+-+ +-+-+";
matrix[n++] = "|     |             |     |     |   |   |             |     | | |     | |   |     | | |         |                       | | |       |     |         |         | |";
matrix[n++] = "+ +-+-+ +-+-+-+-+-+-+-+ +-+ + +-+ + +-+-+ + + +-+-+-+-+ +-+-+-+-+-+ +-+-+-+-+-+ +-+-+-+-+ + +-+-+-+ +-+ + +-+-+-+ +-+-+-+-+-+ +-+-+-+-+-+-+-+ + +-+-+-+ + + +-+ +";
matrix[n++] = "|     |             |     | |     |     | | |   |     | |     |           |     |     |   |     |   |   | |             |       |             |         | |     |";
matrix[n++] = "+-+-+-+-+-+ + +-+ +-+ +-+-+-+-+ +-+-+-+-+-+-+ +-+ + +-+-+-+ +-+-+ +-+-+-+-+-+-+-+-+ +-+-+-+ +-+-+-+-+ +-+-+ +-+ +-+ +-+-+-+ +-+-+-+-+ +-+ + + +-+-+-+-+-+-+ +-+ +";
matrix[n++] = "|           | |     |   |   |               | |   |   |         |     |         |       |   |   |   |     |   |   | |         |       |   | |         |     |   |";
matrix[n++] = "+-+ +-+ +-+ +-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+ +-+-+-+-+ +-+-+-+ + +-+-+ + +-+ +-+ +-+ +-+-+ +-+-+-+-+-+-+-+ +-+ +-+-+-+ +-+ +-+-+-+-+-+-+ +-+-+-+-+ +";
matrix[n++] = "|   |     |         |   |   |             |             |   |               |       |   |     |       | |         |     |   |       |             |     |       |";
matrix[n++] = "+ +-+-+ + +-+ +-+-+-+ +-+ +-+-+-+-+-+ +-+-+ +-+ + +-+ +-+ +-+-+ +-+-+-+-+-+-+ +-+ +-+-+-+-+-+-+ +-+-+-+-+-+ + +-+-+-+-+-+ +-+-+-+ +-+ +-+-+ + + +-+-+ +-+-+-+ +-+";
matrix[n++] = "|   |   | |     |           |               |   |   | |           |     |   |   |             |   |         |     |             | |   |     | |     |   |     | |";
matrix[n++] = "+ +-+ +-+-+-+ +-+-+-+ + +-+-+-+ + +-+ + +-+-+-+-+ +-+-+ +-+-+-+ +-+ +-+-+ +-+-+-+-+-+ + + +-+-+ +-+ +-+-+ +-+-+-+ + +-+-+-+-+-+-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+-+ +";
matrix[n++] = "|   | |   |   |     | |         | |   |   |           |     |               |         | |     |       |         | |       |         |     |       |     |       |";
matrix[n++] = "+ +-+-+ +-+-+-+ +-+-+-+-+-+ +-+ +-+-+-+ +-+-+-+ +-+-+-+-+ +-+-+-+-+ +-+-+-+ +-+-+-+-+-+-+-+ +-+-+ +-+ +-+-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+ +-+-+ +-+-+-+ +-+-+-+-+ +";
matrix[n++] = "|         |             |   |   |             |     |   |       |       |   |     |               |     |         | |                 |   |               |     |";
matrix[n++] = "+ +-+-+-+-+ +-+-+ +-+ + + +-+ +-+-+-+ +-+-+ +-+-+ +-+ +-+-+ + +-+-+-+ +-+ +-+-+ +-+ + +-+-+ +-+-+-+ +-+-+ +-+-+-+-+-+-+-+ + +-+-+-+ + + +-+-+ + +-+-+-+-+-+ +-+ +";
matrix[n++] = "|         | |       | | |   | |           |     | |   |     |     |   |         |   |     |       |   |               |   |       | | |   |   | |         | |   |";
matrix[n++] = "+-+ +-+-+-+-+-+ +-+-+-+-+ +-+-+-+ + +-+-+-+-+ +-+-+ +-+ +-+-+ + + +-+-+-+-+ +-+ +-+-+-+-+-+-+-+-+-+-+-+-+-+-+ +-+-+-+ +-+-+-+-+ +-+-+-+-+-+ +-+-+-+-+-+ +-+-+-+ +";
matrix[n++] = "|         |         |   |   |     |     |   |   |         |   | |     |     |   |   |   |                       |   | |                     |             |     |";
matrix[n++] = "+-+ + +-+-+ + + +-+-+ +-+ +-+ + +-+ +-+-+ +-+-+-+-+-+ +-+-+ +-+-+-+-+-+-+ +-+-+-+ +-+ +-+ +-+-+-+ +-+-+-+ +-+-+-+ +-+-+-+-+-+-+ +-+-+-+ +-+-+-+ +-+ +-+ +-+ +-+-+";
matrix[n++] = "|   |   |   | |   |     | |   | |             |           |     |     |           |         |     |           |   |             |                 | |       |   |";
matrix[n++] = "+ +-+-+-+-+ +-+ +-+-+ +-+-+ +-+-+-+-+ +-+-+ +-+ +-+-+-+ +-+-+-+ + + +-+-+-+-+ +-+-+-+-+ +-+-+-+-+-+-+ + +-+-+-+ +-+ +-+-+-+ +-+-+-+-+ +-+-+ +-+-+-+-+-+ +-+-+-+ +";
matrix[n++] = "| |           |       |             | |       |   |           | | |                 |     |           |                 |   |       |   |         |           | |";
matrix[n++] = "+-+ + +-+-+ + +-+ + +-+ + +-+-+-+-+-+-+ +-+-+-+ +-+ +-+ +-+-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+-+ + + + +-+-+-+-+ +-+-+-+-+ +-+-+-+-+-+ +-+ +-+-+-+ + +-+-+-+ +-+-+-+ +";
matrix[n++] = "|   |     | | |   |   | |     |       |   |       | |           |     |               |     | | |   |         |       |   |   |     | |       | |         |     |";
matrix[n++] = "+-+ + + +-+-+-+ +-+ +-+-+-+ +-+ + +-+-+-+-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+ +-+-+ +-+-+-+-+-+ +-+ +-+ +-+ +-+-+ +-+-+-+ + + +-+ +-+-+ +-+-+ +-+ +-+-+ +-+-+ +-+ + +-+";
matrix[n++] = "|   | |   |     |   |           |   |         |         |         |         |     |     |   | |   |     |     |     | |       |       |   |     |   |       |   |";
matrix[n++] = "+-+-+-+-+-+-+ +-+-+-+-+ +-+ +-+-+-+-+ +-+-+-+-+-+-+ + +-+ + +-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+ +-+-+ +-+-+-+-+ +-+ +-+-+-+ +-+ +-+-+-+-+-+-+-+ +-+-+";
matrix[n++] = "|       |       |       |   |       |               | |   | |     |   |             |     |       |     |   |                     |     |         |             |";
matrix[n++] = "+ +-+ +-+-+-+ +-+-+-+ +-+ +-+-+ + +-+-+-+ +-+ + + +-+-+ +-+-+ +-+-+-+-+ +-+-+-+-+ +-+ +-+-+-+-+ +-+ +-+-+-+-+-+-+-+ +-+ +-+-+ +-+-+-+-+-+-+-+-+-+-+ +-+ +-+ + + +";
matrix[n++] = "| |           |         | |     |     |     | | |     |   |     |   |   |     |               |         |   |     |   |   |   |               |   |   |   | | | |";
matrix[n++] = "+-+ + +-+-+ +-+-+-+-+ +-+-+-+-+ + + +-+ + +-+-+-+ + +-+-+-+-+ +-+ +-+-+-+-+ +-+ +-+-+-+-+-+ +-+ +-+-+ +-+ +-+ +-+-+ +-+-+-+-+-+ +-+-+-+ +-+-+-+ +-+ +-+-+ +-+-+ +";
matrix[n++] = "|   |     |         |           | | |   |       | | |       |           |     | |     |         |         |       |   |       |     |     |   |         |     | |";
matrix[n++] = "+ +-+ + +-+ +-+ + +-+ +-+-+ +-+-+-+-+-+-+ +-+ +-+-+ +-+-+ + +-+ + +-+-+-+-+ +-+-+ +-+-+ +-+-+-+ +-+ +-+-+-+-+ +-+-+ +-+-+ +-+-+-+-+ +-+-+-+ +-+ + +-+-+ +-+ +-+ +";
matrix[n++] = "|   | | |     | |       |           |       |     | |     | |   |             |         |       |                 |   |         |       |       | |     |     | |";
matrix[n++] = "+-+-+-+-+-+ +-+-+ + +-+-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+ +-+-+ +-+-+-+-+ +-+-+ +-+-+ +-+-+-+ + +-+-+ + +-+-+-+ +-+-+-+-+-+-+-+-+ +-+ +-+-+-+-+ +-+-+-+-+-+-+ +-+-+ +";
matrix[n++] = "|         | |     |   |     |   | |         |             | |     |   |                 | | |     |   |               |         |         |   |   |       |     |";
matrix[n++] = "+ +-+-+-+-+-+-+-+-+-+-+-+ +-+ +-+-+-+ +-+ +-+-+-+ +-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+ +-+-+-+-+-+ +-+-+-+-+-+ + +-+ +-+-+-+-+ +-+ +-+ +-+-+-+-+-+ +";
matrix[n++] = "|               |             |     | |         |               |       |   |             |             |         |         |             | |               |   |";
matrix[n++] = "+-+ + +-+-+-+ +-+-+ +-+-+ + +-+ +-+-+-+-+ +-+ +-+-+-+ +-+ + +-+-+-+ +-+-+ +-+ +-+ +-+-+ +-+-+-+-+-+-+ +-+-+ +-+-+-+-+ +-+ + + +-+-+-+-+-+-+-+-+-+-+-+ +-+-+ +-+-+";
matrix[n++] = "|   | |         |       | | |     |       |             | |     |               |     | |             |     |           | | | |       |     |     |       |   | |";
matrix[n++] = "+-+-+-+-+ +-+-+-+-+-+-+-+ +-+ +-+-+-+-+-+-+ + +-+ +-+ +-+ +-+-+-+-+-+-+ +-+-+ +-+ +-+-+-+-+-+ +-+ +-+-+-+-+-+-+ +-+-+ +-+-+-+-+ + + +-+-+ +-+-+ +-+-+ +-+-+-+-+ +";
matrix[n++] = "|   |       |       |                   |   | |   |     |   |       |   |       | |       |   |     |   |         |             | |       |     |     |       | |";
matrix[n++] = "+ +-+ +-+ +-+ +-+ +-+ + + +-+ +-+ +-+-+ + +-+ +-+-+-+-+-+-+-+-+-+ +-+-+-+ + +-+-+-+-+ +-+-+-+-+ +-+-+ +-+-+-+ + +-+-+-+ + +-+ +-+-+-+-+-+ +-+ +-+ +-+-+ +-+ +-+ +";
matrix[n++] = "|       |   |   |   | | |   | |       | | |     |               |         | |     |             |   |   |     |       | | |         |     |   |           |     |";
matrix[n++] = "+-+ +-+-+ +-+-+-+ +-+-+-+-+-+-+ +-+ +-+-+-+ + +-+-+-+ +-+-+ +-+-+-+-+ +-+-+-+-+ +-+ + +-+ +-+-+-+ +-+ +-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+-+-+ +-+-+-+ +-+ +-+-+-+-+";
matrix[n++] = "|     |         |                 |     |   | |         |       |     |         |   | |   |               |             |   |   |             |       |   |     |";
matrix[n++] = "+-+ +-+-+-+-+-+-+-+ + +-+ +-+-+ +-+ +-+-+ +-+-+-+ +-+ +-+-+-+ +-+ +-+ +-+-+ +-+-+-+-+-+-+ + + +-+-+-+ + +-+-+-+ +-+ +-+-+ +-+ +-+ + +-+-+ +-+-+ + +-+-+-+-+-+-+ +";
matrix[n++] = "|   |         |   | |   |     |   | |     |         |       |     |   |   |     |       | | |   |   | |   |     |   |   |         |     |       | |     |       |";
matrix[n++] = "+ +-+-+-+-+ +-+ +-+ +-+-+ + + +-+-+-+ +-+-+-+ +-+-+-+-+-+-+-+-+ +-+-+-+ +-+ +-+-+ +-+-+-+-+-+ +-+ +-+-+-+-+ +-+-+ +-+ +-+ +-+-+-+-+-+ +-+-+-+ +-+-+-+ +-+-+-+-+ +";
matrix[n++] = "|                 | |   | | |     |     |   |           |     |     |   |     |           |                 |   | |       |     |           |                 | |";
matrix[n++] = "+ + +-+ +-+-+-+ +-+-+ +-+ +-+-+ +-+-+ +-+ +-+-+-+ + +-+ +-+ +-+-+-+ + +-+-+ +-+-+-+-+-+ +-+-+ + +-+ +-+-+-+-+ +-+-+-+ +-+-+-+ +-+ +-+ +-+-+-+-+-+ +-+-+-+-+ +-+ +";
matrix[n++] = "| |   |   |               |     |         |       |   | |         | |                   |     | |         |     |   |   |         |     |         |             |";
matrix[n++] = "+-+-+-+-+-+ + +-+ +-+-+ +-+ + +-+ + + +-+-+-+-+ + +-+-+-+ +-+ +-+-+-+ +-+-+ + +-+ +-+-+-+-+-+ +-+-+-+ + +-+ +-+-+ +-+ +-+-+ + +-+-+-+-+-+ + +-+-+-+-+-+-+ +-+-+-+";
matrix[n++] = "|       |   |   |   |     | |   | | |       |   |     |   |   |         |   | |   |         |   |     |                 |   |         |   | |             |     |";
matrix[n++] = "+-+-+ +-+-+-+-+-+ +-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+ +-+-+-+-+ +-+-+-+ +-+-+-+-+-+ +-+ +-+-+ + +-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+ +-+-+-+-+-+ +-+-+ +-+-+-+ +-+-+ + +-+";
matrix[n++] = "|             |     |         | |       |               |         |     |           |     |     |         |       |     |   |           |           | |   | |   |";
matrix[n++] = "+-+-+-+-+-+ +-+ +-+-+-+-+-+ +-+-+-+ +-+-+-+-+ +-+ +-+-+-+ + +-+-+-+-+-+-+-+-+-+-+ +-+-+-+-+-+ +-+-+-+-+ +-+ +-+ +-+ +-+-+-+-+-+ +-+-+-+-+-+-+-+ + +-+-+ +-+-+ +-+";
matrix[n++] = "|       |         |             |           | |         | |         |   |   |             |   |   |     |     |   |     |     |           |     |             | |";
matrix[n++] = "+-+-+ +-+-+-+-+ +-+-+ + +-+-+-+-+-+ +-+ +-+-+-+ +-+-+-+-+-+ +-+-+ +-+ +-+ +-+ +-+-+-+ +-+-+ +-+ +-+ +-+-+-+-+-+-+-+ +-+-+-+ +-+ +-+ + +-+-+-+-+-+-+ + + +-+-+-+ +";
matrix[n++] = "|       |         |   |         |     |   |         |       |     |     |           |     | |         |     |         |         |   | |     |       | |         |";
matrix[n++] = "+-+-+ +-+-+-+-+ +-+-+-+ +-+ +-+-+ +-+-+-+-+-+-+-+ +-+-+ + +-+ +-+-+-+ +-+ + +-+ + + +-+ +-+-+-+-+-+ +-+ +-+-+-+-+ +-+-+-+-+-+ +-+-+ +-+-+ +-+-+-+-+-+ +-+-+-+-+-+";
matrix[n++] = "|     |               | |     |             |           |   |       |   | | |   | |   |         |               |         |       |     |   |                   |";
matrix[n++] = "+-+ +-+-+-+-+ + +-+-+-+-+ +-+-+-+ + +-+-+ +-+-+ +-+-+-+ +-+-+-+ +-+-+ +-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+-+-+-+-+-+ +-+-+ +-+-+-+-+ + + +-+-+-+-+-+-+-+-+-+-+ +";
matrix[n++] = "|     |       |                   | |         |       |     |   |       |       |         |               |       |       |     |     | |                   |   |";
matrix[n++] = "+-+ +-+-+-+-+-+ +-+-+ +-+-+-+-+ +-+-+-+ + + +-+ + +-+-+-+-+-+ +-+-+ +-+-+ +-+-+-+-+ +-+-+-+ +-+ +-+ + +-+-+ + + +-+-+-+ +-+ +-+-+ +-+-+-+-+ +-+-+ + +-+-+-+-+-+ +";
matrix[n++] = "|         |         |   |             | | |   | | |   |         |         |     |             | |   |       | |   |         |   |               | |           | |";
matrix[n++] = "+ +-+ +-+-+-+-+-+ +-+-+ + +-+ +-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+ +-+ + +-+ +-+-+ +-+-+ + + +-+-+-+ +-+-+-+ + +-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+ +-+ +-+-+-+ +-+ + +-+";
matrix[n++] = "| |       |           | | |   |               |   |               | |     |       | | | |   |   |       |   |         |                       |   |     |   | | |";
matrix[n++] = "+-+ + + +-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+-+ +-+-+ +-+-+ +-+-+-+-+ +-+-+-+-+-+-+ +-+-+-+ +-+ +-+-+-+ +-+ + + + +-+-+-+-+-+ +-+ +-+-+ +-+-+-+ + +-+-+-+-+ +-+-+-+-+ +";
matrix[n++] = "|   | |         |     |         |     |             |         | |       |         |             |   | | | | |           |     |     |     | |             |     |";
matrix[n++] = "+ +-+ +-+ +-+ +-+-+ +-+-+ +-+-+ +-+ +-+-+-+ +-+-+-+ + + +-+-+-+-+-+ +-+-+-+-+ +-+-+ +-+-+ + + +-+ +-+-+-+-+-+-+-+-+-+ + +-+ +-+-+-+-+-+-+-+-+-+ +-+-+ + +-+ +-+ +";
matrix[n++] = "| |     |   |           |     | |   |           |   | |   |               |     |     |   | | |             |   |     | |                   |   |     |       | |";
matrix[n++] = "+-+-+ +-+-+-+ +-+-+-+ + +-+ +-+-+ +-+-+ +-+-+ +-+ +-+-+ + +-+ +-+-+-+-+ +-+-+ +-+-+-+-+-+ +-+-+ +-+ +-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+ +";
matrix[n++] = "|       |       |     | |           |   |       |   |   |   | |   |       |         |   | |     |   |           |               |     |   |           |   |     |";
matrix[n++] = "+-+ +-+ +-+ + +-+-+ +-+-+-+ +-+ +-+-+-+-+ +-+ +-+-+-+-+-+-+-+-+ +-+ +-+ +-+ +-+-+ +-+ +-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+ + +-+-+-+-+ + +-+-+-+-+-+ + +-+-+ +-+ + + +";
matrix[n++] = "|     | |   |   |         | |     |         |   |                 |   |   |   |                   |           |   |   |       |   |             | |   |   | | | |";
matrix[n++] = "+-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+ +-+-+ +-+ +-+-+ +-+-+ +-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+ +-+ +-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+ + +-+-+ +";
matrix[n++] = "|     |       |   |   |         | |     |         | |     |             |   |                     |     |       |           |   |             |       | | |     |";
matrix[n++] = "+ +-+-+-+ +-+-+ +-+-+-+ +-+-+-+-+-+ +-+-+-+-+-+ +-+-+-+-+-+ + +-+-+-+ +-+-+ +-+ +-+ + +-+-+-+-+ +-+-+-+-+ +-+ +-+-+-+ + +-+-+ +-+ +-+ + + +-+ + + + +-+-+-+ + + +";
matrix[n++] = "|     |               |           |           |           | | |       |       |   | |   |     |   |         | |     | |   |         | | |   | | | |     |   | | |";
matrix[n++] = "+-+ +-+ +-+-+ +-+ + +-+-+ +-+-+ +-+-+ +-+-+ +-+-+-+ +-+-+-+-+-+-+ +-+-+-+ +-+-+-+-+ +-+-+-+ +-+-+-+-+ + +-+-+-+ + +-+-+ +-+-+ + +-+-+-+ +-+-+-+-+ +-+-+-+-+-+-+ +";
matrix[n++] = "|           | |   |   |       |   |     |     |           |           |       |               |       |       | |   |         |       |       |         |     | |";
matrix[n++] = "+-+-+ + +-+-+-+-+-+ + +-+-+-+-+ +-+-+-+ +-+-+ +-+ + +-+ +-+ + +-+-+-+ + + + +-+ + +-+-+ + + + +-+-+-+-+ +-+-+-+ + +-+ + +-+-+-+ +-+-+-+-+ + +-+ +-+-+-+-+ +-+ + +";
matrix[n++] = "|     | |       |   | |     |       |       |   | |   |   | |       | | | | |   | |     | | | |             |   | |   | |     |       |   | |     |         | | |";
matrix[n++] = "+-+ +-+-+-+-+ +-+ +-+-+ +-+-+-+ +-+-+-+-+ +-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+-+-+ +-+ +-+ +-+-+-+ +-+ +-+-+ +-+ +-+ +-+-+-+ +-+ +-+-+ +-+-+-+";
matrix[n++] = "|     |                                 | |     |         |       |               |       |           |     |               |     | |             |     | |     |";
matrix[n++] = "+ +-+-+-+-+ +-+-+-+-+ +-+-+ +-+ +-+-+ +-+-+ +-+-+-+-+ + +-+ + +-+-+ +-+ +-+-+ + +-+-+-+ +-+-+ +-+-+ +-+ +-+-+-+ + + + +-+-+-+ + +-+-+-+-+-+-+-+ +-+ +-+-+-+-+-+ +";
matrix[n++] = "|   |         |           | |       |   |             |     | |     |       | |         |         | |     |   | | | | |     | |   |                 |         | |";
matrix[n++] = "+ +-+ +-+ + +-+ + +-+-+ +-+-+ +-+ +-+ +-+-+-+-+ + + +-+-+ +-+-+-+ +-+-+-+-+-+-+-+ +-+ +-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+ +-+ + +-+ +-+-+ +-+ +";
matrix[n++] = "|   | |   | |   |   |       |   | |         |   | |   |     |   | |           |   |             |           |       |       |     |       |   | |     |         |";
matrix[n++] = "+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ + +-+-+-+-+ +-+-+-+ +-+-+-+ +-+-+-+-+ +-+-+-+ +-+ +-+ +-+-+ +-+-+ +-+-+-+-+-+ + +-+-+ +-+-+-+ +-+ +-+-+ + +-+-+-+ +-+-+-+-+-+ +";
matrix[n++] = "|                 |     |         | |         |     | |   |         |     |     |   |   |   | |                 |               |   |   | | |   |   |           |";
matrix[n++] = "+ +-+-+ +-+-+ +-+-+-+ +-+ +-+-+-+-+-+-+ + +-+-+-+ +-+-+ +-+-+-+ +-+-+ +-+-+ +-+-+ +-+-+-+ +-+-+-+-+-+ + + +-+ +-+ +-+-+ +-+-+-+-+-+-+ +-+-+-+ +-+-+-+-+-+-+-+ +-+";
matrix[n++] = "|     |     |   |     |         |       |   |   |           |       |     | |                 |       | |   | |   |           |         |             |         |";
matrix[n++] = "+ +-+-+-+-+-+-+ + + +-+ + +-+ +-+ +-+ +-+ +-+ +-+ +-+-+ +-+-+-+ +-+-+ + +-+-+-+-+-+ +-+-+ + +-+-+ +-+ +-+-+-+ +-+-+-+-+-+-+ +-+-+ +-+ +-+-+-+ + + +-+-+-+ +-+-+ +";
matrix[n++] = "|             | | |     | |   |     |   | |     | |     |             | |       |       | |     |   | |     |         |     |     |         | | |     |       | |";
matrix[n++] = "+-+-+-+-+ +-+-+-+ + +-+-+-+ +-+ +-+ +-+-+-+-+ +-+ +-+-+-+-+-+-+-+ +-+ +-+-+ +-+-+ +-+-+-+ +-+-+-+-+-+-+-+ +-+-+ +-+-+-+-+ +-+-+-+-+-+ +-+-+-+ +-+ +-+-+ +-+ +-+-+";
matrix[n++] = "|   |         |   |   |         |   |           |             |     |   |             |   |             |           |     |                     |       |       |";
matrix[n++] = "+ +-+-+ +-+-+-+-+-+-+ +-+-+ + +-+-+-+-+ +-+-+-+-+ +-+-+-+-+ + +-+ +-+ +-+-+-+ +-+-+ +-+-+-+ + + + +-+-+-+ +-+-+-+-+-+-+ +-+-+-+ +-+-+ +-+-+-+ +-+-+-+ +-+ +-+-+ +";
matrix[n++] = "|     |         |         | |             |   |       |     | |     |   |       |           | | |         |           |           |     |   |       |   |   |   |";
matrix[n++] = "+ +-+-+-+-+ +-+-+ +-+-+ +-+-+-+-+-+-+ +-+-+ +-+-+ +-+-+-+ +-+-+ + +-+-+-+-+ +-+-+-+ + +-+-+-+-+ +-+ +-+-+-+-+ +-+-+-+-+ +-+ + +-+-+ + +-+ +-+ +-+ +-+-+-+-+ +-+ +";
matrix[n++] = "|     |               |   |               |           |     |   | |         |       | |         |                   |     | | |     | |       |         |   |   |";
matrix[n++] = "+-+ +-+ +-+-+-+ + +-+ +-+-+-+-+-+-+-+ +-+-+-+-+-+-+ +-+ +-+-+ +-+-+-+-+-+-+-+ +-+ +-+-+-+-+ +-+-+-+ + +-+-+-+ + + +-+-+-+-+-+-+-+ +-+-+-+-+-+-+ + +-+-+-+-+-+-+ +";
matrix[n++] = "|     | |       |   |         |   |   |               |   |   |         |   |   |     |           | |   |     | |   |     |     | |     |       | |           | |";
matrix[n++] = "+ +-+-+-+-+-+-+ +-+-+-+ +-+ +-+ +-+-+-+ +-+-+-+-+ + +-+-+ + +-+ +-+ +-+-+ +-+-+-+-+-+-+ +-+-+ + +-+-+-+-+ + +-+-+-+-+-+ +-+ +-+-+-+ +-+-+-+ +-+ +-+ +-+ +-+-+-+-+";
matrix[n++] = "|         |       |     |                   |     |     | |     |     |     |           |   | |   |       |   |     |     |           |       | |     |       | |";
matrix[n++] = "+-+ + +-+-+-+ +-+-+ +-+-+ +-+-+-+-+ +-+-+-+ +-+-+-+-+ +-+-+-+ +-+-+ +-+ +-+-+ + +-+ +-+-+ +-+ +-+ +-+-+ +-+-+-+ +-+-+ + +-+-+-+ +-+-+-+-+-+ +-+-+-+-+-+-+ +-+-+ +";
matrix[n++] = "|   |   |     |     |   |       |         | |   |           |   |           | |   | |       | |   |         |         | |       |   |   |           |           |";
matrix[n++] = "+ + +-+-+ +-+-+ +-+-+ +-+-+ +-+-+-+ +-+-+-+-+ +-+-+-+-+-+-+-+ +-+ +-+ +-+-+-+-+-+-+-+ +-+ +-+-+-+-+-+ +-+-+-+-+ +-+-+-+-+-+ +-+-+ +-+ +-+-+-+-+-+ +-+-+ + + +-+ +";
matrix[n++] = "| |     |   |             | |         |               |       |   |   |     |           |               |         |       |               |             | | |   |";
matrix[n++] = "+-+ +-+-+ +-+-+ +-+-+-+-+-+-+ +-+ +-+-+-+-+ +-+ +-+-+-+-+-+ +-+-+-+-+-+ +-+-+ +-+-+ + +-+-+ + +-+-+ +-+-+-+-+-+ + +-+-+ +-+-+-+ + +-+-+ +-+-+ +-+ +-+-+-+-+-+ + +";
matrix[n++] = "|     |       |     |       | |       |       |   |           |   |     |     |     | |     | |                 | |       |     | |           |     |         | |";
matrix[n++] = "+ + +-+-+-+ +-+-+-+-+ +-+-+-+-+-+ +-+-+ +-+ +-+ +-+-+-+-+ + +-+ +-+-+ +-+-+-+-+-+ + +-+ +-+-+-+-+-+ + +-+-+ + +-+-+ +-+-+ +-+ +-+ +-+-+-+-+-+-+-+ +-+-+-+ +-+ + +";
matrix[n++] = "| |         |     |             |       |     |     |     |     |   |       |     | |           |   |   |   |       |     |     |     |           |       |   | |";
matrix[n++] = "+-+-+-+ +-+-+ +-+-+-+-+ +-+-+ +-+ +-+ +-+-+ +-+-+ +-+-+-+-+ +-+-+ +-+ +-+ +-+ + +-+-+ +-+-+ +-+-+-+-+ +-+-+-+-+-+ +-+-+-+-+-+-+-+ +-+-+-+-+ +-+-+ +-+-+-+-+-+-+ +";
matrix[n++] = "|     |   |           | |       | |       | |     |       |   |     | |     | |     |     |     |       |           |         |     |           | |         |   |";
matrix[n++] = "+-+ +-+ +-+-+-+-+-+ +-+ +-+-+ +-+-+-+ +-+-+-+-+ +-+-+ +-+-+ +-+-+ +-+-+ +-+-+-+ +-+-+-+-+-+-+-+-+-+ +-+-+ +-+ +-+-+-+-+ + +-+-+ +-+ +-+-+ + +-+-+-+ +-+-+ +-+-+-+";
matrix[n++] = "|               |   |     |       |     |               |           |             |           |     |     |         |   |       |   |     |   |         |       |";
matrix[n++] = "+-+ + +-+-+ +-+-+ +-+ +-+-+-+ +-+-+ +-+-+-+-+-+-+-+ + +-+-+-+-+ + +-+-+-+ + +-+-+-+-+ +-+-+-+-+ +-+-+-+-+-+-+ +-+-+-+-+ +-+-+ +-+ +-+-+-+-+ +-+-+-+ + +-+-+ +-+ +";
matrix[n++] = "|   |     |         | |                           | |   |       |         | |                     |                   | |     |     |               |   |   |   |";
matrix[n++] = "+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+";
