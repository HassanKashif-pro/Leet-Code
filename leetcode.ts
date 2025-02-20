function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let length = 0;
  let current = head;

  // Find the length of the linked list
  while (current) {
    length++;
    current = current.next;
  }

  let position = length - n; // Correct position calculation

  // If removing the head node
  if (position === 0) {
    return head.next;
  }

  current = head; // Reset current to head
  let prev: ListNode | null = null;
  let index = 0;

  // Move to the node before the target node
  while (current && index < position) {
    prev = current;
    current = current.next;
    index++;
  }

  // Remove the nth node from the end
  if (prev && current) {
    prev.next = current.next;
  }

  return head;
}
