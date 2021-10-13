const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = addWithin(this._root, data);

    function addWithin(node, data) {
      if(!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if(data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return hasNodeWithData(this._root, data);

    function hasNodeWithData(node, data) {
      if(!node) return false;
      if(node.data === data) return true;

      if(data < node.data) {
        return hasNodeWithData(node.left, data);
      } else {
        return hasNodeWithData(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this._root, data);

    function findNode(node, data) {
      if(!node) return null;
      if(node.data === data) return node;

      if(data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this._root = removeNode(this._root, data);

    function removeNode(node, data) {
      if(!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if(data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while(minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node
      }
    }
  }

  min() {
    return findMin(this._root)

    function findMin(node) {
      if(!node) return null;

      if(!node.left) return node.data;

      return findMin(node.left);
    }
  }

  max() {
    return findMax(this._root);

    function findMax(node) {
      if(!node) return null;

      if(!node.right) return node.data;

      return findMax(node.right);
    }
  }

}