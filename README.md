# The Magic 8 Ball of the Future

Simple full-stack magic eight ball. There are 20 responses logged in the Postgres DB. Server is Node.js/Express. Front end is React/Sass. Portfolio peice.

## Plan:

### front:
{Technologies}: React.js/SASS {MVP}: Simple black circle with white circle around black eight, all designed with SASS. One button at the bottom that transitions from "Shake" to "Reset" depending on what the most recent action was. {Finished Product}: On "Shake," the ball transitions from front to back and shakes lightly. On "Reset," the ball transitions from back to front. {functions}: shake(), reset() showAnswer()

### back:
{Technologies}: Node.js/Express.js, PostgreSQL {MVP}: in the DB 20 answers that the server draws on randomly. Table init:

create table answers(
  id serial primary key,
  answer varchar(200) not null unique
  );

server draws on the id's to find the range (1-20) and Math.random() to pick an answer.

### scope:
Will add this to brennonschow.me/tools along with calculator, messenger, task list, time keeper. 
