# myVegan Buddy

A four-page web app featuring a search engine to aid vegans on finding recipes and nutritional information.



### Motivation

> When I first turned vegan, I struggled for a while and lost a lot of time trying to plan my meals and recipes, and I wish I had a platform to speed up the process. With that idea in mind, I've designed the app I wish I had when I first started eating plant-based food.
### Description

> My Vegan Buddy is a virtual pal who helps both vegans and meat eaters to find vegan recipes and their nutritional information. It conveys an easy way to become and remain suffering-free. 

---

#### User Stories

> - _"I've tried to turn vegan a few times, but its so hard to do it without planning! I wish there was a platform where I could simply type the ingredients I have and it turn out with bunch of recipes to try it."_
> - _"My partner is vegan, and I always spend ages trying to find the best recipe to cook for her. It'd be awesome if there's a way for me to have different ideas with a simple tap of my finger."_
> - _"My friends and I are all big gym goers, and I've been trying to convince them to turn vegan for ages now, but it is so difficult to find resources out there that have (real) nutritional information online."_
> - _"Working and studying take a lot of time, so cooking is not always possible - being vegan, that means my options are often reduced. I'd like to be able to find new ideas that fit in my schedule."_

> - _"I have a severe nut allergy, so I usually spend a lot of time researching about recipes, often looking for detailed information. It'd be handy if I could find recipes matching different options, such as allergens and ingredients."_

---

### UX

> - My Vegan Buddy is a platform aimed at everyone trying to find vegan recipes. It is meant to be an aid for people to chose a healthier diet - it has a simple yet effective layout, with constrasting elements and an easy to understand data output.
---

#### 1. Strategy

> The goal of this project is to offer a tool which will help people make better choices when it comes to their diet.
>
> ##### Project Goals:
>
> - Offer a search engine for users to find recipes and explore a vegan diet.
>
> - Help vegans and meat-eaters to have a healthier lifestyle that fits in their schedule.
>
> - Disseminate a vegan lifestyle.
>
> ##### Customer Goals:
>
> - Layout using Mobile-first approach.
> - Clear and well-displayed content for a straightforward and quick search.
> - Find nutritional information relevant to each recipe.
> - Footer supplying links to Social Media.
> - Effortless way to sign-up for newsletter service.
> - Reduced time to load the app and content, for an enhanced experience.

#### 2. Scope

> The focus here is to achieve a version of the website with just enough features to be usable - the concept of Minimum viable product (MVP), that contains:
>
> - Search engine to find vegan recipes, with options to search for them by name or ingredient.
> - Nutritional information of the recipe.
> - Rating system, time for cooking and portion size for each recipe.
> - Refined search to further filter results from the database.

#### 3. Structure

> Due to the complexity of the data that we mean to present to the user, the structure plan was thought-through from the simplest standpoint possible, that is, to present the data in a layout that is already known by the user.
> The concept of search engines and how the results are presented are well-known to the user - the same goes for culinary recipes. Traditionally, this type of content follows a straightforward path and thats how we conveyed the content and the structure for the app.

#### 4. Skeleton

> - [Wire frames](assets/docs/wireframes.pdf): Four-page website.
>
> - Home, Refined Search, About, Results and Recipe pages.
>
> - Sticky navigation bar - Links to each page.
>
> - Footer with social media link and copyrights.

---

#### 5. Surface

> I used old cookbooks as an inspiration, and all of them had a clean laytout, mild tonalities to increase the constrast with the images of the recipes.

> ##### Colours
>
> - I've opted for clean mild palettes such as light brown(#ddbea9) and fucshia (#fec5bb) for the nav bar and the footer.
> - For the elements of the layout, I picked a whitesmoke and clean palette to follow convention.
> - For body text, I've used a combination of shades of black. 
> - For the button togglers and I've a bright orange mixed with a vivid green.

