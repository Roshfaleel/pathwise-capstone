# PathWise

## Overview

A web application which enables the user to visualize, track and also share their **personal and educational growth**. They will be able to track the skills and create a shareable summary which will highlight their development. The app **bridges the gap between traditional resumes and provides more in detail of lifelong learning**.

### Problem Space

Conventional resumes just highlight a person's employment history and don't highlight their ongoing education and skill development. This restriction makes it challenging for people to demonstrate their development in a comprehensive way and for businesses to evaluate applicants based on a proven learning trajectory. By providing an easy-to-use platform for recording and visualizing these milestones in a way that is both personal and professional, Pathwise addresses this issue.

### User Profile

- **Target Users**
 > Professionals and students who needs to document their personal and  professional growth to achieve success in their career journey.
 > Employers and hiring managers assessing candidates to find the most compatible employee with expected workspace qualities and technical skills

 - **Usage**
 > Users will log achievements such as certifications, projects, courses
 > Track skills with visual progress indicators

### Features

- **User Authentication** : Secure login and sign up functionality
- **Achievement login** : Add, edit, delete achievements with feilds for name, description, type and date
- **Dashboard overview** : Display visual summary of the skills and achievements
- **Responsive Design** : Accessible on mobile and desktop devices

## Implementation

### Tech Stack

**FrontEnd**
- React  
- Material UI/Boostrap
- Charts.js (Visualization) 

**BackEnd**  
- Node.js
- Express.js

**DataBase**
- MySQL

**Authentication**
- Passport.js

### APIs

N/A

### Sitemap

**1. Homepage**
> App introduction, key featues and Login/Sign up

**2. Login/SignUp Page**
> Secure forms for user authentication

**3. Skill Tracker**
> Page for tracking and veiwing skill progress

**4. Acheivement Form**
> Interface for editing and loging milestones

**5. Profile Page**
> Manage user information 

### Mockups

![Home Page](src/assets/Mockups/HomePage.png)

![Login Page](src/assets/Mockups/LoginPage.png)

![Signup Page](src/assets/Mockups/SignupPage.png)

![Dashboard Page](src/assets/Mockups/Dashboard.png)

![Profile Page](src/assets/Mockups/ProfilePage.png)

![Skill Tracker Page](src/assets/Mockups/SkillTrackerPage.png)

![Achievements Page](src/assets/Mockups/AchievementsPage.png)

### Data

![SQL Data Relation Table](src/assets/Mockups/SQLDataRelation.png)

### Endpoints

- **POST /signup**
> Parameters : **email, password, name**
> Response : Success or error message

- **POST /login**
> Parameters : **email, password**
> Response: Success (user info) or error message.

- **Get /dashboard**
> Response: User’s achievements and skills data

- **POST /achievemnts**
> Parameters : **name, description, type, date**
> Response: Success or error message

- **PUT /achievemnts{id}**
> Parameters: **name, description, type, date**
> Response: Success or error message

- **DELETE /achievemnts{id}**
> Response: Success or error message

## Roadmap

**Week 1** : Finalize scope, set up database and backend, implement authentication, and dashboard

**Week 2** :Add achievement and skill tracking functionality, develop skill tracker page, polish profile, testing, and final documentation.

## Future Implementations

**Shareable Link** : Allow the user to share a whole summary

**Advanced Search and filters** : Allow the user to refine the details as needed.

**Public profiles** : User can showcase their potential publicly

**Gamification** : Add badges and milestones in their growth 
