# _Costco Game_

#### Allows user to choose a character class and name. The user can then attempt to negotiate with computer "bosses" to increase their seniority. For certain increases in seniority, the player's timeoff increases. Once the player's time off reaches a certain level, they win._, 4/15/2020_

#### By _**DJ Zevenbergen, Julia Seidman, Nitun Datta, Mikah Mathews**_

## Description

_This web application uses classes, looping, and arrays to create a user's character. The user can then attempt to negotiate with computer "bosses" to increase their seniority. For certain increases in seniority, the player's timeoff increases. Once the player's time off reaches a certain level, they win._

## Setup/Installation Requirements

* Clone repository from GitHub in terminal or console
* npm install
* npm run start


## Specs

* - The program creates a character based on the user's selection
    * Input: Name: "Ted" Job: "PizzaCutter" 
    * Output: Your Character: "Ted, a Pizza Cutter in Warehouse 327.  Your Seniority Level is 2.  Your Stress Level is 3.  You have 0 days time off.  Your goal is to reach 5 days off before the stress forces you to quit."

* - The program presents the character with "opponents" in the form of conflicts with co-workers. 
    * Input: "start Game"
    * Output:  "Manager Jim-Bob wants to talk about your lack of initiative. Will you engage or will you shy away?"

* - The user decides to confront or avoid the conflict. The outcome is determined in part by seniority and character "assets".
    * Input: "Avoid!"
    * Output:  "You successfully dodged a bullet.  But you also are no closer to getting any time off, and your stress has increased 1."
    * Input: "Confront!"
    * Output: "You messed with the wrong manager on the wrong day.  Jim Bob assigns you to the graveyard shift.  Gain 2 stress points."
    * Input: "Confront!"
    * Output: "Your winning smile and self-deprecating sense of humor win the day.  You get assigned to hand out holiday sale flyers and put in line for a promotion.  Seniority increases by 1 and stress decreases by 1!"

* - Every 2 levels of seniority increase wins 1 day off.
    * Input: 
    * Output:  

* - If player's stress level reaches 10, the game is over because they quit their job.
    * Input: 
    * Output:  

* - If player gains 5 days off, they win the game
    * Input: Days Off = 5
    * Output: Congratulations! Your manager has decided to grant you 3 days off. You decide to relax and put your resignation papers on hold.


## Known Bugs
- 


## Access to Website

_https://djzevenbergen.github.io/pizza-parlor_

## License

Copyright © 2020

**_DJ Zevenbergen, Mikah Mathews, Nitun Datta, Julia Seidman_**
