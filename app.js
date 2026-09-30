// =============================================================================
// FRAPPE & ERPNEXT 80-DAYS MASTER CURRICULUM DATASET
// =============================================================================

const CURRICULUM_DATA = [
  // --- BLOCK 1: FOUNDATIONS (Days 1 - 15) ---
  {
    day: 1,
    block: "block1",
    blockName: "Block 1: Foundations",
    title: "Web Architecture, Linux & Windows WSL 2 Setup",
    desc: "Samjhein Client, Server aur Database ka relation. Windows me WSL 2 (Ubuntu 22.04 LTS) install karein kyunki Frappe Linux par hi chalta hai.",
    task: "PowerShell me 'wsl --install -d Ubuntu-22.04' chalayein aur restart karke Ubuntu terminal open karein.",
    link: "https://learn.microsoft.com/en-us/windows/wsl/install",
    linkText: "WSL 2 Installation Guide"
  },
  {
    day: 2,
    block: "block1",
    blockName: "Block 1: Foundations",
    title: "Linux Terminal Core Commands & VS Code WSL Setup",
    desc: "Linux ke essential commands seekhein: cd, ls, pwd, mkdir, rm, nano, sudo, chmod, user permissions.",
    task: "Ubuntu terminal me 5 directories banayein, file create karein aur VS Code me 'code .' command se WSL project open karein.",
    link: "https://www.youtube.com/results?search_query=linux+terminal+basics+hindi",
    linkText: "Linux Basics in Hindi (YouTube)"
  },
  {
    day: 3,
    block: "block1",
    blockName: "Block 1: Foundations",
    title: "Git & GitHub Basics for Developers",
    desc: "Version control system ka concept: git init, git add, git commit, git branch, git remote, git push, git pull.",
    task: "GitHub par account banayein, ek dummy repository banakar WSL terminal se code push karein.",
    link: "https://www.youtube.com/results?search_query=git+and+github+kunal+kushwaha",
    linkText: "Git & GitHub Tutorial (Kunal Kushwaha)"
  },
  {
    day: 4,
    block: "block1",
    blockName: "Block 1: Foundations",
    title: "Python Setup, Variables & Data Types",
    desc: "Python 3 install karein. Integer, Float, String, Boolean samjhein. input() aur print() formatted strings (f-strings).",
    task: "Ek basic program banayein jo user se naam aur umar lekar greet kare aur 5 basic calculations kare.",
    link: "https://www.youtube.com/results?search_query=chai+aur+python+hindi",
    linkText: "Chai aur Python (Chai aur Code)"
  },
  {
    day: 5,
    block: "block1",
    blockName: "Block 1: Foundations",
    title: "Python Conditions (if, elif, else)",
    desc: "Decision making statements, Comparison operators (==, !=, >, <), Logical operators (and, or, not).",
    task: "5 practice questions karein: Even/Odd check, Marks ke hisab se Grade dena, Leap Year checker.",
    link: "https://www.youtube.com/results?search_query=codewithharry+python+conditions",
    linkText: "Python Conditions (CodeWithHarry)"
  },
  {
    day: 6,
    block: "block1",
    blockName: "Block 1: Foundations",
    title: "Python Loops (for & while loops)",
    desc: "Repeating logic: for loop with range(), while loop, loop control (break, continue, pass), nested loops.",
    task: "1 se 100 tak ke Prime numbers print karne ka program banayein aur multiplication table print karein.",
    link: "https://www.youtube.com/results?search_query=python+loops+practice+questions",
    linkText: "Python Loops Practice"
  },
  {
    day: 7,
    block: "block1",
    blockName: "Block 1: Foundations",
    title: "Python Lists & Tuples (Arrays)",
    desc: "Lists create karna, append, insert, pop, remove, sort, list slicing [start:end:step], list comprehension.",
    task: "Ek Todo List CLI program banayein jisme user item add, view aur remove kar sake.",
    link: "https://www.youtube.com/results?search_query=python+list+methods+hindi",
    linkText: "Python Lists Tutorial"
  },
  {
    day: 8,
    block: "block1",
    blockName: "Block 1: Foundations",
    title: "Python Dictionaries & Sets (Most Important for Frappe)",
    desc: "Key-Value pairs (Frappe me har document dictionary format me handle hota hai). get(), keys(), values(), items(), update().",
    task: "Student database dictionary banayein (ID -> Name, Marks, Grade) aur usme search/update function banayein.",
    link: "https://www.youtube.com/results?search_query=python+dictionary+explained+hindi",
    linkText: "Python Dictionaries Deep Dive"
  },
  {
    day: 9,
    block: "block1",
    blockName: "Block 1: Foundations",
    title: "Python Functions & Scope (*args, **kwargs)",
    desc: "Reusable code blocks: def, parameters, return keyword, default values, arbitrary arguments (*args, **kwargs), local vs global scope.",
    task: "3 custom utility functions banayein jo string reverse karein, discount calculate karein, aur tax add karein.",
    link: "https://www.youtube.com/results?search_query=python+functions+hindi",
    linkText: "Python Functions Masterclass"
  },
  {
    day: 10,
    block: "block1",
    blockName: "Block 1: Foundations",
    title: "Python OOP: Classes & Objects (Crucial for Frappe)",
    desc: "Object-Oriented Programming: Class vs Object, __init__ constructor, 'self' parameter, instance attributes.",
    task: "Ek 'BankAccount' class banayein jisme deposit, withdraw aur balance check methods hon.",
    link: "https://www.youtube.com/results?search_query=python+oop+classes+objects+hindi",
    linkText: "Python OOP (Chai aur Code)"
  },
  {
    day: 11,
    block: "block1",
    blockName: "Block 1: Foundations",
    title: "Python OOP: Methods & Encapsulation",
    desc: "Instance methods, class methods, private/protected variables, dunder methods (__str__, __repr__).",
    task: "Ek 'Book' class banayein jisme issue_book() aur return_book() methods hon.",
    link: "https://www.youtube.com/results?search_query=python+oop+methods+hindi",
    linkText: "OOP Methods in Python"
  },
  {
    day: 12,
    block: "block1",
    blockName: "Block 1: Foundations",
    title: "Python OOP: Inheritance & Method Overriding",
    desc: "Single inheritance, Multiple inheritance, super() function, overriding parent methods (Jaise Frappe me Document class override hoti hai).",
    task: "Ek base 'Person' class banayein aur usse 'Customer' aur 'Employee' class inherit karein.",
    link: "https://www.youtube.com/results?search_query=python+inheritance+super+hindi",
    linkText: "Python Inheritance Guide"
  },
  {
    day: 13,
    block: "block1",
    blockName: "Block 1: Foundations",
    title: "Databases & MariaDB Setup",
    desc: "Relational database concepts: Tables, Rows, Columns, Primary Key, Foreign Key. WSL me MariaDB server install karein.",
    task: "MariaDB terminal me login karein, 'test_db' banayein aur 'users' table create karein.",
    link: "https://mariadb.com/kb/en/getting-started-with-mariadb/",
    linkText: "MariaDB Getting Started"
  },
  {
    day: 14,
    block: "block1",
    blockName: "Block 1: Foundations",
    title: "SQL CRUD Operations (SELECT, INSERT, UPDATE, DELETE)",
    desc: "Core SQL queries: SELECT * FROM, WHERE clause, AND/OR, LIKE, LIMIT, ORDER BY, UPDATE ... SET, DELETE.",
    task: "10 records insert karein aur alag alag filters ke sath select query execute karein.",
    link: "https://www.youtube.com/results?search_query=sql+tutorial+in+hindi+one+shot",
    linkText: "SQL One-Shot Tutorial"
  },
  {
    day: 15,
    block: "block1",
    blockName: "Block 1: Foundations",
    title: "SQL Joins & Group By (Relations)",
    desc: "Inner Join, Left Join, Right Join, Foreign Key relations, Group By aur Aggregate functions (COUNT, SUM, AVG).",
    task: "'Customers' aur 'Orders' table banakar dono ko Join karke customer-wise total sales calculate karein.",
    link: "https://www.w3schools.com/sql/sql_join.asp",
    linkText: "SQL Joins (W3Schools Interactive)"
  },

  // --- BLOCK 2: JAVASCRIPT & WEB BASICS (Days 16 - 25) ---
  {
    day: 16,
    block: "block2",
    blockName: "Block 2: JS & Web",
    title: "JavaScript Basics (Variables, Functions, Arrow Functions)",
    desc: "Client-side scripting: let vs const vs var, Data types, Arrow functions, template literals (`Hello ${name}`).",
    task: "Browser DevTools console kholkar 10 basic functions run karein.",
    link: "https://www.youtube.com/results?search_query=chai+aur+javascript+hindi",
    linkText: "Chai aur JavaScript Playlist"
  },
  {
    day: 17,
    block: "block2",
    blockName: "Block 2: JS & Web",
    title: "JS Arrays & Objects Manipulation",
    desc: "Array methods: map(), filter(), forEach(), reduce(). Object properties access, Object.keys(), destructuring.",
    task: "Products list me se sirf un products ko filter karein jinka price 500 se jyada hai using filter().",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
    linkText: "MDN Array Methods"
  },
  {
    day: 18,
    block: "block2",
    blockName: "Block 2: JS & Web",
    title: "JSON (JavaScript Object Notation)",
    desc: "JSON.stringify() aur JSON.parse(). API requests me data exchange format kaise kaam karta hai.",
    task: "Ek JS object ko JSON string me convert karein aur wapas parse karke print karein.",
    link: "https://www.w3schools.com/js/js_json_intro.asp",
    linkText: "JSON Introduction"
  },
  {
    day: 19,
    block: "block2",
    blockName: "Block 2: JS & Web",
    title: "DOM Manipulation & Event Listeners",
    desc: "HTML elements ko target karna: document.getElementById(), querySelector(), addEventListener('click', ...).",
    task: "Ek HTML page banayein jisme button click karne par background color change ho aur alert pop up aaye.",
    link: "https://www.youtube.com/results?search_query=javascript+dom+manipulation+hindi",
    linkText: "DOM Manipulation in Hindi"
  },
  {
    day: 20,
    block: "block2",
    blockName: "Block 2: JS & Web",
    title: "Asynchronous JS: Promises & Async/Await",
    desc: "Synchronous vs Asynchronous code, Event loop, Promises kya hote hain, async/await syntax.",
    task: "setTimeout ke sath ek 3-second delayed timer promise banayein aur console me execute karein.",
    link: "https://javascript.info/async-await",
    linkText: "Async/Await (JavaScript.info)"
  },
  {
    day: 21,
    block: "block2",
    blockName: "Block 2: JS & Web",
    title: "Fetch API & Calling REST Endpoints",
    desc: "fetch() function se third-party JSON API ko call karna (GET, POST), response handle karna (.json()).",
    task: "Free JSONPlaceholder API se fake posts fetch karke console me display karein.",
    link: "https://jsonplaceholder.typicode.com/",
    linkText: "JSONPlaceholder Free API"
  },
  {
    day: 22,
    block: "block2",
    blockName: "Block 2: JS & Web",
    title: "Mini Project: Student Grade Calculator (Part 1)",
    desc: "HTML + CSS layout design karein jisme form input ho: Student Name, Subject Marks, Attendance.",
    task: "Responsive form design karein clean CSS styling ke sath.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/Forms",
    linkText: "HTML Forms Guide"
  },
  {
    day: 23,
    block: "block2",
    blockName: "Block 2: JS & Web",
    title: "Mini Project: Student Grade Calculator (Part 2)",
    desc: "JavaScript logic jodein: Form submit par validation, percentage calculate karna aur Pass/Fail badge dikhana.",
    task: "Calculate button par dynamic result box render karein.",
    link: "https://github.com/",
    linkText: "Code GitHub par commit karein"
  },
  {
    day: 24,
    block: "block2",
    blockName: "Block 2: JS & Web",
    title: "LocalStorage in Browser",
    desc: "localStorage.setItem(), localStorage.getItem(), localStorage.removeItem() - data persistent rakhna bina server ke.",
    task: "Apne Student calculator me previous calculations ko localStorage me save karein taaki refresh par data na mite.",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
    linkText: "MDN LocalStorage"
  },
  {
    day: 25,
    block: "block2",
    blockName: "Block 2: JS & Web",
    title: "Revision & Skill Check (Blocks 1 & 2)",
    desc: "Python OOP, SQL Joins, JS Array methods aur Async code ka revision karein. Frappe me jump karne ke liye tayari!",
    task: "Ek single Python script aur ek JS script likhein jo mini problem solve karti ho.",
    link: "https://discuss.frappe.io",
    linkText: "Frappe Forum Join Karein"
  },

  // --- BLOCK 3: FRAPPE BENCH & DOCTYPES (Days 26 - 40) ---
  {
    day: 26,
    block: "block3",
    blockName: "Block 3: Bench & DocTypes",
    title: "Frappe Framework Architecture Deep Dive",
    desc: "Samjhein Frappe kaise kaam karta hai: Web Server (Nginx) -> WSGI Server -> Frappe Framework (Python) -> MariaDB & Redis -> Desk UI.",
    task: "Frappe Architecture diagram apni notebook me draw karein aur har component ka role samjhein.",
    link: "https://docs.frappe.io/framework/user/en/basics/architecture",
    linkText: "Frappe Architecture Official Docs"
  },
  {
    day: 27,
    block: "block3",
    blockName: "Block 3: Bench & DocTypes",
    title: "WSL Me Frappe Bench Prerequisites Installation",
    desc: "Ubuntu 22.04 me Python 3.10/3.11, pip, MariaDB server, Redis, Node.js 18/20, Yarn aur wkhtmltopdf install karein.",
    task: "Command: 'sudo apt update && sudo apt install git python3-dev python3-pip redis-server mariadb-server ...'",
    link: "https://frappe.school",
    linkText: "Frappe School Installation Steps"
  },
  {
    day: 28,
    block: "block3",
    blockName: "Block 3: Bench & DocTypes",
    title: "Bench CLI Installation & bench init",
    desc: "Bench CLI install karein: 'pip3 install frappe-bench'. Uske baad 'bench init frappe-bench' command se environment banayein.",
    task: "frappe-bench directory me cd karein aur folder structure check karein (apps, sites, config, logs).",
    link: "https://frappeframework.com/docs/user/en/bench",
    linkText: "Bench CLI Documentation"
  },
  {
    day: 29,
    block: "block3",
    blockName: "Block 3: Bench & DocTypes",
    title: "Creating First Site (bench new-site) & bench start",
    desc: "bench new-site mysite.local command chalayein, MariaDB root password dein, aur bench start se server run karein.",
    task: "Browser me http://localhost:8000 open karke Administrator se login karein.",
    link: "https://frappeframework.com/docs/user/en/tutorial/create-a-site",
    linkText: "Tutorial: Create a Site"
  },
  {
    day: 30,
    block: "block3",
    blockName: "Block 3: Bench & DocTypes",
    title: "Creating First App (bench new-app)",
    desc: "bench new-app library_management command chalayein. App ka name, title, description, license aur email set karein.",
    task: "Site me app install karein: 'bench --site mysite.local install-app library_management'.",
    link: "https://frappeframework.com/docs/user/en/tutorial/create-an-app",
    linkText: "Tutorial: Create an App"
  },
  {
    day: 31,
    block: "block3",
    blockName: "Block 3: Bench & DocTypes",
    title: "Developer Mode & App Directory Structure",
    desc: "Developer mode on karein: 'bench --site mysite.local set-config developer_mode 1'. hooks.py, modules.txt, __init__.py samjhein.",
    task: "VS Code me app folder kholkar hooks.py aur modules structure inspect karein.",
    link: "https://docs.frappe.io/framework/user/en/guides/basics/developer_mode",
    linkText: "Developer Mode Guide"
  },
  {
    day: 32,
    block: "block3",
    blockName: "Block 3: Bench & DocTypes",
    title: "DocType Concept & Creating Your First DocType",
    desc: "DocType kya hai? Frappe ka schema aur model. Desk me search karein 'DocType' -> New -> 'Article' (Book).",
    task: "Article DocType banayein aur dekhein kaise automatically JSON, Python, JS files create hoti hain.",
    link: "https://frappeframework.com/docs/user/en/tutorial/doctypes",
    linkText: "Creating DocTypes"
  },
  {
    day: 33,
    block: "block3",
    blockName: "Block 3: Bench & DocTypes",
    title: "DocField Types Deep Dive",
    desc: "Fields add karein: Title (Data), Author (Data), Description (Text Editor), Status (Select: In Stock, Issued), Price (Currency).",
    task: "Field properties explore karein: Mandatory, Read Only, In List View, In Standard Filter.",
    link: "https://frappeframework.com/docs/user/en/basics/doctypes/fieldtypes",
    linkText: "All Frappe Field Types"
  },
  {
    day: 34,
    block: "block3",
    blockName: "Block 3: Bench & DocTypes",
    title: "Link Fields (Foreign Keys & Relations)",
    desc: "Ek naya DocType banayein: 'Author'. Ab Article DocType me 'Author' ko Link field banayein.",
    task: "Desk me jaakar naye Authors banayein aur unhe Articles ke sath link karke drop-down search test karein.",
    link: "https://frappeframework.com/docs/user/en/basics/doctypes/link-fields",
    linkText: "Link Fields Guide"
  },
  {
    day: 35,
    block: "block3",
    blockName: "Block 3: Bench & DocTypes",
    title: "Child Tables (Table Fields)",
    desc: "Child Table DocType kya hai (Is Table check enabled). Parent document ke andar multiple rows add karna.",
    task: "'Book Edition' naam ka Child Table banayein aur Article me add karke multiple editions save karein.",
    link: "https://frappeframework.com/docs/user/en/basics/doctypes/child-doctypes",
    linkText: "Child DocTypes Guide"
  },
  {
    day: 36,
    block: "block3",
    blockName: "Block 3: Bench & DocTypes",
    title: "Submittable DocTypes (Draft -> Submit -> Cancel)",
    desc: "Is Submittable flag. Invoices aur transactions ko submit karne ke baad immutable banana.",
    task: "'Library Membership' DocType banayein aur use Submittable set karein. Draft aur Submit karke status dekhein.",
    link: "https://frappeframework.com/docs/user/en/basics/doctypes/submittable",
    linkText: "Submittable DocTypes"
  },
  {
    day: 37,
    block: "block3",
    blockName: "Block 3: Bench & DocTypes",
    title: "Single DocTypes (Settings / Global Config)",
    desc: "Is Single flag. Jahan pure system me sirf 1 record hota hai (Jaise 'Library Settings').",
    task: "'Library Settings' DocType banayein jisme 'Max Books Allowed' aur 'Loan Period Days' fields hon.",
    link: "https://frappeframework.com/docs/user/en/basics/doctypes/single-doctypes",
    linkText: "Single DocTypes Explained"
  },
  {
    day: 38,
    block: "block3",
    blockName: "Block 3: Bench & DocTypes",
    title: "Naming Series & Document Naming",
    desc: "Document ka name kaise generate hota hai: By fieldname, Prompt, ya Naming Series (e.g., 'ART-.YYYY.-.#####').",
    task: "Article aur Library Membership me custom Naming Series set karein.",
    link: "https://frappeframework.com/docs/user/en/basics/doctypes/naming",
    linkText: "Document Naming Rules"
  },
  {
    day: 39,
    block: "block3",
    blockName: "Block 3: Bench & DocTypes",
    title: "Role Permissions & User Roles",
    desc: "Roles (Librarian, Member, Guest). Role Permissions Manager se Read, Write, Create, Submit, Cancel permissions manage karna.",
    task: "Ek naya user 'librarian@test.com' banayein aur permission set karke test karein.",
    link: "https://frappeframework.com/docs/user/en/basics/permissions",
    linkText: "Role Based Permissions"
  },
  {
    day: 40,
    block: "block3",
    blockName: "Block 3: Bench & DocTypes",
    title: "Workspaces, Shortcuts & Desk Customization",
    desc: "Desk me custom Workspace banana: 'Library Workspace' jisme Number Cards, Quick Shortcuts aur Links hon.",
    task: "Total Books count ka Number Card banayein aur workspace par show karein.",
    link: "https://frappeframework.com/docs/user/en/desk/workspace",
    linkText: "Workspaces in Frappe Desk"
  },

  // --- BLOCK 4: PYTHON ORM & CONTROLLERS (Days 41 - 55) ---
  {
    day: 41,
    block: "block4",
    blockName: "Block 4: Python ORM",
    title: "bench console & Frappe Python Environment",
    desc: "Terminal me 'bench --site mysite.local console' chalayein. Interactive IPython shell me frappe API explore karein.",
    task: "Console me 'frappe.db.get_list(\"Article\")' run karke live data fetch karein.",
    link: "https://frappeframework.com/docs/user/en/bench/commands#console",
    linkText: "Bench Console Guide"
  },
  {
    day: 42,
    block: "block4",
    blockName: "Block 4: Python ORM",
    title: "frappe.get_doc() & Updating Documents",
    desc: "doc = frappe.get_doc('Article', 'ART-0001'). Properties access karna, modify karna aur doc.save() call karna.",
    task: "Python console se kisi book ka price update karke save karein aur Desk me verify karein.",
    link: "https://frappeframework.com/docs/user/en/api/document",
    linkText: "Document API Reference"
  },
  {
    day: 43,
    block: "block4",
    blockName: "Block 4: Python ORM",
    title: "frappe.new_doc() & Creating Documents via Code",
    desc: "Programmatically new documents create karna: new_doc = frappe.new_doc('Article'), values set karna, new_doc.insert().",
    task: "Python script likhkar ek sath 5 sample books database me insert karein.",
    link: "https://frappeframework.com/docs/user/en/api/database#frappenew_doc",
    linkText: "Creating Documents in Python"
  },
  {
    day: 44,
    block: "block4",
    blockName: "Block 4: Python ORM",
    title: "Fast Database Get & Set (frappe.db.get_value / set_value)",
    desc: "Fast queries bina pure document ko memory me load kiye: frappe.db.get_value(), frappe.db.set_value(), frappe.db.exists().",
    task: "Ek single line se book ka status 'Issued' set karein using frappe.db.set_value().",
    link: "https://frappeframework.com/docs/user/en/api/database",
    linkText: "Frappe DB API Documentation"
  },
  {
    day: 45,
    block: "block4",
    blockName: "Block 4: Python ORM",
    title: "frappe.db.get_all, get_list & Raw SQL (frappe.db.sql)",
    desc: "Filters, Fields, Order By, Limit lagakar list fetch karna. Complex queries ke liye frappe.db.sql('''SELECT ...''', as_dict=True).",
    task: "Sabhi Available books ko filter karke unki list print karein using frappe.db.get_all().",
    link: "https://frappeframework.com/docs/user/en/api/database#frappedbget_all",
    linkText: "get_all & get_list Methods"
  },
  {
    day: 46,
    block: "block4",
    blockName: "Block 4: Python ORM",
    title: "Document Controller Class & validate() Method",
    desc: "article.py controller file me class Article(Document). validate(self) method - sabse important business logic hook.",
    task: "validate() me condition lagayein: Agar price negative ya zero ho to frappe.throw('Invalid Price!') karein.",
    link: "https://frappeframework.com/docs/user/en/basics/doctypes/controllers",
    linkText: "DocType Controllers"
  },
  {
    day: 47,
    block: "block4",
    blockName: "Block 4: Python ORM",
    title: "Controller Lifecycle: before_insert, after_insert, on_update",
    desc: "Document save hone ke alag alag stages: before_insert, after_insert, before_save, on_update.",
    task: "after_insert me auto-log print karein console par jab bhi naya record banayein.",
    link: "https://frappeframework.com/docs/user/en/basics/doctypes/controller-methods",
    linkText: "Controller Methods Lifecycle"
  },
  {
    day: 48,
    block: "block4",
    blockName: "Block 4: Python ORM",
    title: "Submittable Hooks: on_submit & on_cancel",
    desc: "Document submit aur cancel hone par logic trigger karna (Jaise stock deduct karna, ledger entry karna).",
    task: "Library Membership submit hone par membership status automatically 'Active' set karein.",
    link: "https://frappeframework.com/docs/user/en/basics/doctypes/submittable",
    linkText: "on_submit Lifecycle"
  },
  {
    day: 49,
    block: "block4",
    blockName: "Block 4: Python ORM",
    title: "Errors, Messages & Notifications (frappe.msgprint & frappe.throw)",
    desc: "User ko error dikhana (frappe.throw() transaction rollback karta hai), warning dikhana (frappe.msgprint()), email bhejna (frappe.sendmail()).",
    task: "Member ki expiry date aane par alert message show karein.",
    link: "https://frappeframework.com/docs/user/en/api/messages",
    linkText: "Frappe Messages API"
  },
  {
    day: 50,
    block: "block4",
    blockName: "Block 4: Python ORM",
    title: "Project 1: Library Management Schema Design",
    desc: "DocTypes banayein: 'Library Member', 'Library Membership', 'Library Transaction'. Relationships connect karein.",
    task: "Saare DocTypes ke fields configure karein aur bench migrate run karein.",
    link: "https://frappeframework.com/docs/user/en/tutorial/create-doctypes",
    linkText: "Library Management Tutorial"
  },
  {
    day: 51,
    block: "block4",
    blockName: "Block 4: Python ORM",
    title: "Project 1: Membership Validation Logic",
    desc: "Library Transaction me check karein ki member ki membership active hai ya expire ho chuki hai.",
    task: "library_transaction.py ke validate() me membership check code likhein.",
    link: "https://frappeframework.com/docs/user/en/tutorial/form-scripts",
    linkText: "Transaction Logic Implementation"
  },
  {
    day: 52,
    block: "block4",
    blockName: "Block 4: Python ORM",
    title: "Project 1: Book Availability & Issue Logic",
    desc: "Check karein ki book already kisi aur member ko issued to nahi hai. Agar issued hai to throw error.",
    task: "Book issue hone par Article ka status automatically 'Issued' me update karein.",
    link: "https://frappeframework.com/docs/user/en/tutorial/controllers",
    linkText: "Issue / Return Logic"
  },
  {
    day: 53,
    block: "block4",
    blockName: "Block 4: Python ORM",
    title: "Project 1: Max Book Limit per Member",
    desc: "Single DocType 'Library Settings' se 'Max Books Allowed' value fetch karein aur member ki current issued books count check karein.",
    task: "Agar member ke paas already limit barabar books hain to issue block karein.",
    link: "https://frappeframework.com/docs/user/en/tutorial/single-doctypes",
    linkText: "Single DocType Integration"
  },
  {
    day: 54,
    block: "block4",
    blockName: "Block 4: Python ORM",
    title: "Project 1: Book Return & Fine Calculation",
    desc: "Return transaction submit hone par: Due date aur Return date ka difference nikal kar per day ₹5 fine calculate karein.",
    task: "Return hone par Article ka status wapas 'In Stock' set karein.",
    link: "https://frappeframework.com/docs/user/en/tutorial/submittable-doctypes",
    linkText: "Fine Calculation Logic"
  },
  {
    day: 55,
    block: "block4",
    blockName: "Block 4: Python ORM",
    title: "Project 1: Testing & bench migrate / bench clear-cache",
    desc: "Complete end-to-end testing karein. bench clear-cache aur bench restart chalayein. Errors ko debug karein.",
    task: "Pura Library Management workflow verify karein aur GitHub par commit karein.",
    link: "https://github.com/",
    linkText: "Push Code to GitHub"
  },

  // --- BLOCK 5: CLIENT SCRIPTS, APIS & HOOKS (Days 56 - 68) ---
  {
    day: 56,
    block: "block5",
    blockName: "Block 5: Client Scripts & Hooks",
    title: "Client-Side Scripting: frappe.ui.form.on & Events",
    desc: "Desk Form JS file (article.js). Events: refresh, onload, validate, before_save.",
    task: "refresh event par frm.doc.status console me print karein.",
    link: "https://frappeframework.com/docs/user/en/api/form",
    linkText: "Form Client Scripts API"
  },
  {
    day: 57,
    block: "block5",
    blockName: "Block 5: Client Scripts & Hooks",
    title: "Dynamic Field Events & Calculations",
    desc: "Field change triggers: 'quantity: function(frm) { ... }'. Auto calculate total amount on field change.",
    task: "Form me Discount percentage badalne par automatically Final Price calculate karke set karein.",
    link: "https://frappeframework.com/docs/user/en/guides/desk/form-scripts",
    linkText: "Field Triggers in Form Scripts"
  },
  {
    day: 58,
    block: "block5",
    blockName: "Block 5: Client Scripts & Hooks",
    title: "frm.set_value & frm.set_df_property (Show/Hide/ReadOnly)",
    desc: "Dynamic UI changes: frm.set_df_property('reason', 'reqd', 1), frm.toggle_display('field', condition).",
    task: "Agar Status 'Issued' ho tabhi 'Return Date' field ko show aur mandatory karein.",
    link: "https://frappeframework.com/docs/user/en/api/form#frmset_df_property",
    linkText: "Form Properties API"
  },
  {
    day: 59,
    block: "block5",
    blockName: "Block 5: Client Scripts & Hooks",
    title: "Custom Form Buttons (frm.add_custom_button)",
    desc: "Desk form header me custom actions jodein: frm.add_custom_button(__('Issue Book'), () => { ... }, __('Actions')).",
    task: "Article form me ek 'Mark as Damaged' custom button add karein.",
    link: "https://frappeframework.com/docs/user/en/api/form#frmadd_custom_button",
    linkText: "Custom Buttons Guide"
  },
  {
    day: 60,
    block: "block5",
    blockName: "Block 5: Client Scripts & Hooks",
    title: "Child Table Scripting in JS",
    desc: "Child table row addition/deletion triggers: 'items_add: function(frm, cdt, cdn)', child row values read aur update karna.",
    task: "Child table me kisi item ka price badalne par Parent document ka Total Sum calculate karein.",
    link: "https://frappeframework.com/docs/user/en/guides/desk/child-table-scripts",
    linkText: "Child Table Scripting"
  },
  {
    day: 61,
    block: "block5",
    blockName: "Block 5: Client Scripts & Hooks",
    title: "Whitelisted Python Methods (@frappe.whitelist)",
    desc: "Python function ko API endpoint banana using '@frappe.whitelist()'. Client JS se call karne ke liye zaroori hai.",
    task: "Ek custom function banayein jo calculate_late_fine(days) return kare.",
    link: "https://frappeframework.com/docs/user/en/api/whitelist",
    linkText: "Whitelisted Methods Reference"
  },
  {
    day: 62,
    block: "block5",
    blockName: "Block 5: Client Scripts & Hooks",
    title: "Client to Server Call: frappe.call()",
    desc: "Client script se backend call karna: frappe.call({ method: 'my_app.api.my_func', args: { ... }, callback: (r) => { ... } }).",
    task: "Custom button click par backend method call karke server ka response form par alert me dikhayein.",
    link: "https://frappeframework.com/docs/user/en/api/client-server",
    linkText: "frappe.call Documentation"
  },
  {
    day: 63,
    block: "block5",
    blockName: "Block 5: Client Scripts & Hooks",
    title: "Frappe Dialogs (Custom Pop-up Modals)",
    desc: "new frappe.ui.Dialog({ title: '...', fields: [ ... ], primary_action: ... }) se custom modal pop-up banana.",
    task: "Button click par user se 'Reason for Return' lene ke liye dialog modal render karein.",
    link: "https://frappeframework.com/docs/user/en/api/dialog",
    linkText: "Frappe Dialogs API"
  },
  {
    day: 64,
    block: "block5",
    blockName: "Block 5: Client Scripts & Hooks",
    title: "List View Scripts & Custom Indicators",
    desc: "Desk List view me custom status badges aur filters lagana (get_indicator method in doctype_list.js).",
    task: "Article list view me status 'In Stock' ke liye green dot aur 'Issued' ke liye orange dot lagayein.",
    link: "https://frappeframework.com/docs/user/en/desk/list-view",
    linkText: "List View Customization"
  },
  {
    day: 65,
    block: "block5",
    blockName: "Block 5: Client Scripts & Hooks",
    title: "hooks.py: The Heart of Frappe App (doc_events)",
    desc: "Bina standard core code modify kiye Kisi bhi DocType par code run karna: doc_events in hooks.py.",
    task: "hooks.py me 'doc_events' configure karein jo User login par welcome message log kare.",
    link: "https://frappeframework.com/docs/user/en/guides/basics/hooks",
    linkText: "hooks.py Complete Reference"
  },
  {
    day: 66,
    block: "block5",
    blockName: "Block 5: Client Scripts & Hooks",
    title: "Custom Print Formats (HTML + Jinja Templating)",
    desc: "Print Format Builder vs Raw Jinja Print Format. Document fields ko HTML template me render karna aur PDF print nikalna.",
    task: "Library Transaction ke liye sundar 'Issue Receipt' bill design karein Jinja syntax ke sath.",
    link: "https://frappeframework.com/docs/user/en/printing/jinja-print-formats",
    linkText: "Jinja Print Formats"
  },
  {
    day: 67,
    block: "block5",
    blockName: "Block 5: Client Scripts & Hooks",
    title: "Reports: Standard Report & Query Report (SQL)",
    desc: "Report Builder vs Query Report (Pure SQL query likhkar live tabular report banana).",
    task: "'Overdue Books Report' naam ka Query Report banayein jo saare delayed returns ko display kare.",
    link: "https://frappeframework.com/docs/user/en/desk/reports/query-report",
    linkText: "Query Reports Guide"
  },
  {
    day: 68,
    block: "block5",
    blockName: "Block 5: Client Scripts & Hooks",
    title: "Script Reports (Python Backend + JS Charts)",
    desc: "Advanced reports: Python backend se complex data calculation aur JS se summary number cards aur charts render karna.",
    task: "'Monthly Library Fine Collection' report banayein with bar chart.",
    link: "https://frappeframework.com/docs/user/en/desk/reports/script-report",
    linkText: "Script Reports Guide"
  },

  // --- BLOCK 6: REAL PROJECTS, ERPNEXT & JOB READINESS (Days 69 - 80) ---
  {
    day: 69,
    block: "block6",
    blockName: "Block 6: Projects & ERPNext",
    title: "Project 2: Clinic / Gym Management (Planning & Schema)",
    desc: "Nayi App: gym_management. DocTypes: Member, Trainer, Subscription Plan, Member Attendance, Workout Plan (Child table).",
    task: "bench new-app gym_management chalayein aur primary DocTypes create karein.",
    link: "https://www.youtube.com/@BuildWithHussain",
    linkText: "Build With Hussain (App Series)"
  },
  {
    day: 70,
    block: "block6",
    blockName: "Block 6: Projects & ERPNext",
    title: "Project 2: Subscription & Expiry Automation",
    desc: "Subscription plan select karne par automatic End Date calculate karna aur Payment record create karna.",
    task: "Subscription controller me automatic billing calculation logic implement karein.",
    link: "https://frappeframework.com/docs/user/en",
    linkText: "Frappe Docs Reference"
  },
  {
    day: 71,
    block: "block6",
    blockName: "Block 6: Projects & ERPNext",
    title: "Project 2: Scheduler Events (Cron Jobs in hooks.py)",
    desc: "Background scheduled tasks: scheduler_events in hooks.py (cron: daily, hourly, weekly).",
    task: "Roz subah automatically expire hone wali memberships ka status 'Expired' mark karne ka cron task likhein.",
    link: "https://frappeframework.com/docs/user/en/guides/basics/hooks#scheduler-events",
    linkText: "Scheduled Background Jobs"
  },
  {
    day: 72,
    block: "block6",
    blockName: "Block 6: Projects & ERPNext",
    title: "Project 2: Web Forms & Customer Portal",
    desc: "Non-logged-in users ke liye public website form banana: New Member Registration Web Form.",
    task: "Website par custom form publish karein aur bina Desk login ke record create karke dekhein.",
    link: "https://frappeframework.com/docs/user/en/desk/web-forms",
    linkText: "Frappe Web Forms"
  },
  {
    day: 73,
    block: "block6",
    blockName: "Block 6: Projects & ERPNext",
    title: "Project 2: Dashboard & Analytics Charts",
    desc: "Desk Dashboard page banana: Active Members vs Expired Members pie chart, Monthly Revenue bar chart.",
    task: "Gym Dashboard workspace me real-time charts add karein.",
    link: "https://frappeframework.com/docs/user/en/desk/workspace/dashboard",
    linkText: "Frappe Dashboards"
  },
  {
    day: 74,
    block: "block6",
    blockName: "Block 6: Projects & ERPNext",
    title: "ERPNext Installation & Core Modules Tour",
    desc: "Site par ERPNext install karein: 'bench get-app erpnext' aur 'bench --site mysite.local install-app erpnext'.",
    task: "Accounts, Stock, Selling, Buying modules ka basic flow samjhein.",
    link: "https://erpnext.com/docs",
    linkText: "ERPNext Official Docs"
  },
  {
    day: 75,
    block: "block6",
    blockName: "Block 6: Projects & ERPNext",
    title: "ERPNext Customization (Custom Fields & Workflows)",
    desc: "Custom Field add karna, Property Setter se core fields customize karna, Document Approval Workflows create karna.",
    task: "Sales Invoice me 'Customer WhatsApp Number' custom field aur 2-step Approval Workflow banayein.",
    link: "https://erpnext.com/docs/user/manual/en/customize-erpnext",
    linkText: "ERPNext Customization Manual"
  },
  {
    day: 76,
    block: "block6",
    blockName: "Block 6: Projects & ERPNext",
    title: "Overriding Core ERPNext Logic via hooks.py",
    desc: "Standard DocTypes (e.g. Sales Invoice) ko override_doctype_class se inherit karke apna custom validation inject karna.",
    task: "Sales Invoice validate() me custom hook likhkar minimum order value validation lagayein.",
    link: "https://frappeframework.com/docs/user/en/guides/basics/hooks#override-doctype-class",
    linkText: "Override DocType Classes"
  },
  {
    day: 77,
    block: "block6",
    blockName: "Block 6: Projects & ERPNext",
    title: "Production Deployment on Ubuntu VPS (Basics)",
    desc: "Development vs Production Bench. Ansible easy-install, Nginx reverse proxy, Supervisor process manager, SSL (Certbot).",
    task: "Production deployment guide padhein aur production commands samjhein.",
    link: "https://frappeframework.com/docs/user/en/installation#production-setup",
    linkText: "Production Setup Guide"
  },
  {
    day: 78,
    block: "block6",
    blockName: "Block 6: Projects & ERPNext",
    title: "Database Backup, Restore & Migration Management",
    desc: "'bench backup --with-files', 'bench restore', 'bench migrate' aur patches.txt se schema updates apply karna.",
    task: "Apne local site ka complete backup lein aur backup files inspect karein.",
    link: "https://frappeframework.com/docs/user/en/bench/commands#backup",
    linkText: "Bench Backup & Restore"
  },
  {
    day: 79,
    block: "block6",
    blockName: "Block 6: Projects & ERPNext",
    title: "GitHub Portfolio & README Documentation",
    desc: "Apne dono projects (Library Management & Gym Management) ke GitHub repositories ko clean README, screenshots aur setup guide ke sath polish karein.",
    task: "Ek professional portfolio repository banayein jisme dono apps listed hon.",
    link: "https://github.com/",
    linkText: "Polish GitHub Repositories"
  },
  {
    day: 80,
    block: "block6",
    blockName: "Block 6: Projects & ERPNext",
    title: "Top 25 Frappe Developer Interview Questions & Graduation!",
    desc: "DocType vs Document, hooks.py, Submittable lifecycle, frappe.call, ORM performance, discuss.frappe.io community questions.",
    task: "Frappe Forum par apna intro post karein aur Junior Frappe Developer / ERPNext Consultant ke liye apply karna shuru karein!",
    link: "https://discuss.frappe.io",
    linkText: "Frappe Community & Job Board"
  }
];

