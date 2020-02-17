    // Counter for array comparsions
      // Definition of bubble sort
        async function bubbleSort(arr, start, end) {
            if(start >= end) {
                return;
            }
            var count = 0;
            for(var i = 0; i < end-1; i++) {
                for(var j = 0; j < end-i-1; j++) {
                    if(arr[j] >= arr[j+1]) {
                        states[j] = 1;

                        // Call to swap function
                        await swap(arr, j, j+1);
                        states[j+1] = 0;
                        count = count + 1;
                        counter.innerHTML = count;
                    }
                    states[j] = 2;
                }
            }

            return arr;
        }
        // Definition of swap function
        async function swap(arr, a, b) {
            let speed = 200/float(document.getElementById("speed_size").value);
            let t = arr[a];
            await sleep(speed);
            arr[a] = arr[b];
            arr[b] = t;
        }

// Insertion sort

async function insertion_sort(arr){
    var count = 0;
    for(var i = 1; i < (arr.length); i++){
        val = arr[i];
        hole = i;
        while((hole > 0) && (arr[hole - 1] > val)){
            states[hole] = 1;
            arr[hole] = arr[hole - 1];
            await sleep((9));
            hole = hole - 1;
            states[hole + 1] = 0;
            count = count + 1;
            counter.innerHTML = count;

        }
        arr[hole] = val;
        states[hole] = 2;
    }
}
        // Definition of sleep function
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }


//Merge Sort Algorithm
var count = 0;
 async function merge(start, la, lr){
    var i = start;
    var j = la + 1;
    var k = 0;

    var results = [];
    while ((i<= la) && (j <= lr)){
        if (values[i] < values[j]){
            results[k] = values[i];
            i = i + 1;
            k = k + 1;
            count = count + 1;
            }
        else{
            results[k] = values[j];
            j = j + 1;
            k = k + 1;
            count = count + 1;
     }
     }
     while(i <= la){
     results[k] = values[i];
     i = i + 1;
     k = k + 1;
     }

    while(j <= lr){
     results[k] = values[j];
     j = j + 1;
     k = k + 1;
     }
   //await set_array(results);
   counter.innerHTML = count;
   for(let n = 0; n < results.length; n++) {
     await set_array(start, results[n]);
     start++;
   }
}

 async function do_merge_sort(l, r) {
  if(l < r) {
    let m = l + Math.floor((r - l) / 2);
    await do_merge_sort(l, m);
    await do_merge_sort(m + 1, r);
    await merge(l, m, r);
  }
}

async function merge_sort(arr) {
  await do_merge_sort(0, arr.length - 1);
}

 async function set_array(i, value){
        states[i] = 1;
        await sleep(50);
        values[i] = value;
        states[i] = 2;

    }
async function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            states[i] = 1;
            await swap(items, i, j); //sawpping two elements
            count = count+1;
            states[i] = 2;
            i++;
            j--;
        }
    }
    counter.innerHTML = count;
    return i;
}
async function do_quick_sort(arr, start, end){
    if (start < end){
        pIndex = await partition(arr, start,end);
        await do_quick_sort(arr, start, pIndex-1);
        await do_quick_sort(arr, pIndex, end);
    }
}
async function quick_sort(arr){
//    var arr = [5,8,6,3,10,7,4]
    var start = 0;
    var end = arr.length;
    await do_quick_sort(arr, start, end-1);
}
