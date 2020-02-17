import asyncio
class Sorting(object):

    @staticmethod
    async def bubbleSort(nlist):
        counter = 0
        for passnum in range(len(nlist)-1, 0, -1):
            for i in range(passnum):
                if nlist[i] > nlist[i+1]:
                    temp = nlist[i]
                    nlist[i] = nlist[i+1]
                    nlist[i+1] = temp
                    counter +=1
            await asyncio.sleep(0.00001)
        return nlist, counter
        #return nlist

    def merge_sort(self, x):
        if len(x) < 2:
            return x
        result = []
        mid = int(len(x) / 2)
        y = self.merge_sort(x[:mid])
        z = self.merge_sort(x[mid:])
        while (len(y) > 0) and (len(z) > 0):
            if y[0] > z[0]:
                result.append(z[0])
                z.pop(0)
            else:
                result.append(y[0])
                y.pop(0)
        result += y
        result += z
        return result

