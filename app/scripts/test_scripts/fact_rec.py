from yaml import safe_load
Items = {'key1': '1', 'key2': '[1,2,3,4]', 'key3': '[5,6,7,8]', 'key4': '9'}
out = []
n = 4
for i in range(n):
    d = {}
    for k in Items:
        msg = Items[k][1:-1].split(',')
        if type(msg) == list:
            d[k] = msg[k][i]
        else:
            d[k] = msg[k]
    out.append(d)
print(out)