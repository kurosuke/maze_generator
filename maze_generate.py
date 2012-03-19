#!/usr/bin/python
# -*- coding: utf-8 -*-
#
# クラスター法による迷路生成
#
#	$Id: maze_generate.py 68 2008-09-17 09:46:52Z hato $
#

import sys
import time
import random

import sys
 
stdin = sys.stdin
stdout = sys.stdout
reload(sys)
sys.setdefaultencoding('utf-8')
sys.stdin = stdin
sys.stdout = stdout

#
# 迷路の部屋数
#
class Col:
	# 初期化
	def __init__(self, no):
		self.no = no			# 番号
		self.cluster = no		# クラスター番号（最終的に0)
		self.rightWall = True	# 右壁のあり・なし
		self.bottomWall = True	# 下壁のあり・なし
		if (no % width == width -1):
			# 右端
			self.rightColNo = -1
		else:
			self.rightColNo = no + 1	# 右側部屋数番号
		if (int(no / width) == width -1):
			# 下端
			self.bottomColNo = -1
		else:
			self.bottomColNo = no + width	# 下側部屋数番号

	# 印字
	def __repr__(self):
		head =  'no is ' + str(self.no)
		right = ' right-' + str(self.rightWall)
		bottom = ' bottom-' + str(self.bottomWall)
		return head + ' - ' + right + ':' + bottom

	# 右側の文字列化
	def valueRight(self, isPrintNum):
		wall = '|'
		if (self.rightWall == False):
			wall = ' '

		if (isPrintNum):
			return '%2d' % self.cluster + wall
		else:
			return '  ' + wall

	# 下側の文字列化
	def valueBottom(self):
		wall = '--+'
		if (self.bottomWall == False):
			wall = '  +'
		return wall

	# クラスター化
	def clustering(self, cluster1, cluster2):
		if (cluster1 < cluster2):
			# cluster2をcluster1で上書き
			src = cluster2
			dest = cluster1
		else:
			# cluster1をcluster2で上書き
			src = cluster1
			dest = cluster2

		# すべて部屋数について、クラスター化
		div = 0
		for n in range(maze.colnum):
			if (maze.cols[n].cluster == src):
				maze.cols[n].cluster = dest
				div = div - (src-dest)
		return div

	# 右壁の爆破
	def rightBomb(self, isMust):
		rightCol = maze.cols[self.rightColNo]
		div = 0
		if (self.cluster != rightCol.cluster and (isMust or isBomb())):
			if (self.rightColNo != - 1):
				# 右壁を爆破！
				self.rightWall = False

				# 同じクラスター番号にする
				div = self.clustering(self.cluster, rightCol.cluster)
		return div

	# 下壁の爆破
	def bottomBomb(self, isMust):
		bottomCol = maze.cols[self.bottomColNo]
		div = 0
		if (self.cluster != bottomCol.cluster and (isMust or isBomb())):
			if (self.bottomColNo != -1):
				# 下壁を爆破！
				self.bottomWall = False

				# 同じクラスター番号にする
				div = self.clustering(self.cluster, bottomCol.cluster)
		return div

#
# ランダム判定
#
def isBomb():
	r = random.Random()
	return int(r.random() * 2)
		
#
# 迷路本体
#
class Maze:

	# 初期化
	def __init__(self, width):
		self.width = width
		self.colnum = width*width

		self.cols = []
		self.total = 0	# 全ての部屋数を0で埋めたかを部屋数のSUMでチェック
		for colno in range(self.colnum):
			self.cols.append(Col(colno))
			self.total = self.total + colno

	#
	# 迷路作成 
	#

	# 斜めに破壊
	def slanting(self):
		for x in range(self.width):
			div = self.cols[x + x*self.width].rightBomb(1)
			self.total = self.total + div
			div = self.cols[x + x*self.width].bottomBomb(1)
			self.total = self.total + div
	
	# Zに破壊
	def z(self):
		for x in range(self.width):
			div = self.cols[x + 0*self.width].rightBomb(1)
			self.total = self.total + div

		for x in range(self.width):
			div = self.cols[(self.width-x-1) + (x)*self.width].rightBomb(1)
			self.total = self.total + div
			div = self.cols[(self.width-x-1) + x*self.width].bottomBomb(1)
			self.total = self.total + div
	
		for x in range(self.width):
			div = self.cols[x + (self.width-1)*self.width].rightBomb(1)
			self.total = self.total + div

	# ランダムに右壁と左壁を爆破
	def random(self):
		r = random.Random()
		while self.total > self.width:	# 最初の列に囲まれた飛び地があってもいいか
			target = int(r.random()*maze.colnum)
			if (isBomb()):
				div = self.cols[target].rightBomb(0)
			else:
				div = self.cols[target].bottomBomb(0)
			self.total = self.total + div
			
	# 迷路出力
	def output(self, isPrintNum):
		print '+--' * self.width + '+'
		for nrow in range(self.width):
		
			# 右壁
			str = '|'
			for nfield in range(self.width):
				col = self.cols[nrow*self.width + nfield]
				str = str + col.valueRight(isPrintNum)
			print str
		
			# 下壁
			str = '+'
			for nfield in range(self.width):
				col = self.cols[nrow*self.width + nfield]
				str = str + col.valueBottom()
			print str
		print ''

##################################################
#
# MAIN
#

width = int(sys.argv[1])	# 部屋数の直径

# 迷路の生成
maze = Maze(width)
#maze.slanting()	# 左上から右下に壁破壊
maze.z()	# zに壁破壊

maze.random()	# ランダムに壁破壊
maze.output(False)
