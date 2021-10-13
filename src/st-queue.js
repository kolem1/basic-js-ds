const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.queue = new ListNode();
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    let currentNode = this.queue;
    while(currentNode.value) {
      if(!currentNode.next) {
        currentNode.next = new ListNode()
      }
      currentNode = currentNode.next
    }
    currentNode.value = value;
  }

  dequeue() {
    if(!this.queue.value) return null;
    const value = this.queue.value;
    this.queue = this.queue.next;
    return value;
  }

}
