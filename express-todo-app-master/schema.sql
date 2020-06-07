CREATE TABLE BMPData.Priests (
  priestid INT(11) NOT NULL AUTO_INCREMENT,
  priestName varchar(100),
  activeStatus char,
  createdAt DATETIME NULL DEFAULT NULL,
  updatedAt DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (priestid)
);
