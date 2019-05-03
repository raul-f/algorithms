import time


from decimal import Decimal


def main() -> None:
    start: Decimal = Decimal(time.time())
    # Main code
    bst = BST(10)
    bst.insert(5)
    bst.insert(2)
    bst.insert(1)
    bst.insert(3)
    bst.insert(15)
    bst.insert(12)
    bst.insert(17)
    print(bst)
    # End of main code
    end: Decimal = Decimal(time.time())
    execution_time: Decimal = round((end - start) * 1000, 3)
    print(
        f'This program took {execution_time} miliseconds ({execution_time / 1000} seconds) to run.'
    )


class BST(object):
    def __init__(self, value: int, parent: 'BST' = None, position: int = 1) -> None:
        self.value: int = value
        self.position: int = position
        self.parent: 'BST' = parent

    def __str__(self):
        if hasattr(self, 'right') and hasattr(self, 'left'):
            return f'{self.value} ({self.left.__str__()}) ({self.right.__str__()})'
        elif hasattr(self, 'right'):
            return f'{self.value} () ({self.right.__str__()})'
        elif hasattr(self, 'left'):
            return f'{self.value} ({self.left.__str__()}) ()'
        else:
            return f'{self.value}'

    def insert(self, node: int):
        if node > self.value:
            if hasattr(self, 'right'):
                self.right.insert(node)
            else:
                self.right = BST(node, self, 2 * self.position + 1)
        else:
            if hasattr(self, 'left'):
                self.left.insert(node)
            else:
                self.left = BST(node, self, 2 * self.position)


main()
