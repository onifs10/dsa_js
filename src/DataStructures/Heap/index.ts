import { Compare } from '../../types/index.type';
import type {MaxHeapFuncs} from './helpers';
import {createMaxHeap} from './helpers';


/**  max heap representation using arrays;
* asymptotic complexity:
*   - insert: O(nlogn)
*   - extractMax: O(nlogn)
* space complexity: O(n)
*
*/

class Heap<T>{
    constructor(private compare: Compare<T>, private array: Array<T> = []){
        // create max heap on intialization;
        this.heapify();
    }
    
    insert(value: T){
        this.array.push(value);
        this.heapify();
    }


    getArray(){
        return this.array;
    }

    extractMax(){
        if(this.array.length === 0){
            return undefined;
        }
        if(this.array.length === 1){
            return this.array.pop();
        }else{
            let max = this.array[0];
            let num = this.array.pop();
            if(num){
                this.array[0] = num;
            }
            this.heapify();
            return max;
        }
    }

    private heapify(){
        createMaxHeap(this.array, this.compare);
    }

    get size(){
        return this.array.length;
    }
    get max(){
        return this.array[0];
    }
}  

export default Heap;