// =============================================================================
// STATE & STORAGE
// =============================================================================
const STORAGE_KEY_PROGRESS = "frappe80_progress";
const STORAGE_KEY_SETTINGS = "frappe80_settings";
const STORAGE_KEY_NOTES = "frappe80_notes";

let progressState = JSON.parse(localStorage.getItem(STORAGE_KEY_PROGRESS)) || {};
let userNotes = JSON.parse(localStorage.getItem(STORAGE_KEY_NOTES)) || {};
let appSettings = JSON.parse(localStorage.getItem(STORAGE_KEY_SETTINGS)) || {
  alarmEnabled: true,
  intervalMinutes: 120, // 2 Hours
  ringtone: "loud_alarm",
  volume: 0.9,
  lastAlarmTime: Date.now()
};

let alarmIntervalTimer = null;
let countdownTimer = null;
let currentFilter = "all";
let searchQuery = "";
let audioContext = null;
let activeSoundLoop = null;

// =============================================================================
// WEB AUDIO SYNTHESIZER (NO EXTERNAL MP3 NEEDED - WORKS 100% OFFLINE)
// =============================================================================
function getAudioContext() {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioCtx();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
  return audioContext;
}

function playSynthesizedSound(ringtoneType, durationSeconds = 3, loop = false) {
  try {
    const ctx = getAudioContext();
    const volume = parseFloat(appSettings.volume || 0.9);

    if (activeSoundLoop) {
      clearInterval(activeSoundLoop);
      activeSoundLoop = null;
    }

    const playTone = () => {
      const now = ctx.currentTime;

      if (ringtoneType === "loud_alarm") {
        // High-pitched loud emergency alarm (alternating 880Hz and 1200Hz)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = "sawtooth";
        osc2.type = "square";

        osc1.frequency.setValueAtTime(880, now);
        osc1.frequency.linearRampToValueAtTime(1200, now + 0.15);
        osc1.frequency.linearRampToValueAtTime(880, now + 0.3);

        osc2.frequency.setValueAtTime(440, now);

        gain.gain.setValueAtTime(volume * 0.8, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.35);
        osc2.stop(now + 0.35);

      } else if (ringtoneType === "school_bell") {
        // Resonant ringing school bell
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(1560, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.6);

        gain.gain.setValueAtTime(volume, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.6);

      } else if (ringtoneType === "cyber_siren") {
        // Sci-fi warning sweep
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(1600, now + 0.4);

        gain.gain.setValueAtTime(volume * 0.7, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.45);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.45);

      } else if (ringtoneType === "energetic_chime") {
        // Musical ascending arpeggio (C5 - E5 - G5 - C6)
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, now + idx * 0.1);
          gain.gain.setValueAtTime(volume * 0.6, now + idx * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.3);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.1);
          osc.stop(now + idx * 0.1 + 0.35);
        });

      } else if (ringtoneType === "urgent_beep") {
        // Fast triple beeps
        for (let i = 0; i < 3; i++) {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "square";
          osc.frequency.setValueAtTime(1000, now + i * 0.12);
          gain.gain.setValueAtTime(volume * 0.7, now + i * 0.12);
          gain.gain.setValueAtTime(0.001, now + i * 0.12 + 0.08);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.12);
          osc.stop(now + i * 0.12 + 0.09);
        }
      }
    };

    playTone();

    if (loop) {
      activeSoundLoop = setInterval(() => {
        playTone();
      }, 700);
    }
  } catch (err) {
    console.error("Audio playback error:", err);
  }
}

