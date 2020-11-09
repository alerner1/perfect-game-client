TODOS

* DONE right now when you click previous to go back to the popular games page it resets everything. so either make it that you can't go back or that you can and it still knows what you picked already and updates accordingly if you deselect something etc
  * CHANGE: removed previous button

* DONE make it so you can't select a search result twice when you add custom liked games

* allow user to edit email password and steam information (while retaining uniqueness etc)

* DONE make it so state knows when it's doing fetch requesty stuff and front end says loading when it's still working on that for profile

* could put in a cancel button for saving changes to profile played games list maybe

* DONE make it so when you add to your played games list it doesn't automatically like it for you

WEDNESDAY:
  * DONE figure out design for search results
  * DONE flesh out custom liked games list and custom liked game
  * DONE add games to user played games (with like) on submit
  * DONE pitch wireframes etc
  * DONE profile components tree: display information in profile  
  * um... started? get edit profile form working
  * SORTA attend lecture on recommendation algorithms

THURSDAY:
  * DONE make it so user can successfully edit their played games list. v annoying right now.
  * DONE gameslists components tree: owned games grid 
  * DONE wishlist grid 
  * DONE savedrecs grid (w/ dummy data for now)

  * DONE do the same thing as for owned list but for wish and saved
  * should probably fix the messiness of game[cover][url] vs game[cover_url] although the workaround is fine for now
  * DONE oh and probably want to format games you own so you can see their titles and the full cover and stuff
  * DONE make it so you can delete stuff from your owned list as well as other lists
  * DONE need to clear the search on submit
    

FRIDAY:
  * DONE recommendations components tree: recs carousel, gameinfo container (w/ dummy data for now)

NEXT WEEK:

MONDAY: 
  * DONE build and implement algorithm

TUESDAY: 
  * DONE get algorithm to connect to front end
  * DONE bug fixes
  * DONE fix carousel so it shows appropriate items and doesn't auto scroll
  * DONE build out game info page
  and then i think we've reached mvp!

THURSDAY:

  * styling
  * DONE fix bug where owned games don't persist

  // DONE add another game becomes a button
  // DONE on click, pull up a modal with the search bar 
  // DONE on search, turn results into scrollable list

  // DONE on click, remove from results list
  // DONE click done to exit modal
  // DONE adjust likes or remove accordingly

  // DONE when viewing any game lists, clicking a game brings up its info at the bottom or as a modal
  // DONE (as view more) MAKE THE GAME NAME A LINK DUMMY
  // also the like/dislike buttons should probs be blue

  // DONE do something about the email in the profile being real ugly

SUNDAY:

  * saving a recommendation changes the list of recommendations next time you generate it... that's nice but i didn't tell it to do that yet so why?
  * also shouldn't recommend a game if you've already played it or if it's on your saved recs list but yeah i didn't put that in yet soooo
  * DONE basically, fix quick recommendations and then add advanced recommendations functionality
  * custom liked games is still pretty ugly, maybe fix that
  * custom liked games should continue on to played games, currently getting an error until refresh because it redirects wrong
  * say something if you have no owned games etc yet

TUESDAY: 
  * need some validations up in here
  
WEDNESDAY:
  * record demo
  * linkedin stuff