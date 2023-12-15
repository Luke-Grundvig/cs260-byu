-*git config pull.rebase false - usefull for branch merging
-Try not to confuse git by editing in multipul places. Just commit and push things to keep another copy of them online
-Good for backing up and working with other people, pretty simple
-Dig can get the IP address of a website with default commands
Set up DNS and HTTP conncetion. Provision instance. Also EC2 instance
inbound rule allow 0.0.0.0/0
Domain/Hosted zones/registered domain/create record (ttl about 300 seconds) 
in hosted zones add a record for all your domains and sub domains

on simon.(my domain) and on startup.(my domain) do the HTML

USE: ssh -i /Users/lukegrundvig/Downloads/lukegrundvig.pem ubuntu@western-showdown.click
for acessing shell of website

Use orientation and aside to hide parts if the screen is too small
realtime colors gives good color waves and matching colors

DOM: document object model
how to manipulate DOM:
    - use recursion (for loop in htis case, auto) ex. for each child print the child


    .json() is a javascript function that takes a json string and returns an object


MIDTERM:

1. In the following code, what does the link element do?
 EX:   <head>
  <link rel="stylesheet" href="styles.css">
    </head>

    It can link css style or javascript pages

2. In the following code,  what does a div tag do?
    Stands for division. Used as a container, easily styled.
3. In the following code, what is the difference between the #title and .grid selector?
    The #title selector is used to select elements with an attribute value containing a specified word. The title attribute attaches additional information to the <a> element.
    EX: 
    To use the #title selector, you can use the [attribute~=value] selector. For example, the selector will match elements with title="flower", title="summer flower", and title="flower new", but not title="my-flower" or title="flowers"

    The .grid selector matches elements based on grid structures expressed in document semantics, such as tables in HTML. The Grid provides both checkbox and row-click selection options which can be applied to single or multiple records

4. In the following code, what is the difference between padding and margin?
    the margin of an element represents the outside space of the element itself, while the padding represents the inner space surrounding the element. 

5. Given this HTML and this CSS how will the images be displayed using flex?


6. What does the following padding CSS do?
    padding options:
    + length - specifies a padding in px, pt, cm, etc.
    + % - specifies a padding in % of the width of the containing element
    + inherit - specifies that the padding should be inherited from the parent element
    EX:padding: 25px 50px 75px 100px;
        top padding is 25px
        right padding is 50px
        bottom padding is 75px
        left padding is 100px

7. What does the following code using arrow syntax function declaration do?
    Arrow functions are a new type of function introduced in ES6. They are written with the "fat arrow" syntax (=>).
    Arrow functions have a simpler and more concise syntax than traditional function expressions. They also have the advantage of capturing the current value of this, which can be useful in certain situations.

8. What does the following code using map with an array output?
    creates a new array populated with the results of calling a provided function on every element in the calling array. (? depending on context)

9. What does the following code output using getElementByID and addEventListener?
    both are in the name.

10. What does the following line of Javascript do using a # selector?
    In JavaScript, selectors can be used to select elements in the DOM. A selector can be an element ID, class, or tag name such as document. querySelector('#my-id') 

11. Which of the following are true? (mark all that are true about the DOM)
    The Document Object Model (DOM) is a programming API for HTML and XML documents.
     It defines the logical structure of documents and the way a document is accessed and manipulated. In the DOM specification, the term "document" is used in the broad sense - increasingly, XML is being used as a way of representing many different kinds of information that may be stored in diverse systems, and much of this would traditionally be seen as data rather than as documents. Nevertheless, XML presents this data as documents, and the DOM may be used to manage this data.

With the Document Object Model, programmers can create and build documents, navigate their structure, and add, modify, or delete elements and content. Anything found in an HTML or XML document can be accessed, changed, deleted, or added using the Document Object Model, with a few exceptions - in particular, the DOM interfaces for the internal subset and external subset have not yet been specified.

12. By default, the HTML span element has a default CSS display property value of: 
    display:inline

13. How would you use CSS to change all the div elements to have a background color of red?
    div {
      background: red; (or rgb(255,0,0))
    }