function stopAlarmSound() {
  if (activeSoundLoop) {
    clearInterval(activeSoundLoop);
    activeSoundLoop = null;
  }
}

// =============================================================================
// DESKTOP & MOBILE SERVICE WORKER NOTIFICATIONS
// =============================================================================
let swRegistration = null;
let deferredInstallPrompt = null;

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .then((reg) => {
        console.log("[PWA] Service Worker registered successfully:", reg.scope);
        swRegistration = reg;
      })
      .catch((err) => {
        console.warn("[PWA] Service Worker registration failed:", err);
      });
  });
}

// Handle Mobile "Install App" Prompt
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const installBtn = document.getElementById("btnInstallApp");
  if (installBtn) {
    installBtn.style.display = "inline-flex";
    installBtn.addEventListener("click", () => {
      deferredInstallPrompt.prompt();
      deferredInstallPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("[PWA] User accepted mobile app installation");
          installBtn.style.display = "none";
        }
        deferredInstallPrompt = null;
      });
    });
  }
});

function requestNotificationPermission() {
  if (!("Notification" in window)) {
    alert("Aapka browser desktop/mobile notifications support nahi karta. In-app alarm alert chalega!");
    return;
  }

  Notification.requestPermission().then(permission => {
    const btn = document.getElementById("btnRequestNotification");
    if (permission === "granted") {
      btn.textContent = "✅ Alerts Active";
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-success");
      
      // Send immediate test confirmation notification
      sendNotification(
        "🎉 Frappe Mobile Alert Activated!",
        "Har 2 ghante me aapke phone par ghanti bajeegi aur notification aayegi!"
      );
    } else {
      btn.textContent = "❌ Blocked";
      btn.classList.add("btn-danger");
    }
  });
}

