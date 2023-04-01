# Contact Form with Guitar Instructional video for students / learners with reactions like facebook
# React - Frontend with Context, MongoDB, Express Js, Node Js for Backend

# Available Scripts / Commands to run the React FrontEnd & BackEnd

npm run both

  or
  
cd form
npm run start

cd backend 
npx nodemon

# Getting started with React Frontend - open your folder in Terminal

npx create-react-app form

# Create a Backend Folder inside the React App Folder - We have created the backend folder inside it only for development purpose and easy development
# Install packages in Backend Folder (cd backend)
    1. npm init 
    2. npm install express
    3. npm install mongoose
    4. npm install --save-dev nodemon
    5. npm install cors

# Frontend - install npm packages (cd form)
    
    1. npm i -D concurrently

# Include concurrently Script in scripts of package.json file of React App - Frontend to simultaneously run React App & Backend

    "both": "concurrently \"npm run start\" \"nodemon backend/index.js\""

    To Run Coomand : npm run both
    
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Backend Setup

# We are using MongoDB, Express Js, Node Js

Steps : 

1. Create a database in MongoDB to obtain your mongoURI

2. Inside Backend folder create

  i. db.js - use mongoose & mongoose.connect function to connect to your MongoDB Connection String & export the function connectToMongo
  
  ii. index.js - use express, import the exported function from db.js, run the function connectToMongo()
  
                 set the endpoints to hit the backend -
                      app.use('/api/contactform', require('./routes/contactform'))
                      
                 listen the app using - app.listen
                 
  iii. models - Create models folder, inside it create Data.js file for defining Schema using mongoose
               
  iv. routes - Create routes folder, inside it create contactform.js file for defining endpoint '/contact' using express, router, import Data from '../models/Data',                  export the router
               
               destructure the userName, email, age , etc schemas from the req.body
               
               create new Data to save the user data into Database collection userdata
               
               data.save() - command to save data in MongoDB Collection
               
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
               
# Frontend Setup

# We are using React with CSS Grid Layout

1. Include Bootstrap CSS and JavaScript in public/index.html

App.js inside src folder is the Main Components of the React App -

    Inside App.js import & it's structure
    
       <DataState>
          <Alert alert={alert}/>
          <Home showAlert={showAlert}/>
       </DataState> 
      
    Structure of Home by importing the below components
    
        <Video showAlert={props.showAlert}/>
        <Form showAlert={props.showAlert}/>

2. Create components folder in src folder
    Components folder structure -
      i. CSS Folder includes css for Instructional Video Grid, Contact Form
     ii. Home - It renders Video, Form components in it
    iii. Alert - To pop up alerts
     iV. Video - It has a CSS Grid Layout
      V. Form - Contact Form
       
3. Create context folder inside React App
      i. create contect - 'const dataContext = createContext()', export it by default
      ii. DataState.js -  import dataContext
                          create a function DataState
                          create useState hook to set the data from the contact form inputed by user by fectching the endpoint
                          
                              fetch(`${host}/api/contactform/contact`)
                              
                          Store the response in JSON.stringify format
                          Set the data in the state by concating it
                          
                          return ( <DataContext.Provider value = {{datas, addData}}>
                                          {props.children}
                                      </DataContext.Provider>
                                 )
   
4. Configuring the Contact Form using the Context -
    i. import the dataContext
   ii. useState hook - to set data
  iii. inside the form use onChange to set data which is entered in the contact form fiels
   iv. inside the submit button create a handleAddData() function to add the entered data in the contact form by the user
   
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Images Representing the Setup / How to Run :

![image](https://user-images.githubusercontent.com/112248339/229273064-a4211129-0d35-4526-a022-9488f0297bdf.png)

Backend Started :
![image](https://user-images.githubusercontent.com/112248339/229273124-68715f29-65f0-4d2a-8db6-fece0cf7c898.png)

React App Started :
![image](https://user-images.githubusercontent.com/112248339/229273167-451b8141-6ca3-47f5-90fe-d6c7172883dc.png)

React App in Chrome on localhost:3000 with backend on localhost:5000
![image](https://user-images.githubusercontent.com/112248339/229273239-733b5def-8fc5-4626-acc0-693733e62e1c.png)

![image](https://user-images.githubusercontent.com/112248339/229273370-3b4b8223-3bb3-43bd-b7d1-69e932e3b4f3.png)

# MongoDB Database before submitting the Contact Form

![image](https://user-images.githubusercontent.com/112248339/229273545-2f99f968-9666-429a-b6e8-02d961592fb2.png)

# MongoDB Database after submitting the Contact Form

  # Onclick Submit - with pop up message of submitted successfully
  
  ![image](https://user-images.githubusercontent.com/112248339/229273735-ff622fff-f257-45de-b6a4-1a74096a7645.png)
  
  # Database after successfull form submition
  
  ![image](https://user-images.githubusercontent.com/112248339/229274107-8342ec88-c774-4329-ad75-23c5b1845e39.png)
  
  ![image](https://user-images.githubusercontent.com/112248339/229273940-f70c2daf-45a1-43d4-8e17-6e7939650fd4.png)


# Thank You!!!
