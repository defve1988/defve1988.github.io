import os
import pandas as pd
path = r'C:\Users\au632148\Desktop\chuanlong\GitHub\COVID19\COVID-19-master\csse_covid_19_data\csse_covid_19_daily_reports'
files = os.listdir(path)

fout=open("out.csv","a")
for i in files:
	if i[0]!='.':
		print(i)
		f = open(os.path.join(path,i))
		for line in f:
			fout.write(line)
		fout.write('\n')
		f.close() # not really needed
fout.close()
