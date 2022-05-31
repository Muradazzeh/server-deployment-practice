# server-deployment-practice

**This is the all links for my work**

* this is the link for Heroku deployed server on dev branch
[link for dev deploy](https://murad-server-deploy-dev.herokuapp.com/)
* this is the pull request from git hub 
[link pull request](https://github.com/Muradazzeh/server-deployment-practice/pull/1)
* this is the link for deployed main branch 
[link for maindeploy](https://murad-server-deploy-prod.herokuapp.com/)
* this is the link for git gub action 
[link for action](https://github.com/Muradazzeh/server-deployment-practice/actions)
* this the link for main repo 
[link for main repo](https://github.com/Muradazzeh/server-deployment-practice)
******************************

* We started the Advance level with building server useing node js , and Express frame work 

> note the different between librrary and frame work :
library smaller than the frame work it help me throw project and i can control it is code .
on ather hand ***framework*** large plate form it will control the code and the flow 

* also we talked about ***CI*** and ***CD*** :
1. CI : Continous integration it is to write test for our code before writting code , so we can mange our code 
2. CD : Continuous delivery is is extintion of CI automatically deploys all code changes to production environment.

* Also we talked about TDD : test driven development : it is simply to make test package for your code .

we started from Git hub After creating Repo => go to Action => search for node js=>it will  creat ***YML*** file for testing 


* after that we clone the repo locally and we start to setup our server .
    - => npm init -y
    - => npm i dotenv express 
* then we creat server.js and required the express and dotenv and we start to prepar routes as show below .

![link](./servImage/Screenshot%20(125).png)

* After creating routes and testing it locally , we have to get all data correctlly as shown.

![link](./servImage/Screenshot%20(126).png)

* after that we handle error 404 and 500 :
    - in the 404 error we have to check all routes not in use so it will give not found massage .

 ![link](./servImage/Screenshot%20(127).png)

 * then we have to create our testing "jest": in the terminal 
    - => npm i -d jest 
    - => npm i -d supertest 
    - then we create __ test __ folder and inside it we create server.test.js 

* After we finish write test code we do npm test to check our app , and i got the result as showen below : all test ok 
![link](./servImage/Screenshot%20(123).png)

* then we do ACP to Git hub and we see all test pass online the we can merge it to main as showen below :
![link](./servImage/Screenshot%20(128).png)

* Finally we check the deployed virsion on heroku , both branches main and dev 
![link](./servImage/Screenshot%20(124).png)

* this is the git hub action 
![link](./servImage/Screenshot%20(136).png)



> note that : I got a massage from heroku that automatic deployment reached limit 



