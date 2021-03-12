# 📖 Initialize Projects using Node Package Manager (npm)

Work with a partner to implement the following user story:

* As a developer, I want to be able to keep track of dependencies using `npm`. 

* As a developer, I want to initialize my project and create a `package.json` file.

* As a developer, I want to be able to save packages to my project.

## Acceptance Criteria

* It's done when I see the `package.json` file created in the [Unsolved](./Unsolved/) folder.

* It's done when I have installed the `inquirer` package successfully and see it listed in the `package.json` file.

* It's done when I see the `node_modules` folder and `package-lock.json` file in the [Unsolved](./Unsolved/) folder.

## 📝 Notes

Refer to the documentation: 

* [npm-init](https://docs.npmjs.com/cli/v6/commands/npm-init)

* [npm-install](https://docs.npmjs.com/cli/v6/commands/npm-install)

## 💡 Hints

It's possible that the `node_modules` folder is hidden in the `files.exclude` setting in VS Code, so don't let that throw you off if you don't see it.

## 🏆 Bonus

# npm init

In this activity, you will initialize your first Node project using `npm` and install (and save) the `inquirer` package.


## Instructions

* From the command line, run `npm init`. 

    * 🎗 Remember to run the command from within your working directory. 

* Follow the prompts and enter the following: 

    * package-name

    * version number

    * description

    * entry point

    * git repository

    * keywords

    * author

    * license
    

* Once your `package.json` file is created, run `npm install inquirer --save` to install our dependency.  


## Bonus Bonus

* What does the `-y` flag do when running `npm init`? 

* What does the `-g` flag do when running `npm install`? 
    
    * 🎗️ With great power comes great responsibility.


---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.