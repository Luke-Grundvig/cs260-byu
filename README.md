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
