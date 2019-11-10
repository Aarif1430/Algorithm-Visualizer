
def partition(array, start, end):
    pIndex = array[end]
    for i in range(start, end):
        if pIndex >= array[i]:
            array[i],array[start] = array[start],array[i]
            start = start + 1
    array[start],array[end] = array[end],array[start]
    return start

def quickSort(array, start, end):
    if start < end:
        pIndex = partition(array, start, end)
        quickSort(array, start, pIndex-1)
        quickSort(array, pIndex+1,end)


if __name__ == '__main__':
    arr = [5,8,6,3,9,1,10,7,4,2]
    quickSort(arr, 0, len(arr)-1)
    print(arr)
