TODOS

* right now when you click previous to go back to the popular games page it resets everything. so either make it that you can't go back or that you can and it still knows what you picked already and updates accordingly if you deselect something etc

* make it so you can't select a search result twice when you add custom liked games

* allow user to edit email password and steam information (while retaining uniqueness etc)

* make it so state knows when it's doing fetch requesty stuff and front end says loading when it's still working on that for profile

* could put in a cancel button for saving changes to profile played games list maybe

WEDNESDAY:
  * DONE figure out design for search results
  * DONE flesh out custom liked games list and custom liked game
  * DONE add games to user played games (with like) on submit
  * DONE pitch wireframes etc
  * DONE profile components tree: display information in profile  
  * um... started? get edit profile form working
  * SORTA attend lecture on recommendation algorithms

THURSDAY:
  * make it so user can successfully edit their played games list. v annoying right now.
    * so apparently my "component not rerendering" problem might have something to do with deep nesting. i can try creating a separate reducer for user played games maybe and seeing if that helps. and like storing it differently in state and stuff. because really that's the major bug right now.
  * gameslists components tree: owned games grid, wishlist grid, savedrecs grid (w/ dummy data for now)

FRIDAY:
  * recommendations components tree: recs carousel, gameinfo container (w/ dummy data for now)

NEXT WEEK:
  * actually do the algorithm stuff. that should be all you have to do next week. then week 3 can be styling and bug fixes.