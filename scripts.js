// Avg: Time -> O(logN) | Space -> O(1)
// Worst: Time -> O(N) | Space -> O(1)

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findClosestValueInBst(tree, target) {
  // Write your code here.
  let closest = tree.value;
  while (tree !== null) {
    if (Math.abs(closest - target) > Math.abs(tree.value - target)) {
      closest = tree.value;
    }
    if (tree.value < target) {
        tree = tree.right;
    } else if (tree.value > target) {
      tree = tree.left;
    } else {
      return tree.value;
    }
  }
  return closest;
}

