![workflow status](https://github.com/csci0312-f22/project-kakapo/actions/workflows/node.js.yml/badge.svg)

# __BRIEF DESCRIPTION__
A proficiency tracker for use in a classroom setting, by both students and professors.

# __DEPLOYED VERSION LINK__:
> [(https://project-kakapo.web.app)]

# __AUTHOR__
Smith Gakuya

# __COLLABORATORS__
Evey Kriter, Danzan Achit-Erdene, Nellie Zhang, Kent Canonigo, Blair Jia, Julia Fairbank

# __USAGE__
## ***Deployed Version (Less Features)***:

1. Click the login button and create a new account if you are a new user or use your former credential if returning.
2. Select the learning goals (1-4) you would wish to be tested on and begin the quiz. Topics range from Pokemon to animals.
3. Click on the choices to select you answers and then click submit once you are done. 
4. You will then see if your guesses were correct or incorrect. Correct guesses are green while incorrect guesses are red. Correct answers will not be shown if you guess incorrectly or don't answer.
5. You can logout once you are done by clicking on the icon on the top right hand corner

***Bugs***
1. Routing to pages from the search bar takes you to an empty quiz page
2. Instructor view when logging in doesn't route to the correct page

##***Local Version (More Features)***:
After opening directory with files install dependencies by running
> npm install

Open the database and authentication emulators by running:
> firebase emulators:start

*Note: Emulators by default are set to use the ports 5000, 9099 and 8000. To change this, open the firebase.json file and edit there*

Run the developer version of the site:
> npm run dev

Go to the link displayed in your terminal.


