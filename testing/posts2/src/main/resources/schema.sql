
CREATE TABLE IF NOT EXISTS Post (
  id INTEGER NOT NULL,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  body text NOT NULL,
  version INT,
  PRIMARY KEY( id )
);