

def get_table_1(path,F):
    p=False
    with open(path, "r",encoding="utf-8") as f:
        while True:
            line = f.readline()
            if not line:
                break
            if line.strip()[0:5] =="Table" or p:
                p=True
                if line.strip()!='':
                    F.write(line)
                if line.strip()=='cases':
                    p=False
	

if __name__ == '__main__':
    import os
    in_path = r'../report_text'
    out_path = r'../reports'
    F = open(os.path.join(out_path,'table.txt'),'w',encoding="utf-8")
    files = os.listdir(in_path)
    files.sort()
    print(files)
    for i in files:
        if i[0]!='.':
        	print(i)
        	F.write(i+'\n')
        	get_table_1(os.path.join(in_path,i),F)
        	F.write('\n')
    F.close()