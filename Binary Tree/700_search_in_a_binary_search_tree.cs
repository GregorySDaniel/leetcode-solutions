/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution
{
    public TreeNode SearchBST(TreeNode root, int val)
    {
        if (val == root.val) return root;

        if (val > root.val)
        {
            if (root.right == null)
            {
                return null;
            }
            else
            {
                return SearchBST(root.right, val);
            }
        }
        else
        {
            if (root.left == null)
            {
                return null;
            }
            else
            {
                return SearchBST(root.left, val);
            }
        }
    }
}