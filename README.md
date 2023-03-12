# SecondChallenge

## Table of Contents
* [General Info](https://github.com/RobertoFORTs/SecondChallenge/tree/development#general-info)
* [Technologies](https://github.com/RobertoFORTs/SecondChallenge/tree/development#technologies)
* [Deploy](https://github.com/RobertoFORTs/SecondChallenge/tree/development#deploy)
* [Setup](https://github.com/RobertoFORTs/SecondChallenge/tree/development#setup)
* [Features](https://github.com/RobertoFORTs/SecondChallenge/tree/development#features)
* [Document]


## General Info
A planner to organize the week of someone. This is a training project to learn node.js and express

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
...

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

Besides that, you can also install and use Postman or any other client simulator to send requests

### Routes 

#### Event Routes

```/api/v1/events/allEvents```
 * For geting All Events(get request)
 
 * For creating an Event(post request)
 
```/api/v1/events/dayOfWeek?dayOfWeek=xyz```
 * For  getting Events On Week Day(get request)
 * For deleting Events From Week Day(delete request)
  
```/api/v1/events/:id```
 *  For getting an Event By Id(get request) 
 *  For deleting an Event By Id(delete request)
 
#### User Routes
**For every user route you will have to set an Authorization header of type Bearer Token**

e.g.:

![image](https://user-images.githubusercontent.com/114432972/224572652-effaec36-0d0a-4835-afbb-1c64cba49113.png)


```/api/v1/users/signUp```
 * For signing User Up(post request)
 
 request e.g.:
 
 ![image](https://user-images.githubusercontent.com/114432972/224571942-404e13b4-ebd7-4de4-b7d6-dbfa6fc5ad21.png)

 response e.g.:
 
 ![image](https://user-images.githubusercontent.com/114432972/224572064-f6a37019-a59d-4b21-85d5-fa3a9beba93b.png)

  
```/api/v1/users/signIn```
 * For signing User In(post request)
 
 e.g.:
 
 ![image](https://user-images.githubusercontent.com/114432972/224572278-da8af10e-8c78-443e-91ee-0ff3e29abe33.png)


```/api/v1/users```
* For updating user data(post request)

e.g.:

![image](https://user-images.githubusercontent.com/114432972/224572359-886822ac-1c01-4905-8f64-229758b24126.png)


* For deleting an user(delete request)

e.g.:

![image](https://user-images.githubusercontent.com/114432972/224572449-5cdc9c06-e216-4bfc-bd31-645cc72f8b4e.png)

 

To start the project locally, use:

```npm start``` in the terminal

##Document

## Features
* Get all events
* Get events of week day
* Get events by id
* Create an event
* Delete event by its id
* Delete all events of a week day
* Create an user
* Sign a user in
* The user is able to update his personal data
* The user is able to delete itself if requested
