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