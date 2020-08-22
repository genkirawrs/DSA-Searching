//Drill 1

function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    const range = array.slice(start,end).join(',');
    console.log("searching numbers: "+ range);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};


let list = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

//let testBinarySearch = binarySearch(list,8);

let list2 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

//let testBinarySearch = binarySearch(list,16);

//console.log(testBinarySearch);




//Drill 2

//see react-dsa-searching repo


//Drill 3

//I would use a divide and conquer search based on the different numbers that make up the dewey system
//I'd split the numbers up in to their respective representations and do a binary search based off of each to determin what section and subsections we need to traverse until we reach the point where we need to do a linear search based on the title


//Drill 4

// 14, 19, 15, 27, 25, 79, 90, 91, 89, 35

// 8, 6, 5, 7, 10, 9, 11


//Drill 5
/*
const binaryTree = require('./binaryTree');

let numberTree = new binaryTree();

numberTree.insert(25,25);
numberTree.insert(15,15);
numberTree.insert(50,50);
numberTree.insert(10,10);
numberTree.insert(24,24);
numberTree.insert(35,35);
numberTree.insert(70,70);
numberTree.insert(4,4);
numberTree.insert(12,12);
numberTree.insert(18,18);
numberTree.insert(31,31);
numberTree.insert(44,44);
numberTree.insert(66,66);
numberTree.insert(90,90);
numberTree.insert(22,22);

console.log(numberTree.find(10));


let inOrderSearch = numberTree.dfs_inorder();

console.log(inOrderSearch);

let preOrderSearch = numberTree.dfs_preorder();

console.log(preOrderSearch);

let postOrderSearch = numberTree.dfs_postorder();

console.log(postOrderSearch);
*/


//Drill 6
/*
const binaryTree = require('./binaryTree');

let enterpriseCommand = new binaryTree();

enterpriseCommand.insert('25','Picard');
enterpriseCommand.insert('15','Riker');
enterpriseCommand.insert('50','Data');
enterpriseCommand.insert('10','Worf');
enterpriseCommand.insert('24','LaForge');
enterpriseCommand.insert('70','Crusher');
enterpriseCommand.insert('1','Security Officer');
enterpriseCommand.insert('66','Selar');

let test = enterpriseCommand.dfs_breadth(enterpriseCommand);
console.log(test);
*/



//Drill 7

let prices = [128,97,121,123,98,97,105];
let bestBuyDay = 0;
let bestSellDay = 0;
let maxProfit = 0;

for(let i = 0; i < prices.length - 1; i++){

    buyDay = i;
    for(let j = i+1; j < prices.length; j++){
	sellDay = j;
	if(prices[j] - prices[i] > maxProfit){
	    bestBuyDay = i;
	    bestSellDay = j;
	    maxProfit = prices[j] - prices[i];
	}
    }

}

console.log("best buy price: "+prices[bestBuyDay]);
console.log("best sell price: "+prices[bestSellDay]);
console.log("max profie: "+maxProfit);












