-- Drop Tables
DROP TABLE IF EXISTS "role" CASCADE;
DROP TABLE IF EXISTS "registereduser" CASCADE;
DROP TABLE IF EXISTS "post" CASCADE;
DROP TABLE IF EXISTS "following";
DROP TABLE IF EXISTS "like";
DROP TABLE IF EXISTS "comment";

-- RegisteredUser Table
CREATE TABLE "registereduser" (
                      id SERIAL PRIMARY KEY,
                      username VARCHAR(50) UNIQUE NOT NULL,
                      password VARCHAR(255) NOT NULL,
                      name VARCHAR(50),
                      surname VARCHAR(50),
                      email VARCHAR(100) UNIQUE NOT NULL,
                      address TEXT,
                      followers INT DEFAULT 0,
                      posts INT DEFAULT 0,
                      following INT DEFAULT 0,
                      isactivated BOOLEAN DEFAULT FALSE,
                      datecreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                      lastlogin TIMESTAMP,
                      isadmin BOOLEAN DEFAULT FALSE
);

-- Post Table
CREATE TABLE "post" (
                      id SERIAL PRIMARY KEY,
                      registereduserid INT NOT NULL,
                      description TEXT,
                      image TEXT,
                      compressedimage TEXT,
                      location TEXT,
                      timecreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                      likes INT DEFAULT 0,
                      comments INT DEFAULT 0,
                      isdeleted BOOLEAN DEFAULT FALSE,
                      isforad BOOLEAN DEFAULT FALSE,
                      FOREIGN KEY (registereduserid) REFERENCES registereduser(id) ON DELETE CASCADE
);
--Following Table
CREATE TABLE "following" (
                           idfollower INT,
                           idfollowing INT,
                           PRIMARY KEY (idfollower, idfollowing),
                           FOREIGN KEY (idfollower) REFERENCES registereduser(id) ON DELETE CASCADE,
                           FOREIGN KEY (idfollowing) REFERENCES registereduser(id) ON DELETE CASCADE,
                           CONSTRAINT chk_self_follow CHECK (idfollower <> idfollowing)
);

--Like Table
CREATE TABLE "like" (
                      postid INT,
                      userid INT,
                      PRIMARY KEY (postid, userid),
                      FOREIGN KEY (postid) REFERENCES post(id) ON DELETE CASCADE,
                      FOREIGN KEY (userid) REFERENCES registereduser(id) ON DELETE CASCADE
);

-- -- Comment Table
CREATE TABLE "comment" (
                         id SERIAL PRIMARY KEY,
                         content TEXT NOT NULL,
                         userid INT NOT NULL,
                         postid INT NOT NULL,
                         timecreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                         FOREIGN KEY (userid) REFERENCES registereduser(id) ON DELETE CASCADE,
                         FOREIGN KEY (postid) REFERENCES post(id) ON DELETE CASCADE
);

CREATE TABLE ROLE (
					id SERIAL PRIMARY KEY,
					name TEXT NOT NULL
);

CREATE TABLE USER_ROLE (
					id SERIAL PRIMARY KEY,
					user_id INT NOT NULL,
					role_id INT NOT NULL,
					FOREIGN KEY (user_id) REFERENCES registereduser(id) ON DELETE CASCADE,
					FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE
);
--
-- -- Chat Table
-- CREATE TABLE Chat (
--                       chatID SERIAL PRIMARY KEY,
--                       adminID INT,
--                       FOREIGN KEY (adminID) REFERENCES RegisteredUser(userID) ON DELETE SET NULL
-- );
--
-- -- ChatParticipant Table
-- CREATE TABLE ChatParticipant (
--                                  chatID INT,
--                                  userID INT,
--                                  PRIMARY KEY (chatID, userID),
--                                  FOREIGN KEY (chatID) REFERENCES Chat(chatID) ON DELETE CASCADE,
--                                  FOREIGN KEY (userID) REFERENCES RegisteredUser(userID) ON DELETE CASCADE
-- );
--
-- -- Message Table
-- CREATE TABLE Message (
--                          messageID SERIAL PRIMARY KEY,
--                          chatID INT NOT NULL,
--                          userID INT NOT NULL,
--                          content TEXT NOT NULL,
--                          timeSent TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--                          FOREIGN KEY (chatID) REFERENCES Chat(chatID) ON DELETE CASCADE,
--                          FOREIGN KEY (userID) REFERENCES RegisteredUser(userID) ON DELETE CASCADE
-- );
