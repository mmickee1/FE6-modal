# UI changes with JS

## classList
  * https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  * https://www.w3schools.com/jsref/prop_element_classlist.asp

## Start
1. Load and extract this repo as a ZIP https://github.com/ilkkamtk/BCW4

### Task A
  * Open task_a.html, main_a.js and main.css
  * main.css contains classes red, green and blue
  * in main_a.js make a script that adds class 'red' to the first p-element when #add button is clicked
  * in main_a.js make a script that replaces class 'red' to class 'blue' and vice versa to the second p-element whenever #change button is clicked
  * in main_a.js make a script that toggles class 'green' in the third p-element when #toggle button is clicked
  * some help:
    * https://www.w3schools.com/css/css_pseudo_classes.asp
    * https://www.w3schools.com/jsref/met_element_addeventlistener.asp
    
  
   

### Task B 
  * Open task_b.html, main_b.js ja main.css
  * Modify main_b.js:ää and main.css:ää so that when clicking the thumbnails in the gird large images are not opend in a new page but they are opened in a modal (lightbox)
    * modal could look like this:
    ___
    ![Index screenshot](https://raw.githubusercontent.com/ilkkamtk/mpjkk/master/Week1/images/gallery2.png)
    ___
    * some help:
        * Prevent normal link action: https://www.w3schools.com/jsref/event_preventdefault.asp
        * Get the image url form the href attribute of 'a' element
        * Rememeber that you can select the 'a' elements only when they exist. That is when fetch is complete.
        * One example: https://www.w3schools.com/howto/howto_css_modal_images.asp
        * If you want to show off, try animate.css library: https://daneden.github.io/animate.css/
        
        