> ##### Typography
> 
> - "Nunito" font (with fall-back font of Sans-Serif) for body content.
> - "Yusei Magic" for recipe headers and titles(fall-back font of Sans-Serif).
> ##### Images
>
> - Images are particular to each recipe and are hosted by the API itself [https://rapidapi.com/user/spoonacular].
> 
---

### Features

##### Existing Features

> - Designed with HTML5, CSS3, JavaScript and Bootstrap.
> - Sticky navigation bar allows the user to easily navigate between pages.
> - Footer allows the user quick accessibility to social media links.
> - About page describing the project.
> - Connected to Spoonacular API [https://rapidapi.com/user/spoonacular].
> - Search engine to find recipes, according to available ingredients.
> - Breadcrumbs on Result and Recipe pages to easily navigate through recipes.
> - Recommendation of the day widget, to select random recipes and recommend to the user.
> - Refined search page to filter results.
> - Collapsible nutritional information table.

##### Features to implement

> - Sign-in page to save favourite recipes, create meal plan and personalised macros.
> - Add endpoint to recommend a wine pairing with the recipe. 

---

### Technologies Used

##### 1. Languages

> - [HTML5](https://en.wikipedia.org/wiki/HTML5)
>
> - [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
>
> - [JavaScript](https://www.javascript.com/)

##### 2. Integrations

> - [Bootstrap](https://getbootstrap.com/) - Classes for the overall layout of the website
>
> - [Bootstrap CDN](https://www.bootstrapcdn.com/)
>
> - [FontAwesome](https://fontawesome.com/) - Card Icons, footer social media links
>
> - [Google Fonts](https://fonts.google.com/) - Typography
>
> - [jQuery](https://jquery.com/) - JavaScript Library
>
> - [RapidAPI](https://rapidapi.com/marketplace) - Spoonacular API 
##### 3. Workspace, version control and Repository storage

> - [VSCode](https://code.visualstudio.com/) - IDE
>
> - [Git](https://git-scm.com/) - Version Control
>
> - [GitHub](https://github.com/) - Repository Storage

##### 4. Other

> - [Autoprefixer](https://autoprefixer.github.io/) Parses CSS and adds vendor prefixes.
>
> - [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) Mobile-friendly check on site.
>
> - [Website Page Test](https://www.webpagetest.org/) Runs a website speed test from multiple locations around the globe using real browsers (IE and Chrome) and at real consumer connection speeds. 
>
> - [Online-Spellcheck](https://www.online-spellcheck.com/) Online spelling and grammar checks.


### Resources

> - [Code Institute Course Content](https://courses.codeinstitute.net/) - Primary resource for this project.
> - [Balsamiq](https://balsamiq.com/wireframes/) - Wire framing design tool.
> - [Bootsrap Grid Explanation by Anna Greaves](https://ajgreaves.github.io/bootstrap-grid-demo/) - Resource for Bootstrap Grids.
> - [Stack Overflow](https://stackoverflow.com/) - Common questions.
> - [Youtube](https://www.youtube.com/) - Tutorials.
> - [CSS-Tricks](https://css-tricks.com/) - Quick CSS resources.
> - [Common Mark](https://commonmark.org/help/) - For Markdown language reference.
> - [Grid Citters](https://gridcritters.com/) - To learn CSS Grid technology.
> - [Coolors](https://coolors.co/) - Colours palette research.
> - [Adobe Resize Images](https://www.adobe.com/ie/photoshop/online/resize-image.html) - Resource for resizing images
> - [Tiny PNG](https://www.tinypng.com) - Resource to compress gallery images.
> - [Markdown Tutorial](https://www.markdowntutorial.com/) - Used to learn Markdown.
> - [Behance Hend Elgohary "Daily Recipe" Concept](https://www.behance.net/gallery/108701551/Daily-Recipe) - Inspiration for the layout.
> Code Institute **SLACK Channel** - Assistance.
---

### Testing

> External testing documentation can be found following this [link](assets/docs/testing.md).

---

### Bugs and turnarounds

> - API request returned with a 404 code status, when requesting the recipe from the home page. API's endpoint was not referenced properly in the url. To solve the problem, I copied the URL from code snippet found in the  API's website [Spoonacular](https://rapidapi.com/user/spoonacular) and used string interpolation to solve the bug.
> - Ingredient list printed units without decimal precision and incorrect format when looping through data["ingredients"]. I found the solution combining two functions found in these websites: [Rounding Decimals in JavaScript](https://www.jacklmoore.com/notes/rounding-in-javascript/), [How to transform integers with decimal points into fractions](https://gist.github.com/redteam-snippets/3934258) 
> - Star rating for each recipe were not accessing pseudo-classes in CSS (:after) to change width and fill color(yellow) according to property returned from the request. Found solution on: [A Simple JavaScript Technique for Filling Star Ratings](https://webdesign.tutsplus.com/tutorials/a-simple-javascript-technique-for-filling-star-ratings--cms-29450).
> -  Script file wasn't able to find DOM Id's to be to render the recipe to another HTML page. The turnaround was offered by Victor (my mentor), by saving the target HTML element(the JSON object returned by the API and renderized as HTML) to 'localStorage', changing to another page using 'window.location.href' property and loading the saved content from 'localStorage'. 
> - Requesting information from the API through the page "refined_searhc.html" would return errors: "Illegal Invocation" and "Failed to fetch" - the first one was the error handling function that would create a modal. Hard-coded the model in a hidden state to turn around and spit the error message. Second bug occurred when creating the string to pass as parameter for the API's endpoint. Turn around was to create a hidden form element in the form object which validates user inputs to send the request. To do so, I used this tutorial: [How to Transform FormData into a Query String](https://ultimatecourses.com/blog/transform-formdata-into-query-string). After creating the string object, I chained it with a promise - followed this tutorial: [JavaScript Promise Tutorial: Resolve, Reject, and Chaining in JS and ES6](https://www.freecodecamp.org/news/javascript-es6-promises-for-beginners-resolve-reject-and-chaining-explained/).
> - Some particular recipes would come back with an "undefined" when rendering method for the recipe with the inside the function "renderRecipe", splitting the code and not loading the rest. The property [analyzedInstructions] of those recipes return and empty array. To handle the bug, I created a conditional statement to short-circuit the issue.
> - Main recipe's image and recommended recipe image would render stretched on the main axis in medium devices. Implemented media queries to shrink the ratio of the image on smaller screens.

---

### Code validity

> HTML - [W3C](https://validator.w3.org/) - Markup Validation
>
> CSS - [W3C](https://jigsaw.w3.org/css-validator/) - CSS Validation
>
> TAGS - [Closing Tag Checker for HTML5](https://www.aliciaramirez.com/closing-tags-checker/) - Validates if tags are correctly closed.
---

### Version Control

> - Used Git for version control.

---

### Deployment

This project has been deployed on GitHub Pages with the following process:

> - All code was written on VS Code, an IDE.
> - The code was then pushed to GitHub where it is stored in my [Repository](https://github.com/vinnieOrdobas/Code-Institute-MS2-myVeganBuddy).
> - Under **Settings** I scrolled down to **GitHub** Pages section.
> - Under **Source** drop-down, the **Master branch** was selected.
> - Once selected, this publishes the project to **GitHub** Pages and displays the site url.
> - There is no difference between the deployed version and the development version.

#### How to run this project locally

To clone this project into your IDE you will need:

> - A **GitHub** account. Create one [here](https://github.com/join).
> - **Google Chrome** browser.

Follow this steps:

1. Install the [Gitpod Browser Extentions for Chrome](https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki).
2. After installation, restart the browser.
3. Log into [Gitpod](https://www.gitpod.io/) with your gitpod account.
4. Navigate to the [Project GitHub repository](https://github.com/vinnieOrdobas/Code-Institute-MS2-myVeganBuddy).
5. Click the green button "Gitpod" in the top right corner of the repository.
6. This will create a gitpod workspace with the code from github where you can work locally.

To work on the project within a local IDE (such as VScode):

1. Follow this link to the [Project GitHub repository](https://github.com/vinnieOrdobas/Code-Institute-MS2-myVeganBuddy).
2. Under the repository name, click "Clone or download".
3. In the Clone with HTTPs section, copy the clone URL for the repository.
4. In your local IDE open the terminal.
5. Change the current working directory to the location where you want the cloned directory to ve made.
6. Type "git clone" on your terminal, then paste the URL of the project.
### Credits

> ##### Media
>
> - Recipe images were provided by the API.
> - Background image was taken from [Pexels](https://www.pexels.com/).
> - Logos were created by illustrious [https://www.fiverr.com/illustriouss]. 
>
> ##### Content
>
> Text content was written by myself.
>
>
>
> ##### Code Snippets
>
> - [Rounding Decimals in JavaScript](https://www.jacklmoore.com/notes/rounding-in-javascript/) - To round ingredient units.
> - [How to transform integers with decimal points into fractions](https://gist.github.com/redteam-snippets/3934258) - To transform units to fractions.
> - [Sticky Navigation bar](https://bbbootstrap.com/snippets/responsive-navigation-bar-search-box-72587512)
>
>
---

> ##### Acknowledgments
>
> I would like to thank:
>
> - **Victor Miclovich**, my Mentor, for his insights, composure and experience. His invaluable assistance helped make this project reality.
> - **Anderson Gonçalves** for taking the time to meet me and talk about this project, for tips and incredible insights, but above all, for his friendship.
> - **Sofia Pereira** for her help on the general layout of the website.
> - **CI Mentors** for helping me identify and define problems.
> - **CI staff** for their care and affableness, and for always make sure I was in the right path.
> - **Slack Community** for their help with my code, for support and to make me feel part of the community.

##### Support

> For bug resolution, please reach Vinnie Ordobas on viniordobas@icloud.com.

---