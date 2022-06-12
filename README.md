## Welcome to Open Study College's API


!! Deployed at  https://open-study-college-application.herokuapp.com/ !!

This API offers Create, Read, Update and Delete operations from the Open Study Colleges database.



Built using
 - Express
 - Typescript
 - Jest

 
 ## Set up database
 Install all dependencies with <code>npm run i</code>
In:
./.env.config
Add in your PostgreSQL database URI to the DATABASE_URL variable, then rename the file to .env

Run <code>npm run db:initialSetUp</code> to run set up scripts. 


Run the development server with <code>npm run dev</code>

## Dev

Install all dependencies with <code>npm run i</code>
Run the development server with <code>npm run dev</code>

The package.json provides useful script for quickly manipulating the database.

## Tests

Run <code>npm run test</code>

## Docs

<b>Courses:</b>
<u>GET</u>:
-<code>/courses</code> : Get all courses
-<code>/courses/courseID</code>: Get course by ID. Includes 	extra information: QandAs
	
POST:
	-<code>/courses</code>
	Requires body: 
	-courseCode:string
	-name:string
	-tag:string
	-atAGlance:JSON
	-overview:JSON
	-extrainfo:JSON
	-examDetails:JSON

PUT
-<code>/courses/courseCode</code>
Requires body: 
changeList:[column:string, newData:any]

DELETE
-<code>/courses/courseCode</code>
		


<b>QandAs</b>:
<u>GET</u>:
-<code>/qandas</code> : Get all Q and As
-<code>/qandas/qandaID</code>: Get QandA by ID. 
	
POST:
	-<code>/qandas</code>
	Requires body: 
-courseCode:string
-question:string
answer:string

PUT
-<code>/qandas/qandaID</code>
Requires body: 
changeList:[column:string, newData: any]

DELETE
-<code>/qandas/qandaID</code>




<b>Users</b>:

<u>GET</u>:
-<code>/users</code> : Get all users
-<code>/users/usersID</code>: Get user by ID. Includes 	extra information: cart
	
POST:
	-<code>/users</code>
	Requires body: 
	userID:string,
	name:string
	

PUT
-<code>/users/userID</code>
Requires body: 
changeList:[column:string, newData: any]

DELETE
-<code>/users/userID</code>

<b>Carts</b>:
<u>GET</u>:
-<code>/carts</code> : Get all carts
-<code>/carts/userID</code>: Get cart by user ID. Includes extra information: cartItems
	
POST:
	-<code>/carts</code>
	Requires body: 
	userID:string,
	totalCost:string
	

PUT
-<code>/carts/userID</code>
Requires body: 
changeList:[column:string, newData: any]

DELETE
-<code>/carts/userID</code>

<b>CartItem</b>:
<u>GET</u>:
-<code>/cartitems</code> : Get all users
-<code>/cartItems/userID</code>: Get cart items by userID.
POST:
	-<code>/cartItems</code>
	Requires body: 
	userID:string,
	courseSelected:string<courseCode>
	cost:number
	

PUT
-<code>/cartitems/cartItemID</code>
Requires body: 
changeList:[column:string, newData: any]

DELETE
-<code>/cartItems/cartItemID</code>
