**Find Closest Value in a Binary Search Tree (BST)**

This repository contains an efficient algorithm to find the value in a Binary Search Tree (BST) that is closest to a given target value. The algorithm leverages the properties of BSTs to minimize the number of comparisons, providing an average time complexity of O(log N).

Overview:

The findClosestValueInBst function traverses the BST to find the node whose value is closest to the given target. It operates iteratively, avoiding recursion to maintain a constant space complexity of O(1).

Function Signature

	function findClosestValueInBst(tree, target) {
	  // Implementation here...
	}
 
Parameters: 

tree: The root node of the Binary Search Tree (BST).

target: The target value to which the closest value in the tree is being sought.

Returns:

The function returns the value in the BST that is closest to the provided target.

Complexity:

Time Complexity:

Average case: O(log N) for balanced BSTs, where N is the number of nodes.

Worst case: O(N) for unbalanced BSTs (like a linked list).

Space Complexity: O(1) (no additional space other than the input).

Usage:

To use the findClosestValueInBst function, you can import it and create an instance of the BST class to represent your binary tree.
	
	// Import the function
	const { findClosestValueInBst } = require('./findClosestValueInBst');
	
	// Define a BST structure
	class BST {
	  constructor(value) {
	    this.value = value;
	    this.left = null;
	    this.right = null;
	  }
	}
	
	// Create a sample BST
	const root = new BST(10);
	root.left = new BST(5);
	root.right = new BST(15);
	root.left.left = new BST(2);
	root.left.right = new BST(5);
	root.right.left = new BST(13);
	root.right.right = new BST(22);
	root.left.left.left = new BST(1);
	
	// Target value
	const target = 12;
	
	// Find the closest value in the BST to the target
	const closestValue = findClosestValueInBst(root, target);
	
	console.log(closestValue); // Output: 13
 
Algorithm Explanation:

1. Initialize the closest value as the root node's value.
2. Traverse the tree iteratively:
3. At each step, update the closest value if the current node is closer to the target.
4. Move left or right based on whether the current node’s value is smaller or larger than the target.
5. The process continues until you’ve traversed the relevant parts of the tree, returning the closest value.
   
Examples:

Example 1:

Given the following tree:

	
	
	       10
	      /  \
	     5   15
	    / \  / \
	   2  5 13 22
	  /
	 1
	
Target: 12

Output: 13

Example 2:

Given the following tree:


	
	       10
	      /  \
	     5   15
	    / \  / \
	   2  6 13 22
	  /
	 1
Target: 6

Output: 6

Contributing: 
If you’d like to contribute to this project, feel free to submit a pull request or report issues.

License: 
This project is licensed under the MIT License.