14. How would you display an image with a hyperlink in HTML?
    <a href="link address"><img src="image destination"></a>
    ex: <a href="https://www.tutorialspoint.com"><img src="https://www.tutorialspoint.com/assets/questions/media/426142-1668760765.png" alt="Tutorialspoint"></a>

15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
    The layers are, in order from inside to outside: Padding. Border. Margin. Content.
    Content - The content of the box, where text and images appear.
    Padding - Clears an area around the content. The padding is transparent.
    Border - A border that goes around the padding and content.
    Margin - Clears an area outside the border. The margin is transparent.  

16. Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
    To select elements with a specific class in HTML, you can use a dot (.) followed by the class name.

17. What will the following code output when executed using a for loop and console.log?
    guess we'll find out

18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
    see 16 (text color is just color: )

19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
    Write a hash (#) character, followed by the ID of the element.

20. How do you declare the document type to be html?
    <! DOCTYPE html>

21. What is valid javascript syntax for if, else, for, while, switch statements?
    if (condition) {
     // code to execute if condition is true
    } else {
      // code to execute if condition is false
    }

    for (var i = 0; i < 10; i++) {
    // code to execute repeatedly
    }

    while (i < 10) {
    // code to execute repeatedly
    i++;
    }

    switch (expression) {
    case value1:
    // code to execute if expression is equal to value1
    break;
    case value2:
    // code to execute if expression is equal to value2
    break;
    default:
    // code to execute if expression is not equal to any of the above values
    }

22. What is the correct syntax for creating a javascript object?
    1.const person = new Object();
    2.const person = { firstName: "John", lastName: "Doe", age: 30, };

23. Is is possible to add new properties to javascript objects?
    Yes. Properties are the values associated with a JavaScript object. A JavaScript object is a collection of unordered properties. Properties can usually be changed, added, and deleted, but some are read only.

24. If you want to include JavaScript on an HTML page, which tag do you use?
    <script>

25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
    To change the text of an HTML element in JavaScript, you can use the innerHTML, innerText, or textContent properties. 

    EX: element. textContent = "new_value";

26. Which of the following correctly describes JSON?
JSON stands for JavaScript Object Notation, JSON is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page.

27. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?

    chmod - Changes the permissions of a file or directory. The owner of a file can change the permissions for user (u), group (g), or others (o) by adding (+) or subtracting (-) the read, write, and execute permissions.
    pwd - print working directory
    cd - choose directory
    ls - list
    vim - text editor, create a new file, edit file, or just read one
    nano - opens file to edit, or creates new file
    mkdir - make directory
    mv - move
    rm - remove
    man - manuel
    ssh - secure shell
    ps - writes the status of active processes
    wget - networking command-line tool that lets you download files and interact with REST APIs
    sudo - allows you to run programs with the security privileges of another user

28. Which of the following console command creates a remote shell session?
    ssh
    EX: " ssh [options] user@hostname "

29. Which of the following is true when the -la parameter is specified for the ls console command?
    long list format not ignoring entries(?) not sure
    EX: 
total 160
drwxr-x---+ 39 lukegrundvig  staff   1248 Oct 29 22:44 .
drwxr-xr-x   5 root          admin    160 Feb 22  2023 ..
-r--------   1 lukegrundvig  staff      7 Jan  4  2022 .CFUserTextEncoding
-rw-r--r--@  1 lukegrundvig  staff  12292 Oct 17 11:15 .DS_Store
drwxr-xr-x   5 lukegrundvig  staff    160 Sep  9  2022 .IdentityService
drwx------+  4 lukegrundvig  staff    128 Oct 28 20:25 .Trash


30. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
    the root domain is what comes after the “www” and includes the Top-level domain extension, like .com or . org. For example, in the website address www.example.com
    so in this example bozo is the root www. is a subdomian and top level is .click


31. Is a web certificate is necessary to use HTTPS.
    To use HTTPS with your domain name, you need a SSL or TLS certificate installed on your website.

32. Can a DNS A record can point to an IP address or another A record.
    Yes, a DNS A record can point to an IP address.
    DNS is not capable of HTTP redirection, so probs not another A record

33. Port 443, 80, 22 is reserved for which protocol?
    Port 443 is used explicitly for HTTPS services and hence is the standard port for HTTPS (encrypted) traffic.
    Port 80 is the port number assigned to commonly used internet communication protocol, Hypertext Transfer Protocol (HTTP).
    Port 22 is a well-known port number used in computer networking. It is specifically associated with the Secure Shell (SSH) protocol

34. What will the following code using Promises output when executed?
    Guess we'll find out, hopefully.

    include a jsx file for every component you have
    current javascript code would become a component
    
    basically the html will only have the root component that will get changed by the javascript to display everything else



FINAL EXAM:

1. What ports are used for HTTP, HTTPS, SSH?
    Http: 80, HTTPS: 443, SSH: 22

2. What do HTTP status codes in the 300, 400, 500 range indicate?
    300: redirection
    400: client error  Each of these is the range of the number, not those numbers exactly
    500: server error

3. What does the HTTP header content-type allows you to do?
    Tells you what type of content you're dealing with/allows you to specify the type of content you're sending (HTML, plaintext)

4. What do the following attributes of a cookie do?
        Domain: maps to domain cookie is coming form 
        Path: path where the cookie is generated (the end part past)
        SameSite: only return the cookie to the domain it is generated with
        HTTPOnly: tells browser do not allow JavaScript to run on the browser, so it can read the cookie

5. Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /foo/bar?
    will be presented with code that has consle logs for different functions. Need to determine what functions are called and in what order
    be careful with what the method is and path
    it will go to the use, then post

6. Given the following Express service code: What does the following JavaScript fetch return?
        In general fetch (a front end function) will return the results of communication with the server (whether status code or actual information)

        Express service code examples : app.use(express.json());  app.set('trust proxy', true);    apiRouter.post etc *** finish this one
        
7. Given the following MongoDB query

        { cost: { $gt: 10 }, name: /fran.*/}

        . - any character
        * - any number of characters
        grabs anything greater than 10 and name has fran with any wildcard character after, then returns an array of all the matching ones

    select all of the matching documents.


8. How should you store user passwords in a database?
    hash with salt

9. Assuming the following Node.js service code is executing with websockets, what will be logged to the console of the web browser?
    study what happens on connect, disconnect and message (on.connection, on.Message, on.close)

10. What is the WebSocket protocol used for?
    calls from client to server, both can send a message

11. What is JSX and how are the curly braces rendered?
    javaScript and HTML combined (anything after the return is rendered to the screen, even if you put a seperate return outside the ())

12. Assuming a HTML document with a <div id="root"></div> element, what content will the following React component generate?

      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
      function App() {
        return (
          <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
          </div>
        );
      }
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);


    Hello, Sara
    Hello, Cahal
    Hello, Edite


