import time


from decimal import Decimal


def main() -> None:
    start: Decimal = Decimal(time.time())
    # Main code
    bst = BST(10)
    bst.insert(5)
    # End of main code
    end: Decimal = Decimal(time.time())
    execution_time: Decimal = round((end - start) * 1000, 3)
    print(
        f'This program took {execution_time} miliseconds ({execution_time / 1000} seconds) to run.'
    )


class BST(object):
    def __init__(self, root: int) -> None:
        self.root: int = root

    def insert(self, node: int):
        if hasattr(self, 'root'):
            if node > self.root:
                if hasattr(self, 'right'):
                    self.right.insert(node)
                else:
                    self.right = BST(node)
            else:
                if hasattr(self, 'left'):
                    self.left.insert(node)
                else:
                    self.left = BST(node)

        else:
            self.root = node


main()