function sendNotification(title, body, day) {
  // Mobile Phone Vibration
  if ("vibrate" in navigator) {
    try {
      navigator.vibrate([300, 100, 300, 100, 400]);
    } catch (e) {
      console.warn("Vibration error:", e);
    }
  }

  // 1. First try Service Worker (Best for Android Phone background notification)
  if (navigator.serviceWorker && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: "TRIGGER_ALARM_NOTIFICATION",
      title: title,
      body: body,
      day: day
    });
    return;
  }

  // 2. Fallback to Service Worker Registration directly
  if (swRegistration && "showNotification" in swRegistration) {
    swRegistration.showNotification(title, {
      body: body,
      icon: "./icon-192.svg",
      badge: "./icon-192.svg",
      tag: "frappe-daily-alarm",
      renotify: true,
      requireInteraction: true,
      vibrate: [300, 100, 300, 100, 400]
    });
    return;
  }

  // 3. Fallback to standard Window Notification
  if ("Notification" in window && Notification.permission === "granted") {
    try {
      new Notification(title, {
        body: body,
        icon: "./icon-192.svg",
        requireInteraction: true
      });
    } catch (e) {
      console.warn("Standard notification fallback error:", e);
    }
  }
}

function triggerUrgentAlarm() {
  // Find current pending day
  const currentPending = CURRICULUM_DATA.find(d => !progressState[d.day]);

  if (!currentPending) {
    // All 80 days done!
    return;
  }

  // Play loud loop sound
  playSynthesizedSound(appSettings.ringtone, 30, true);

  // Phone vibrate
  if ("vibrate" in navigator) {
    try {
      navigator.vibrate([500, 200, 500, 200, 800]);
    } catch (e) {}
  }

  // Fill in modal
  document.getElementById("modalDayBadge").textContent = `Day ${currentPending.day} Pending!`;
  document.getElementById("modalDayTitle").textContent = currentPending.title;
  document.getElementById("modalDayDesc").textContent = currentPending.desc;
  document.getElementById("modalDayTask").textContent = `👉 Aaj Ka Task: ${currentPending.task}`;

  // Show modal
  document.getElementById("alarmModalBackdrop").classList.add("active");

  // Send desktop and mobile notification with exact details
  sendNotification(
    `⏰ UTHO! Frappe Day ${currentPending.day} Pending Hai!`,
    `Aaj ka topic: ${currentPending.title}. Utho aur practice task complete karo!`,
    currentPending.day
  );

  // Reset next alarm time
  appSettings.lastAlarmTime = Date.now();
  saveSettings();
}