13. Assuming a HTML document with a <div id="root"></div> element, what content will the following React component generate?

    function Numbers() { 
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li>{number}</li>
      );
      return(<ul>{listItems}</ul>)
    }
    const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(<Numbers/>);

    -1
    -2
    -3      (bullet points instead of dashes, as it's unordered it's bulletpoints as opposed to an ol (ordered list) which would return by #)
    -4      (IE 1. 1   2. 2   3. 3 etc)
    -5


14. What does the following React component do?

function Example() {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

returns count, and each time you click the button it will increase by nuber of times the button is clicked (so it returns the counter and the button)

15. What are React Hooks used for?
    you are modifying the state of a component.

    basically they handle the state and handle the life cycle events (onCreate, onDestroy, reRender)

16. What is the useEffect hook used for?
    *** look this up

17. What does this code do?

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

displays things based on what path is envoked
ex. / renders layout and home (home is only rendered if it's just the slash)
    /user renders NoPage (it isn't specified)
    /contact renders contact
    etc

18. What role does npm play in web development?
    it manages your node packages and allows you to download external packages

19. What does package.json do in a npm project?
    holds your third party packages (lists them), tells you what packages/scripts you can use, name version description and what file to run project

20. What does the fetch function do?


21. What does node.js do?
    runs the server

22. What does Vite do?
    allows you to bundle code (which includes react components) together for production so it can be deployed to a server
    transposes jsx code into javascript so it can be run on a server
