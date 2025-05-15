# PlanMyWeek

PlanMyWeek is a client-sided JS decision application that allows the user to, well, plan out their week. The user will be able to input their schedule for the week, Monday-Sunday. I would like to incoporate helper functions for regular activties, as well as custom activities per user.

This apps purpose is to help the user plan out their week, while also leaving room for thme to know how much free time is available. This will help reduce stress by seeing their weekly calendar, while also keeping them focused on any important dates.

## Variables

### Global

- activities (array of objects): Activities for the week.
- freeTimeByDay (array of objects): Freetime for the active day set to 1440 to store in minutes.

### Local - only used when creating the activity.

- activityName (string): The name of the activity the user is planning.
- startTime (number): The time the activity starts.
- endTime (number): The time the activity ends.
- dayOfWeek (string): The day the activity occurs on.
- important (boolean): Will recognize if the activity is deemed important by the user
- reminderTime (number): Will be the amount of time before an activity starts.
- duration (number): endTime - startTime

## Decision Making Progress

- If the user creates an activity, check to see if the activity duration is longer than the free time left and if the freeTime > 0. If it is add the activity and calculate the time they have left in the day. If it isn't log that there isn't enough time left in the day.

- For every activity in the array loop through them. If there is an activity marked as important and the reminder time is less than 15 log the activity. This will change to use the actual date time.

## Comments for Step 2

Step 2 and implemented functions I feel like I went a bit overboard. I realized that military time would not be a good way to store time in JS. I had to rework everything to store in total minutes of the day (1440). This led me to change the create activity function to use the startTime and endTime in minutes. For now this works, once we implement anything in html the plan is to use the input time, and then conver that time inputed to minutes. I believe this will be the best way to store than trying to work with javascript dates and storing that.

I created a forEach loop to go through all of the activities, this will be helpful later but I changed it for now to just act as an output for important activities that are coming up and have a reminder time. Reminder time is a new variable I added in that will likely later on check against the browsers time to show a notification? Maybe this wasn't a good idea to implement (unsure).

I created a helper function with the help of [stackoverflow](https://stackoverflow.com/questions/4687723/how-to-convert-minutes-to-hours-minutes-and-add-various-time-values-together-usi). This for now is being used in the outputs to display time nicely. I thought it was a better readibility than attempting to show the minutes of the start date. While variables are being stored in minutes, for the output of the user everything should represent the normal 12 hour clock. I will also need to create a converting function later on that converts the users html input time to minutes so I can store in properly in the activity. This got a lot more indepth than I wanted to but I realized that working with dates/times there is going to be a lot more math involved lol.

Hope this is sufficient and is working okay!