// =============================================================================
// TIMER ENGINE (EVERY 2 HOURS)
// =============================================================================
function startAlarmTimer() {
  if (alarmIntervalTimer) clearInterval(alarmIntervalTimer);
  if (countdownTimer) clearInterval(countdownTimer);

  const intervalMs = (parseInt(appSettings.intervalMinutes) || 120) * 60 * 1000;

  // Check every 10 seconds if interval passed
  alarmIntervalTimer = setInterval(() => {
    if (!appSettings.alarmEnabled) return;

    const now = Date.now();
    const elapsed = now - appSettings.lastAlarmTime;

    if (elapsed >= intervalMs) {
      triggerUrgentAlarm();
    }
  }, 10000);

  // Update countdown display every second
  countdownTimer = setInterval(() => {
    updateCountdownUI();
  }, 1000);

  updateCountdownUI();
}

function updateCountdownUI() {
  const countdownEl = document.getElementById("nextAlarmCountdown");
  const dotEl = document.getElementById("alarmDot");
  const titleEl = document.getElementById("alarmStatusTitle");

  if (!appSettings.alarmEnabled) {
    countdownEl.textContent = "Alarm paused hai";
    dotEl.classList.add("paused");
    titleEl.textContent = "Alarm Paused";
    return;
  }

  dotEl.classList.remove("paused");
  titleEl.textContent = `Alarm Active: Har ${appSettings.intervalMinutes} Mins me Reminder`;

  const intervalMs = (parseInt(appSettings.intervalMinutes) || 120) * 60 * 1000;
  const now = Date.now();
  const elapsed = now - appSettings.lastAlarmTime;
  const remainingMs = Math.max(0, intervalMs - elapsed);

  const hours = Math.floor(remainingMs / (1000 * 60 * 60));
  const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingMs % (1000 * 60)) / 1000);

  const formatted = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  countdownEl.textContent = `Agla alarm: ${formatted} baad`;
}

