
# Pesto Week 1 Assignment

## Main Functionality of the browser

A browser is mainly software which is used to access information on the World Wide Web. 

When a user requests some information, the web browser fetches the data from a server and 
then displays the webpage on the user’s screen. 

### Browser Funtionality:

On daily basis we are heavily dependent on Internet for personal usage. 

Below are functions of browsers:

* The main function is to retrieve information from the World Wide Web and making it available for users.

* Visiting any website can be done using a web browser. When a URL is entered in a browser, the web server takes us to that website.


* Browsers user internal cache which gets stored and the user can open the same webpage time and again without losing extra data.

* Multiple webpages can be opened at the same time on a browser.

## Components of a Browser

* The User Interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

* The browser engine: marshals actions between the UI and the rendering engine.

* The rendering engine: responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

* Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

![Alt text](Week-1/Assignment1/images/browers.png?raw=true "Browser Components")

* UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

* JavaScript interpreter. Used to parse and execute JavaScript code.

* Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

## Rendering and its use

* Rendering helps you to present the content on a webpage

* It makes use of HTML, CSS files to design the webpage however is required.

* The design of the webpage and what would be the functionality of the web page is decided by the developer who designs the page.

* Based on the design, the end-user will be able to understand the content, it would make the usage of the page easier for the end-user.

## Parsers

The output tree (the "parse tree") is a tree of DOM element and attribute nodes. DOM is short for Document Object Model. It is the object presentation of the HTML document and the interface of HTML elements to the outside world like JavaScript. The root of the tree is the "Document" object. 
The DOM has an almost one-to-one relation to the markup.

![Alt text](Week-1/Assignment1/images/parsers.png?raw=true "DOM Tree")


## Script Processors

The script processor executes Javascript code to process an event. The processor uses a pure Go implementation of ECMAScript 5.1 and has no external dependencies. This can be useful in situations where one of the other processors doesn’t provide the functionality you need to filter events. Order of Script Processing

* <script> in <head> - VeryHigh (Blocks parser)
* <script type=module async> - High (Interupts Parsser)
* <script async> - High (Interupts Parsser)
* <script> at the end of <body> - Low (Waits parser end)
* <link rel=prefetch> + <script> in a next-page navigation - Depends on when and how the script is consumed.