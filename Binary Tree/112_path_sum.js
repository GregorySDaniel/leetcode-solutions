var hasPathSum = function(root, targetSum) {

    function dfs(node, target){
        if(!node){
            return false;
        }
        if(target == node.val && !node.right && !node.left){
            return true;
        }
        return dfs(node.left, target-node.val) || dfs(node.right, target-node.val);
        
    }

    return dfs(root, targetSum);
};