// =============================================================================
// RENDERING DAYS & PROGRESS
// =============================================================================
function renderCurriculum() {
  const container = document.getElementById("daysList");
  container.innerHTML = "";

  const filtered = CURRICULUM_DATA.filter(item => {
    // Filter tab
    if (currentFilter === "pending" && progressState[item.day]) return false;
    if (currentFilter === "completed" && !progressState[item.day]) return false;
    if (currentFilter.startsWith("block") && item.block !== currentFilter) return false;

    // Search query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const match = item.title.toLowerCase().includes(q) ||
                    item.desc.toLowerCase().includes(q) ||
                    item.task.toLowerCase().includes(q) ||
                    `day ${item.day}`.includes(q);
      if (!match) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <p style="font-size: 1.2rem;">Koi topic nahi mila matching filter.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetFilters()" style="margin-top: 10px;">Filter Reset Karein</button>
      </div>
    `;
    return;
  }

  // Find next pending day for highlight
  const firstPending = CURRICULUM_DATA.find(d => !progressState[d.day]);

  filtered.forEach(item => {
    const isCompleted = !!progressState[item.day];
    const isCurrentTarget = firstPending && firstPending.day === item.day;
    const noteText = userNotes[item.day] || "";

    const card = document.createElement("div");
    card.className = `day-card ${isCompleted ? "completed" : ""} ${isCurrentTarget ? "current-target" : ""}`;
    card.id = `dayCard-${item.day}`;

    card.innerHTML = `
      <div class="day-check-col">
        <button class="custom-checkbox" onclick="toggleDayProgress(${item.day})" title="${isCompleted ? 'Mark Pending' : 'Mark Completed'}">
          ${isCompleted ? "✓" : ""}
        </button>
      </div>

      <div class="day-content-col">
        <div class="day-card-header">
          <div class="day-meta">
            <span class="day-number">DAY ${item.day}</span>
            <span class="block-badge badge-${item.block}">${item.blockName}</span>
          </div>
          <span class="status-pill ${isCompleted ? "done" : "pending"}">
            ${isCompleted ? "✅ Completed" : "⏳ Pending"}
          </span>
        </div>

        <h3 class="day-title">${item.title}</h3>
        <p class="day-desc">${item.desc}</p>

        <div class="day-task-box">
          <strong>💻 Aaj Ka Task:</strong> ${item.task}
        </div>

        <div class="day-footer">
          <a href="${item.link}" target="_blank" class="resource-link">
            📖 ${item.linkText} ↗
          </a>
          <button class="notes-toggle-btn" onclick="toggleNotes(${item.day})">
            📝 ${noteText ? "Notes Added (Edit)" : "+ Add Note"}
          </button>
        </div>

        <div class="notes-input-area ${noteText ? "active" : ""}" id="notesArea-${item.day}">
          <textarea class="notes-textarea" placeholder="Aaj ka key learning ya error yahan likhein..." onchange="saveNote(${item.day}, this.value)">${noteText}</textarea>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  updateStats();
}

function toggleDayProgress(dayNum) {
  // Play quick pleasant ding when marked complete
  if (!progressState[dayNum]) {
    playSynthesizedSound("energetic_chime", 0.5);
  }

  progressState[dayNum] = !progressState[dayNum];
  if (!progressState[dayNum]) {
    delete progressState[dayNum];
  }

  localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progressState));
  renderCurriculum();
}

