import time

from typing import List
from decimal import Decimal


def main() -> None:
    start: Decimal = Decimal(time.time())
    # Main code

    counter: int = 0
    bst: BST = None
    while True:
        try:
            user_input: str = input('Enter your instruction:\n')
            instructions: List[str] = user_input.split(' ')
            operation: str = instructions[0]

            if operation == 'end':
                break
            elif operation == 'print':
                if bst is None:
                    print('The BST is inexistent.\n')
                    continue
                else:
                    print(f'{bst}\n')
                    continue

            valid_ops: List[str] = ['i', 'd', 'print', 'end']
            if len(instructions) > 1:
                value: int = int(instructions[1])

            if bst is None and operation in valid_ops:
                bst: BST = BST(value)
                print(f'BST has been created with {value} at the root node.\n')
            elif operation == 'i':
                bst.insert(BST(value))
                print(
                    f'Node {value} has been inserted at position {bst.find_node(value).get_position()}.\n'
                )
            elif operation == 'd':
                print(
                    f'Node with {value} at position {bst.find_node(value).get_position()} has been deleted.\n'
                )
                if bst.get_nodes() is None and bst.get_value() == value:
                    bst = None
                else:
                    bst.delete(value)
            else:
                print('''
Invalid operation. Please enter a valid one:

- Insertion (i x): insert a value x into the bst. Example:
i 200

- Deletion (d x): delete value x from the bst, if present. Example:
d 150

- Print (print): print the bst.

- End (end): end the program.''')
        except EOFError as e:
            break

    # End of main code
    end: Decimal = Decimal(time.time())
    execution_time: Decimal = Decimal(round((end - start) * 1000, 3))
    print(
        f'\nThis program took {execution_time} miliseconds ({execution_time / 1000} seconds) to run.'
    )


class BST(object):
    def __init__(self, value: int) -> None:
        self.value: int = value
        self.position: int = 1

    def __str__(self) -> str:
        if hasattr(self, 'right') and hasattr(self, 'left'):
            return f'{self.value} ({self.left.__str__()}) ({self.right.__str__()})'
        elif hasattr(self, 'right'):
            return f'{self.value} () ({self.right.__str__()})'
        elif hasattr(self, 'left'):
            return f'{self.value} ({self.left.__str__()}) ()'
        else:
            return f'{self.value}'

    def insert(self, node: 'BST') -> None:
        if node.get_value() > self.value:
            if hasattr(self, 'right'):
                self.right.insert(node)
            else:
                node.__set_parent(self)
                self.right: 'BST' = node
        else:
            if hasattr(self, 'left'):
                self.left.insert(node)
            else:
                node.__set_parent(self)
                self.left: 'BST' = node

    def delete(self, value: int = None) -> bool:
        if value is None:
            value = self.value
        if value == self.value:
            if hasattr(self, 'left') and hasattr(self, 'right'):
                successor: 'BST' = self.right.find_smallest_node()
                self.value = successor.get_value()
                successor.delete()
            elif hasattr(self, 'left'):
                self.reassign_node(self.left)
                return True
            elif hasattr(self, 'right'):
                self.reassign_node(self.right)
                return True
            elif hasattr(self, 'parent'):
                if self.position % 2 == 1:
                    del self.parent.right
                    return True
                else:
                    del self.parent.left
                    return True
            else:
                return False
        else:
            if self.find_node(value) != None:
                return self.find_node(value).delete()
            else:
                return None

    def find_node(self, value: int) -> 'BST':
        if self.value == value:
            return self
        elif value > self.value:
            if hasattr(self, 'right'):
                return self.right.find_node(value)
            else:
                return None
        elif value < self.value:
            if hasattr(self, 'left'):
                return self.left.find_node(value)
            else:
                return None
        else:
            return None

    def find_smallest_node(self) -> 'BST':
        if hasattr(self, 'left'):
            return self.left.find_smallest_node()
        else:
            return self

    def get_value(self) -> int:
        return self.value

    def get_position(self) -> int:
        return self.position

    def get_parent(self) -> 'BST':
        if hasattr(self, 'parent'):
            return self.parent
        else:
            return None

    def __set_parent(self, parent: 'BST') -> None:
        self.parent: 'BST' = parent
        if (self.value > parent.get_value()):
            self.position = 2 * parent.get_position() + 1
        else:
            self.position = 2 * parent.get_position()

    def reassign_node(self, other: 'BST') -> 'BST':
        self.value = other.get_value()
        if hasattr(other, 'left') and hasattr(other, 'right'):
            [self.right, self.left] = other.get_nodes()
            return self
        elif hasattr(other, 'left'):
            self.left = other.get_nodes()[0]
            if hasattr(self, 'right'):
                del self.right
            return self
        elif hasattr(other, 'right'):
            self.right = other.get_nodes()[1]
            if hasattr(self, 'left'):
                del self.left
            return self
        elif hasattr(self, 'right') and hasattr(self, 'left'):
            del self.right, self.left
            return self
        elif hasattr(self, 'right'):
            del self.right
            return self
        elif hasattr(self, 'left'):
            del self.left
            return self

    def get_nodes(self) -> List['BST']:
        if hasattr(self, 'right') and hasattr(self, 'left'):
            return [self.left, self.right]
        elif hasattr(self, 'left'):
            return [self.left, None]
        elif hasattr(self, 'right'):
            return [None, self.right]
        else:
            return None


main()
