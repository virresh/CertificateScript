#!/usr/bin/env python3
file = open("name.txt","r")
x = file.readlines()
i=0
for k in x:
	if i==0:
		print("[",end='')
	print("\""+k[:-1]+"\"",end='')
	if i==len(x)-1:
		print("]")
	else:
		print(", ",end='')
	i+=1