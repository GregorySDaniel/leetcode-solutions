var inorderTraversal = function(root) {
    const res_inorder = [];

    function inorder(node){
        if(!node){
            return res_inorder;
        }
        inorder(node.left);
        res_inorder.push(node.val);
        inorder(node.right);
    }

    inorder(root);
    return res_inorder;

};