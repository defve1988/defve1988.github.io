

def get_situtation_nums(path,F):
	with open(path, "r",encoding="utf-8") as f:
		s = 25
		while True:
			line = f.readline()
			if not line or s<0:
				break
			if line.strip() =="SITUATION IN NUMBERS" or s<25:
				if line.strip()!='':
					F.write(line)
				s -=1
	

if __name__ == '__main__':
    import os
    in_path = r'../report_text'
    out_path = r'../reports'
    F = open(os.path.join(out_path,'situtation_num.txt'),'w',encoding="utf-8")
    files = os.listdir(in_path)
    files.sort()
    print(files)
    for i in files:
    	if i[0]!='.':
	    	print(i)
	    	F.write(i+'\n')
	    	get_situtation_nums(os.path.join(in_path,i),F)
	    	F.write('\n')
    F.close()