function updateStats() {
  const totalDays = CURRICULUM_DATA.length;
  const completedCount = Object.keys(progressState).length;
  const percent = Math.round((completedCount / totalDays) * 100);

  document.getElementById("progressPercent").textContent = `${percent}%`;
  document.getElementById("progressRatio").textContent = `${completedCount} / ${totalDays} Din Complete`;
  document.getElementById("progressBarFill").style.width = `${percent}%`;

  // Streak calculation
  let streak = 0;
  for (let i = 1; i <= totalDays; i++) {
    if (progressState[i]) streak++;
    else break;
  }
  document.getElementById("streakCount").textContent = `🔥 ${streak} Din`;

  // Current Target Day
  const firstPending = CURRICULUM_DATA.find(d => !progressState[d.day]);
  if (firstPending) {
    document.getElementById("currentDayFocus").textContent = `Day ${firstPending.day}`;
    document.getElementById("currentDayTopic").textContent = firstPending.title;
  } else {
    document.getElementById("currentDayFocus").textContent = `All Done! 🎉`;
    document.getElementById("currentDayTopic").textContent = `Aap Ready Hain! 🚀`;
  }
}

function toggleNotes(dayNum) {
  const area = document.getElementById(`notesArea-${dayNum}`);
  if (area) {
    area.classList.toggle("active");
    if (area.classList.contains("active")) {
      const textarea = area.querySelector("textarea");
      textarea && textarea.focus();
    }
  }
}

