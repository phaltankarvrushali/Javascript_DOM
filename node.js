/**
* A Node represents an HTML Element. A node can have a tag name,
* a list of CSS classes and a list of children nodes.
*/
class Node {

  constructor(tag, id, classes, children) {

    // Id of the node.
    this.id = id;
    // Tag name of the node.
    this.tag = tag;
    // Array of CSS class names (string) on this element.
    this.classes = classes;
    // Array of child nodes.
    this.children = children; // All children are of type Node
  }

   result = [];

  search(selector) {

    try {

    if(!selector || selector === null || selector === ""){

      return("Selector cannot be empty");
    }

    this.result = [];

    if(selector.charAt(0) === ".") {

      selector = selector.substring(1);
      
      this.getResultByClasses(selector);

    }

    else {

      this.getResultByTag(selector);

    }
  
  }

  catch(e) {

    console.error(e);
  }
    return this.result;
  }

  //Search by tag
  getResultByTag(selector) {


    if (!(selector === null)){

      /* if (this.tag === selector){

         this.result.push(this);

       }*/

      if(this.hasChildren(this)) {

        for(var childNode of this.children){

          this.traverseTree(childNode, selector);

        }
      }
    }
  }

  //Search by class
  getResultByClasses(selector) {
    
    if (!(selector === null)) {

      /*if (this.classes.includes(selector)) {

        this.result.push(this);

      }*/

      if(this.hasChildren(this)) {

        for(var childNode of this.children){

          this.traverseTreeByClasses(childNode, selector);

        }
      }
    }
  }

  //Search by class
  //Depth first search
  traverseTreeByClasses(node, selector) {

    if (node.classes.includes(selector)){

      this.result.push(node);      //Publish result by node
      //this.result.push(node.id); //Publish result by id

    }

    if(this.hasChildren(node)) {

      for(var childNode of node.children){

        this.traverseTreeByClasses(childNode, selector);

      }
    }
  }
  
  traverseTree(node, selector) {

    if(node.tag === selector){

      this.result.push(node);       //Publish result by node
      //this.result.push(node.id);  //Publish result by id

    }

    if(this.hasChildren(node)) {

      for(var childNode of node.children){

        this.traverseTree(childNode, selector);

      }
    }
  }

  //Validating if a node has children
  hasChildren(node) {

    return !(node.children.length === 0);

  }
}

//Creating DOM tree

let spanNode3 = new Node("span","span-3", ["sub1-span3"], []);

let p1 = new Node("p","para-1", ["sub1-p1", "note"], []);

let divNode2 = new Node("div", "div-2", "subContainer1", [p1,spanNode3]);

let spanNode1 = new Node("span", "span-1", ["note"], []);

let spanNode2 = new Node("span","span-2",[], []);

let labelNode1 = new Node("label", "lbl-1", [], []);

let sectionNode1 = new Node("section", "sec-1", [], [labelNode1]);

let divNode3 = new Node("div", "div-3", ["subContainer2"],[sectionNode1]);

let spanNode4 = new Node("span", "span-4", ["mania"], []);

let spanNode5 = new Node("span","span-5",["note", "mania"], []);

let divNode4 = new Node("div", "div-4", [],[spanNode4,spanNode5]);

let divNode1 = new Node("div", "div-1", ["mainContainer"],[spanNode1,spanNode2,divNode2,divNode3,divNode4]);

let randomNode = new Node("span","span-6",["randomSpan"], []);

let body = new Node("body","content",[],[divNode1,randomNode]);




// Testing
console.log("Test Started...");
console.log("\n");

// Test case 1 -
console.log("Test Case 1");
console.log(divNode1.search("span"));
console.log("\n");

// Test case 2 -
console.log("Test Case 2");
console.log(divNode1.search(".note"));
console.log("\n");

// Test case 3 -
console.log("Test Case 3");
console.log(divNode1.search("label"));
console.log("\n");

// Test case 4 -
console.log("Test Case 4");
console.log(p1.search(".note"));
console.log("\n");

// Test case 5 -
console.log("Test Case 5");
console.log(divNode1.search("div"));
console.log("\n");

// Test case 6 -
console.log("Test Case 6");
console.log(randomNode.search("div"));
console.log("\n");


// Test case 7 -
console.log("Test Case 7");
console.log(divNode2.search("section"));
console.log("\n");

// Test case 8 -
console.log("Test Case 8");
console.log(body.search());
console.log("\n");

// Test case 9 -
console.log("Test Case 9");
console.log(body.search("section"));
console.log("\n");

// Test case 10 -
console.log("Test Case 10");
console.log(divNode1.search(".randomSpan"));
console.log("\n");

// randomSpan is some Span outside your divNode1 closed










/* <!DOCTYPE html>
<html>
<head>
    <title>DOM demo</title>
</head>

<script src="node.js"></script>
</html>




<!--
<body id="content">
<div id="div-1" class="mainContainer">

    <span id="span-1" class="note"></span>

    <span id="span-2"></span>

    <div id="div-2" class="subContainer1">
        <p id="para-1" class="sub1-p1 note"></p>
        <span id="span-3" class="sub1-span3"></span>
    </div> 

    <div id="div-3" class="subContainer2">
      <section id="sec-1">
        <label id="lbl-1"></label>
      </section>
    </div>

    <div id="div-4">
        <span id="span-4" class="mania"></span>
        <span id="span-5" class="note mania"></span>
    </div>
    
</div>
<span id="span-6" class="randomSpan"></span>
</body>

*/