//1
//Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
//let num = [45,12,6,89,2,5]
//let target = 6
function mergeSort2 (unsortedArray2) {
    if (unsortedArray2.length <= 1) {
        return unsortedArray2;
    }
        const middle2 = Math.floor(unsortedArray2.length / 2);
        const left2 = unsortedArray2.slice(0, middle2);
        const right2 = unsortedArray2.slice(middle2);
        return merge2(
            mergeSort2(left2), mergeSort2(right2));
        }
        function merge2 (left2, right2) {
            let resultArray2 = [], leftIndex2 = 0, rightIndex2 = 0;
            while (leftIndex2 < left2.length && rightIndex2 < right2.length) {
                if (left2[leftIndex2] < right2[rightIndex2]) {
                  resultArray2.push(left2[leftIndex2]);
                  leftIndex2++;
                } else {
                    resultArray2.push(right2[rightIndex2]);
                    rightIndex2++; // move right array cursor
                  }
                }
                return resultArray2
                .concat(left2.slice(leftIndex2))
                .concat(right2.slice(rightIndex2));
      }
      const num2 = [45, 12, 6, 89, 2, 5];
      const sortedNum2 = mergeSort2(num2);
      console.log(sortedNum2)

      function binarySearch2(array, target) {
        let leftIndex = 0;
        let rightIndex = array.length - 1;
        while (leftIndex <= rightIndex) {
          const midIndex = Math.floor((leftIndex + rightIndex) / 2);
          if (array[midIndex] === target) {
            return midIndex;
          } else if (array[midIndex] < target) {
            leftIndex = midIndex + 1;
          } else {
            rightIndex = midIndex - 1;
          }
        }
        return null;
      }
      const target2 = 6;
      const targetIndex2 = binarySearch2(sortedNum2, target2);
      console.log(targetIndex2);

      //2
      function mergeSort (unsortedArray1) {
        if (unsortedArray1.length <= 1) {
            return unsortedArray1;
        }
            const middle = Math.floor(unsortedArray1.length / 2);
            const left = unsortedArray1.slice(0, middle);
            const right = unsortedArray1.slice(middle);
            return merge(
                mergeSort(left), mergeSort(right)
              );
            }
            function merge (left1, right1) {
                let resultArray1 = [], leftIndex1 = 0, rightIndex1 = 0;
                while (leftIndex1 < left1.length && rightIndex1 < right1.length) {
                    if (left1[leftIndex1] > right1[rightIndex1]) {
                      resultArray1.push(left1[leftIndex1]);
                      leftIndex1++;
                    } else {
                        resultArray1.push(right1[rightIndex1]);
                        rightIndex1++; // move right array cursor
                      }
                    }
                    return resultArray1
                    .concat(left1.slice(leftIndex1))
                    .concat(right1.slice(rightIndex1));
          }
          const num1 = [123,89,5,23,9,56];
          const sortedNum1 = mergeSort(num1);
          console.log(sortedNum1)

      //3

      function mergeSort22 (unsortedArray22) {
        if (unsortedArray22.length <= 1) {
            return unsortedArray22;
        }
            const middle22 = Math.floor(unsortedArray22.length / 2);
            const left22 = unsortedArray22.slice(0, middle22);
            const right22 = unsortedArray22.slice(middle22);
            return merge22(
                mergeSort22(left22), mergeSort22(right22));
            }
            function merge22 (left22, right22) {
                let resultArray22 = [], leftIndex22 = 0, rightIndex22 = 0;
                while (leftIndex22 < left22.length && rightIndex22 < right22.length) {
                    if (left22[leftIndex22] < right22[rightIndex22]) {
                      resultArray22.push(left22[leftIndex22]);
                      leftIndex22++;
                    } else {
                        resultArray22.push(right22[rightIndex22]);
                        rightIndex22++; // move right array cursor
                      }
                    }
                    return resultArray22
                    .concat(left22.slice(leftIndex22))
                    .concat(right22.slice(rightIndex22));
          }
          const num22 = [1,4,78,2,67,3];
          const sortedNum22 = mergeSort22(num22);
          console.log(sortedNum22)
    
          function binarySearch22(array2, target2) {
            let leftIndex22 = 0;
            let rightIndex2 = array2.length - 1;
            while (leftIndex22 <= rightIndex2) {
              const midIndex2 = Math.floor((leftIndex22 + rightIndex2) / 2);
              if (array2[midIndex2] === target2) {
                return midIndex2;
              } else if (array2[midIndex2] < target2) {
                leftIndex22 = midIndex2 + 1;
              } else {
                rightIndex2 = midIndex2 - 1;
              }
            }
            return -1;
          }
          const target22 = 34;
          const targetIndex22 = binarySearch22(sortedNum22, target22);
          console.log(targetIndex22);

