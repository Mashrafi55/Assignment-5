1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 getElementID can get a single element using its unique id.Since there is only one id there can olny be one result.

getElementsByClassName can grab all elemet that share a same class name. It returns an HTMLCollection.

querySelector grabs the first element that matches it. if you give it a css selector like --class,id,tag it will grab the first mathcing css selector 

querySelectorAll same as querySelector but it returns all the matching ones not just the first one

2. How do you create and insert a new element into the DOM?

We use documnet.createElement() to create a new element inside the dom.

to insert it into the page we use appendChild()

3. What is Event Bubbling and how does it work?

Event bubbling is a DOM mechanism where if you click child element and trigger an event it will travel upward through the DOM tree bubbling from child to parent all the way to the document.

4. What is Event Delegation in JavaScript? Why is it useful?

Instead of adding event listener to every child element you add one listener to the parent.Because of event bubbling when a child is clicked the event travels up to the parent.

5. What is the difference between preventDefault() and stopPropagation()?

preventDefault() stops the browser from doing its default action  like stopping a form from reloading the page.

stopPropagation() stops the event from travelling up to parent elements.