function saveNote(dayNum, text) {
  if (text.trim()) {
    userNotes[dayNum] = text;
  } else {
    delete userNotes[dayNum];
  }
  localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(userNotes));
}

function resetFilters() {
  currentFilter = "all";
  searchQuery = "";
  document.getElementById("searchInput").value = "";
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  document.querySelector('.filter-btn[data-filter="all"]').classList.add("active");
  renderCurriculum();
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(appSettings));
}

// =============================================================================
// EVENT LISTENERS & SETUP
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Sync UI with settings
  document.getElementById("intervalSelect").value = appSettings.intervalMinutes;
  document.getElementById("ringtoneSelect").value = appSettings.ringtone;
  document.getElementById("volumeSlider").value = appSettings.volume;

  // Interval Change
  document.getElementById("intervalSelect").addEventListener("change", (e) => {
    appSettings.intervalMinutes = parseInt(e.target.value);
    appSettings.lastAlarmTime = Date.now();
    saveSettings();
    updateCountdownUI();
  });

  // Ringtone Change
  document.getElementById("ringtoneSelect").addEventListener("change", (e) => {
    appSettings.ringtone = e.target.value;
    saveSettings();
    playSynthesizedSound(appSettings.ringtone, 1.5);
  });

  // Volume Change
  document.getElementById("volumeSlider").addEventListener("input", (e) => {
    appSettings.volume = parseFloat(e.target.value);
    saveSettings();
  });

  // Sound Test Button
  document.getElementById("btnTestSound").addEventListener("click", () => {
    playSynthesizedSound(appSettings.ringtone, 2);
  });

  // Alarm Toggle Button
  const btnToggle = document.getElementById("btnToggleAlarm");
  const updateToggleBtn = () => {
    if (appSettings.alarmEnabled) {
      btnToggle.textContent = "🔕 Pause Alarm";
      btnToggle.className = "btn btn-warning btn-sm";
    } else {
      btnToggle.textContent = "🔔 Resume Alarm";
      btnToggle.className = "btn btn-success btn-sm";
    }
  };
  updateToggleBtn();

  btnToggle.addEventListener("click", () => {
    appSettings.alarmEnabled = !appSettings.alarmEnabled;
    if (appSettings.alarmEnabled) {
      appSettings.lastAlarmTime = Date.now();
    }
    saveSettings();
    updateToggleBtn();
    updateCountdownUI();
  });

  // Notification Button
  document.getElementById("btnRequestNotification").addEventListener("click", () => {
    requestNotificationPermission();
  });

  // Filter Tabs
  document.getElementById("filterTabs").addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      currentFilter = e.target.dataset.filter;
      renderCurriculum();
    }
  });

  // Search Input
  document.getElementById("searchInput").addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderCurriculum();
  });

  // Jump to Next Pending Day
  document.getElementById("btnJumpNext").addEventListener("click", () => {
    const firstPending = CURRICULUM_DATA.find(d => !progressState[d.day]);
    if (firstPending) {
      currentFilter = "all";
      searchQuery = "";
      renderCurriculum();
      const el = document.getElementById(`dayCard-${firstPending.day}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.boxShadow = "0 0 30px rgba(59, 130, 246, 0.8)";
        setTimeout(() => el.style.boxShadow = "", 2500);
      }
    } else {
      alert("🎉 Mubarak ho! Saare 80 din complete ho chuke hain!");
    }
  });

  // Reset All
  document.getElementById("btnResetProgress").addEventListener("click", () => {
    if (confirm("Kya aap sach me sara progress reset karna chahte hain?")) {
      progressState = {};
      localStorage.removeItem(STORAGE_KEY_PROGRESS);
      renderCurriculum();
    }
  });

  // Modal Buttons
  document.getElementById("btnModalDismiss").addEventListener("click", () => {
    stopAlarmSound();
    document.getElementById("alarmModalBackdrop").classList.remove("active");
  });

  document.getElementById("btnModalSnooze").addEventListener("click", () => {
    stopAlarmSound();
    document.getElementById("alarmModalBackdrop").classList.remove("active");
    // Snooze for 15 minutes
    appSettings.lastAlarmTime = Date.now() - (appSettings.intervalMinutes - 15) * 60 * 1000;
    saveSettings();
    updateCountdownUI();
  });

  document.getElementById("btnModalComplete").addEventListener("click", () => {
    stopAlarmSound();
    document.getElementById("alarmModalBackdrop").classList.remove("active");
    const currentPending = CURRICULUM_DATA.find(d => !progressState[d.day]);
    if (currentPending) {
      toggleDayProgress(currentPending.day);
    }
  });

  // Initial render & timer start
  renderCurriculum();
  startAlarmTimer();

  // Check notification permission status
  if ("Notification" in window && Notification.permission === "granted") {
    const btn = document.getElementById("btnRequestNotification");
    btn.textContent = "✅ Notifications Active";
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-success");
  }
});
