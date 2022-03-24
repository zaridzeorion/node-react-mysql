# node-react-mysql

## Installation and Setup Instructions

Download or clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:  

### Mysql is required! 
You can setup mysql by hand, manually:
1. Make database called peakit
2. Inside 'peakit', create table called jokes in which you need to create following columns:
  id, varchar(50);
  value, varchar(300);
  date, datetime;

Or by running script.php in the repositoy directory, which will do it automatically

note: app is tested on xampp, but apache and mysql installed separately should do the work as well! as long as you know, what you are doing

#### To Start Server:
`cd backend` 

`npm run server`

`cd ../`

#### To Start App:
`cd frontend`

`npm start`
 

#### To Visit App:

`localhost:3000`  

#### To Visit Server:

`localhost:4000/jokes`  
