# Western Showdown Click
## Description Deliverable
### Elevator Pitch
A web based throwback game to an old western showdown! Instead of the quickest shot in the west, players will compete to become the fastest clicker. Given the choice to compete between either the fastest player or outlaws of varying skill players will go face to face with their opponent and after a randomized short wait will be told to fire. First to shoot wins and lives to face another opponent. Fastest player and most consecutive victories will be kept track of.
### Design
<img width="1440" alt="Screenshot 2023-09-23 at 5 16 15 PM" src="https://github.com/Luke-Grundvig/cs260-byu/assets/117103438/cbd74a9e-7ddf-42bf-abc3-8bb3f8957188">

<img width="1440" alt="Screenshot 2023-09-23 at 5 21 00 PM" src="https://github.com/Luke-Grundvig/cs260-byu/assets/117103438/01b01f66-a654-40d2-9080-c45c8390066f">

<img width="1440" alt="Screenshot 2023-09-23 at 5 25 48 PM" src="https://github.com/Luke-Grundvig/cs260-byu/assets/117103438/5e827791-cbdf-42fb-afbc-e81defb7650d">

### Key Features
+ Secure Login over HTTPS
+ Simple mechanics
+ Multiple playing modes
+ Results update/affect gameplay
+ High Score Boards
### Technologies
**Technologies will be used in the following ways:**
- **HTML:** Using correct structure for the three HTML pages, login, play, and high score.
- **CSS:** Used for styling to make the application aesthetically pleasing and enjoyable. Smart use of spacing and colors.
- **Java Script:** Provides Login and player interaction with the system.
- **Service:** Backend service with endpoints for:
    + Login
    + Receiving times
    + Updating times
- **DB:** Store high scores, users and fastest time.
- **Login:** Register and login users, play not allowed without login.
- **Websocket Data:** Generates High Scores every time a player starts and ends game.

  ### HTML deliverable
**For the HTML deliverable I started the basic structure for the applicaiton in HTML**
- **HTML pages:** Three HTML pages, one for login, another for High score diplay and the third for gameplay
- **Links:** Each pages links to the others via a shared navigation bar
- **Text:** There is a short (placeholder) description box on the gameplay page on how to play
- **3rd party service calls:** Didn't know about this, will try to include it eventually
-  **Images:** Image of outlaw on gameplay page (will be updated)
- **Login:** User name and password text boxes
- **DB:** Table on high score page for player high scores represents data stored in DB
- **WebSocket:** The current players scores will be updated real time in the database

  ### CSS deliverable
**For the CSS deliverable I styled the application into a more final presentation**
- **Header, footer, and main:** All styled
- **Navigation Elements:** navigation bar at the top of each page, with links to other pages
- **Responsive to window resizing:** Elements on each page adjust to window resizing, as well as navigation bars permenantely on top and bottom
- **Application Elements:** Items spaced and centered appropriately in page
-  **Application text content** Updated how to play text for simpler user interface, as well as gave it css animation
- **Application imagees** image on gameplay page is responsive to page resizing, although (purposely) not centered

-   ### JavaScript deliverable
**For the JavaScript deliverable I used JavaScript to make the application work for a single play through**
- **login** Takes you to the gameplay page, and saves username/password
- **Database** Functions in place to store score for highscore board, currently storing localy, (and not working) but will be updated to database later.
- **WebSocket** setIntervals function and some CSS are meant to represent updates from other players. Will be replaced with WebSocket messages.
- **Application Logic:** Gameplay working, tells you your score and reloads play after finishing.

