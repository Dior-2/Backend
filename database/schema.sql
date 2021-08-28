CREATE TABLE IF NOT EXISTS profile (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  userName VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(75) UNIQUE NOT NULL,
  homePhone INT,
  mobile INT,
  fax INT,
  city VARCHAR(75) NOT NULL,
  state VARCHAR(5) NOT NULL,
  zip INT,
  address1 VARCHAR(255),
  address2 VARCHAR(255),
  role INT NOT NULL,
  organization VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  requestType INT NOT NULL,
  category VARCHAR(30) NOT NULL,
  title VARCHAR(50) NOT NULL,
  body VARCHAR(255),
  date BIGINT NOT NULL,
  city VARCHAR(50),
  state VARCHAR(5),
  photo VARCHAR(255),
  completed BOOLEAN,
  recipient_id INT,
  reported BOOLEAN DEFAULT false,
  FOREIGN KEY (user_id)
    REFERENCES profile(id)
  FOREIGN KEY (recipient_id)
    REFERENCES profile(id)
);



