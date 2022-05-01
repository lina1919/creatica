# Creatica Hackathon 2022 - Snowball

![Snowball Logo](study/static/img/snowball.png)

[![creatica 2022 hackathon snowball demo
](https://img.youtube.com/vi/lt-gWDhBzs8)](https://www.youtube.com/watch?v=lt-gWDhBzs8&ab_channel=%EB%B0%95%EC%9C%A0%EB%A6%BC8)

![Main website](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/922/145/datas/original.jpeg)

## Created By

[Tony](https://github.com/trobutlef), [Anna](https://github.com/bluebeepie), [Yurim](https://github.com/lina1919), [Binh](https://github.com/thabinhl21)

## Inspiration
Our inspiration for this web application is from personal experience and also from seeing my fellow peers struggling to focus. With the pandemic, it brought on a lot more distraction and stress, and we find it increasingly harder to focus and concentrate.

## What it does
This web application provides the user with a virtual environment where they can focus and concentrate on a task or tasks. 

For the timer, we specifically designed it around the Pomodoro technique. The Pomodoro Technique is a time management system that enables the person to work with the time that they have rather than against it. It breaks your working session into 25 minute chunks followed by 5 minute breaks (an interval known as a pomodoro). After 4 pomodoros, you take a longer break of 15 minutes. For the colour theme, we decided on one that portrayed a clean and minimalistic feeling. We want the user to feel like they are working in a calm minimalistic environment.

## How we built it
We built this using Django as our framework and HTML/CSS for the frontend. We used Javascript to build the timer and Spotify API to add music functionality to our web app. The usernames and related information are stored in a SQLite database. From our discussion as a team, we wanted to create a web based application that will help students. From all the mental and physical challenges brought on by the pandemic, we wanted to create a tool that will allow students to increase their focus and concentration. We have used similar applications before but we haven't found one that meets all of our needs. We decided to use mural to house all of our ideas, prioritized (how much of that idea we can built) and implementation. We agreed on 3 main components that we want to incorporate into the application.

1. Timer
1. Music
1. To-do task list
## Challenges we ran into
* Finding an optimal time to sync up in different time zones 
* We wanted to use jQuery for a few different tasks, but had trouble integrating it with Django
* We also had trouble extracting data from from a JSON file so we had to cut out some features that relied on those results
* Prioritizing and organizing the task that needs to be done
* Maintain communication with team member in different time zones
## Accomplishments that we're proud of
Ability to include the main components to the app by the deadline.

## What we learned
It is not difficult to sync up with different team members in different time zones.

## What's next for Pending
Ability to have study sessions with friends with the option to have voice and video - Offer other music alternatives to Spotify (allows users that do not have a Spotify account or is not interested in creating one) - Have an audio cue for when the 5 minute break session starts and ends - Make the application available in other languages - Provided a more tailored experience for the user

1. Provide users with a survey asking about the things that they do to help them focus. Depending on their answer, we can provide mindfulness tips that is more applicable to them.
1. Personal ranking system. Allows the user to beat their own record of the amount of time spent studying.
1. Provide access to short stretching exercises during the 5 minute period. - Add additional features for the to-do list
1. Ability to add tags and to group tasks together
1. Ability to add notes to the to-do list and drag them to specific task