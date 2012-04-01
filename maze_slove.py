#!/usr/bin/python
# -*- coding: utf-8 -*-
#
# 行き止まりまで進んで迷路を解く
#
#	$Id: maze_slove.py 74 2008-09-23 14:21:26Z hato $
#

import sys

stdin = sys.stdin
stdout = sys.stdout
reload(sys)
sys.setdefaultencoding('utf-8')
sys.stdin = stdin
sys.stdout = stdout

#
# 迷路本体
#
class Maze:

	# 初期化
	def __init__(self, filename):

		# 迷路ファイル読み込み
		try: f = open(filename, "r")
		except:
			print "can't find data file " + filename
			sys.exit(1)

		self.cols = []
		for line in f:
			line = line.strip("\n")
			if len(line) != 0:
				cols = []
				for ncol in range(len(line)):
					cols.append(line[ncol])
				self.cols.append(cols)
		
		# ファイルを閉じる
		f.close()

		# 迷路の幅と高さを保存(width, height)
		self.size = (len(self.cols[0]), len(self.cols))

		# ゴールの位置を設定(x, y)
		#self.cols[self.size[1]-2][self.size[0]-1] = 'G'
		self.cols[self.size[1]-2][self.size[0]-1] = 'G'

		# ゴールしたか判定
		self.isGoal = False

		# トーレス用方向
		self.vector = (0, 0)

	#
	# 迷路突破
	#
	def slove(self):
		vector = (0, 0)

		# 開始座標は(1, 1)
		self.cols[1][0] = 'S'

		#self.walk(1, self.size[1]-2, vector)
		self.walk(1, 1, vector)

	def walk(self, x, y, vector):

		# カレント座標を求める
		curx = x + vector[0]
		cury = y + vector[1]

		# ゴール判定
		if self.cols[cury][curx] == 'G':
			# ゴールについた！
			self.isGoal = True
			print 'GOAL!'
			self.output(curx, cury)
			return
		
		if self.canGo(curx, cury) == False:
			# この座標がいけない場所なら返る
			return

		# 足跡をつける
		self.cols[cury][curx] = 'x'

		#
		# 上下左右に進めるかを判定
		#
		# 左
		vector = (-1, 0)
		self.walk(curx, cury, vector)

		# 上
		vector = (0, -1)
		self.walk(curx, cury, vector)

		# 右
		vector = (1, 0)
		self.walk(curx, cury, vector)

		# 下
		vector = (0, 1)
		self.walk(curx, cury, vector)

		# 足跡を消す
		self.cols[cury][curx] = '.'
			
	# 当たり判定
	def canGo(self, x, y):
		if self.isGoal:
			return False

		# ワールド座標範囲の判定
		if x < 0 or y < 0:
			return False

		if x+1 > self.size[0] or y > self.size[1] :
			return False

		if y > 1 and self.cols[y][x] != ' ':
			return False
			
		# 壁と来た道判定
		if self.cols[y][x] == ' ':
			return True
		else:
			return False

	# 迷路出力
	def output(self, curx, cury):
		for nline in range(len(self.cols)):
			print ''.join(self.cols[nline])


##################################################
#
# MAIN
#

filename = sys.argv[1]	# 迷路ファイル
maze = Maze(filename)

# 座標(1,1)から座標(width-1,height-1)を目指す
maze.slove()
