class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next; // Store next node
    current.next = prev; // Reverse the pointer
    prev = current; // Move prev forward
    current = nextNode; // Move current forward
  }

  return prev; // New head of the reversed list
}
