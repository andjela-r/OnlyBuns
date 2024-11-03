-- RegisteredUser Table
DROP TABLE IF EXISTS "registereduser" CASCADE;
DROP TABLE IF EXISTS "post";

CREATE TABLE "registereduser" (
                      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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
                      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                      registeredUserId UUID NOT NULL,
                      description TEXT,
                      image TEXT,
                      compressed_image TEXT,
                      location TEXT,
                      timeCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                      likes INT DEFAULT 0,
                      comments INT DEFAULT 0,
                      isDeleted BOOLEAN DEFAULT FALSE,
                      isForAd BOOLEAN DEFAULT FALSE,
                      FOREIGN KEY (registeredUserId) REFERENCES registereduser(id) ON DELETE CASCADE
);
-- Following Table
-- CREATE TABLE Following (
--                            idFollower INT,
--                            idFollowing INT,
--                            PRIMARY KEY (idFollower, idFollowing),
--                            FOREIGN KEY (idFollower) REFERENCES RegisteredUser(userID) ON DELETE CASCADE,
--                            FOREIGN KEY (idFollowing) REFERENCES RegisteredUser(userID) ON DELETE CASCADE,
--                            CONSTRAINT chk_self_follow CHECK (idFollower <> idFollowing)
-- );

-- Like Table
-- CREATE TABLE Like (
--                       postID INT,
--                       userID INT,
--                       PRIMARY KEY (postID, userID),
--                       FOREIGN KEY (postID) REFERENCES Post(postID) ON DELETE CASCADE,
--                       FOREIGN KEY (userID) REFERENCES RegisteredUser(userID) ON DELETE CASCADE
-- );
--
-- -- Comment Table
-- CREATE TABLE Comment (
--                          commentID SERIAL PRIMARY KEY,
--                          content TEXT NOT NULL,
--                          userID INT NOT NULL,
--                          postID INT NOT NULL,
--                          timeCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--                          FOREIGN KEY (userID) REFERENCES RegisteredUser(userID) ON DELETE CASCADE,
--                          FOREIGN KEY (postID) REFERENCES Post(postID) ON DELETE CASCADE
-- );
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
