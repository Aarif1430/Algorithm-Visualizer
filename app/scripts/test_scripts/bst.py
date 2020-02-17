class TreeNode(object):
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def get_new_node(data):
    return TreeNode(data)

def Insert(node, data):
    if node is None:
        node = get_new_node(data)
    elif data <= node.data:
        node.left = Insert(node.left, data)
    else:
        node.right = Insert(node.right, data)
    return node

def find_min(node):
    current = node
    count1, count2 =0,0
    
    if node.left is None:
        return node.data
    return find_min(node.left)


if __name__ == '__main__':
    node = TreeNode(2)
    node = Insert(node, 3)
    node = Insert(node, 4)
    node = Insert(node, 5)
    node = Insert(node, 1)
    print(find_min(node))
