This is a Javascript project to Search node in a DOM Tree using recursive solution.

Created a DOM tree for the HTML as per given documentation.

Body consists on two nodes- divNode1 and spanNode6 where spanNode6 does not have a child.

In the created DOM tree, which is different from a binary tree, we are storing the id, tag, classes and children of the nodes.

As per the documentation of DOM tree, divNode1 has three children- spanNode1, spanNode2 and divNode2. The divNode2 has two children pNode1 and spanNode3.
Likewise, we are searching the entire tree to satisfy the criteria and test cases mentioned in the documentation.

We are using depth first search to find nodes which satisfy the criteria given via selector. 

We can search the DOM tree for nodes using tag, id and class.

For searching with tag, selector should be the tag. For example-
To search for <span>, selector should be span.

For searching with id, selector should be #id. For example-
To search for <div id="div-3" class="subContainer2"> with id, selector should be "#div-3".

For searching with class, selector should be ".classname" . For example-
To search for <div id="div-3" class="subContainer2"> with class, selector should be ".subContainer2" . 

When a matching node is found in the DOM tree, the node gets added to a list and the list will be returned as result and printed in console.log after the traversal of the tree.

If no nodes match for the given criteria, an empty list will be returned as result.

If no selector has been passed, an error message "Selector cannot be empty" will be printed in the console.

If any exception/error occurs, it will be handled by try-catch and exception will be printed in the console which allows the application to continue running and does not throw runtime error.
