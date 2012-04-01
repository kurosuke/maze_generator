#!/bin/sh

NO=1
while [ $NO != 20 ]
do
	echo $NO
	
	echo "var matrix = [];" > maze_${NO}.js
	echo "var n = 0;" >> maze_${NO}.js

	python maze_generate.py 80 | grep -v '^$' | sed -e 's/^/matrix[n++] = "/' -e 's/$/";/' >> htdocs/js/maze_${NO}.js
	NO=`expr $NO + 1`
done
