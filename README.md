# SecondChallenge

## Table of Contents
* [General Info](https://github.com/RobertoFORTs/SecondChallenge/tree/development#general-info)
* [Technologies](https://github.com/RobertoFORTs/SecondChallenge/tree/development#technologies)
* [Deploy](https://github.com/RobertoFORTs/SecondChallenge/tree/development#deploy)
* [Setup](https://github.com/RobertoFORTs/SecondChallenge/tree/development#setup)
* [Features](https://github.com/RobertoFORTs/SecondChallenge/tree/development#features)
* [Document](https://github.com/RobertoFORTs/SecondChallenge/blob/development/README.md#document)


## General Info
This is a training project to learn building a node.js mongoose API.

In this project. An user is able to create itself and then start building a planner to organize his week. The user only gain acces to any funcionality of the project if he is logged in and can only access his personal planner. To login, he can either create itself(automatically), which means he is using the project the first time, or use the login route.

## Technologies
Project is created with:
### Dependencies
* node.js@18.13.0 
* express@4.18.2
* bcrypt@5.1.0
* dotenv@16.0.3
* express@4.18.2
* express-async-errors@3.1.1
* joi@17.8.3
* jsonwebtoken@9.0.0
* mongoose@7.0.1
* swagger-jsdoc@6.2.8
* swagger-ui-express@4.6.2
* util@0.12.5

### devDependencies
* "@types/bcrypt": "^5.0.0"
* "@types/express": "^4.17.17"
* "@types/jsonwebtoken": "^9.0.1"
* "@types/mongoose": "^5.11.97"
* "@types/swagger-ui-express": "^4.1.3"
* "ts-node-dev": "^2.0.0"
* "typescript": "^4.9.5"

## Deploy
<secondchallenge-production.up.railway.app>

## Setup
Please see the appropriate guide for the enviroment of choice.

To run this project, install locally usign npm:

If you only downloaded the repository, use in the same repository directory:

```npm install```

For Dependencies:

```npm i "packageName@version"```

For devDependencies:

```npm i @types/"packageName" -D```

```npm i "packageName@version" -D```

**To start the project locally, use:**

```npm start``` in the terminal

Besides that, you can also install and use Postman or any other client simulator to send requests

### Routes 
**For every Route, there will be a variable {{URL}} which stands for "localhost:port/api/v1"**

**For every route you will have to set an Authorization header of type Bearer Token. That means you have to either Log In or Create an User(automatically logs in) to have access to any route**

e.g.:

![image](https://user-images.githubusercontent.com/114432972/224572652-effaec36-0d0a-4835-afbb-1c64cba49113.png)
--------------------------------------------------------------
**Another important setup for your postman is(This should be applied only in Sign in and Sign Up routes):**

![image](https://user-images.githubusercontent.com/114432972/224577983-cb42b184-c069-4376-8094-92918da81357.png)

--------------------------------------------------------------
**Notice that If you try to login beeing already logged, there should appear a message that says: User is already logged in!! Logging off current user. If it does not apper, maybe you haven't set a enviroment variable "jwt", as in the following image:**

![image](https://user-images.githubusercontent.com/114432972/224577769-ac250fb2-591d-45d2-bfaf-8fbba6855073.png)

--------------------------------------------------------------

#### Event Routes
--------------------------------------------------------------

```{{URL}}/events/allEvents```
 * For geting All Events(get request)
 
 e.g.:
 
 ![image](https://user-images.githubusercontent.com/114432972/224573598-5da7b160-e67a-4017-ad9a-c678ad1df475.png)

--------------------------------------------------------------

```{{URL}}/events```
 * For creating an Event(post request)
 
 e.g.:
 
 ![image](https://user-images.githubusercontent.com/114432972/224573733-d8626462-1fa8-4e3b-a316-64621ffce927.png)

--------------------------------------------------------------
 
```{{URL}}/events/dayOfWeek?dayOfWeek=xyz```
 * For  getting Events On Week Day(get request)
 
 e.g.:
 
 ![image](https://user-images.githubusercontent.com/114432972/224573828-81d4e06e-89aa-4c39-81df-2d8820ca2112.png)

--------------------------------------------------------------

 * For deleting Events From Week Day(delete request)
 
 e.g.:
 
 ![image](https://user-images.githubusercontent.com/114432972/224574316-16698b80-3b3d-40e8-900b-4a59f3f4bf5d.png)

--------------------------------------------------------------
  
```{{URL}}/events/:id```
 *  For getting an Event By Id(get request) 
 
  e.g.:
  
  ![image](https://user-images.githubusercontent.com/114432972/224574394-3dbd08fd-854a-449b-8998-0f4273995d38.png)

--------------------------------------------------------------
 
 ```{{URL}}/events/event/:id```
 *  For deleting an Event By Id(delete request)
 
 e.g.:
 
  ![image](https://user-images.githubusercontent.com/114432972/224574528-68d57f57-8f98-4150-b777-809da56dd9b6.png)

 --------------------------------------------------------------
 
#### User Routes
 --------------------------------------------------------------
```{{URL}}/users/signUp```
 * For signing User Up(post request)
 
 request e.g.:
 
 ![image](https://user-images.githubusercontent.com/114432972/224571942-404e13b4-ebd7-4de4-b7d6-dbfa6fc5ad21.png)


 response e.g.:
 
 ![image](https://user-images.githubusercontent.com/114432972/224572064-f6a37019-a59d-4b21-85d5-fa3a9beba93b.png)

 --------------------------------------------------------------  
```{{URL}}/users/signIn```
 * For signing User In(post request)
 
 e.g.:
 
 ![image](https://user-images.githubusercontent.com/114432972/224572278-da8af10e-8c78-443e-91ee-0ff3e29abe33.png)

 --------------------------------------------------------------
```{{URL}}/users/update```
* For updating user data(post request)

e.g.:

![image](https://user-images.githubusercontent.com/114432972/224575347-10ce1b46-9aec-4fe8-8485-ba8e64260ac3.png)


 --------------------------------------------------------------
 ```{{URL}}/users/delete```
* For deleting an user(delete request)

e.g.:

![image](https://user-images.githubusercontent.com/114432972/224575396-c9613a3b-2b1c-4995-ae13-22f542ccfbc3.png)


--------------------------------------------------------------
## Document

Swagger documentation:
<http://localhost:8000/apiDocs/>

Postman documentation:
<https://documenter.getpostman.com/view/26268056/2s93JtRPTn>

--------------------------------------------------------------
## Features
* Get all events of the user
* Get events of week day of the user
* Get events by id (will get only one of the users event that correspond to the id passed in the param)
* Create an event
* Delete event by its id
* Delete all events of a week day
* Create an user
* Sign a user in
* The user is able to update his personal data
* The user is able to delete itself if requested
