INSERT INTO ROLE (name) VALUES ('ROLE_USER');
INSERT INTO ROLE (name) VALUES ('ROLE_ADMIN');

INSERT INTO registereduser 
(username, password, name, surname, email, address, isactivated, isadmin) 
VALUES
('alice_smith', 'password1', 'Alice', 'Smith', 'alice@example.com', '123 Main St', TRUE, FALSE),
('bob_brown', 'password2', 'Bob', 'Brown', 'bob@example.com', '456 Oak Ave', TRUE, FALSE),
('admin_user', 'adminpass', 'Admin', 'RegisteredUser', 'admin@example.com', '789 Admin Rd', TRUE, TRUE),
('charlie_jones', 'password3', 'Charlie', 'Jones', 'charlie@example.com', '321 Cedar St', TRUE, FALSE),
('dana_white', 'password4', 'Dana', 'White', 'dana@example.com', '654 Pine Blvd', TRUE, FALSE),
('eve_williams', 'password5', 'Eve', 'Williams', 'eve@example.com', '987 Maple Dr', TRUE, FALSE),
('frank_moore', 'password6', 'Frank', 'Moore', 'frank@example.com', '123 Elm St', TRUE, FALSE),
('grace_hill', 'password7', 'Grace', 'Hill', 'grace@example.com', '456 Spruce Ct', TRUE, FALSE),
('henry_adams', 'password8', 'Henry', 'Adams', 'henry@example.com', '789 Birch Ln', TRUE, FALSE),
('ivy_green', 'password9', 'Ivy', 'Green', 'ivy@example.com', '159 Walnut Rd', TRUE, FALSE),
('jack_thomas', 'password10', 'Jack', 'Thomas', 'jack@example.com', '753 Poplar Ave', TRUE, FALSE),
('kate_martin', 'password11', 'Kate', 'Martin', 'kate@example.com', '951 Chestnut Blvd', TRUE, FALSE),
('admin_user2', 'adminpass2', 'Admin', 'UserTwo', 'admin2@example.com', '123 Admin Pl', TRUE, TRUE),
('lucas_smith', 'password12', 'Lucas', 'Smith', 'lucas@example.com', '852 Hickory St', TRUE, FALSE),
('mia_walker', 'password13', 'Mia', 'Walker', 'mia@example.com', '654 Redwood Ln', TRUE, FALSE),
('noah_baker', 'password14', 'Noah', 'Baker', 'noah@example.com', '147 Beech St', TRUE, FALSE),
('olivia_turner', 'password15', 'Olivia', 'Turner', 'olivia@example.com', '369 Magnolia Rd', TRUE, FALSE),
('peter_parker', 'password16', 'Peter', 'Parker', 'peter@example.com', '258 Cypress Dr', TRUE, FALSE),
('quinn_lee', 'password17', 'Quinn', 'Lee', 'quinn@example.com', '135 Willow Ct', TRUE, FALSE),
('rachel_clark', 'password18', 'Rachel', 'Clark', 'rachel@example.com', '159 Fir Ave', TRUE, FALSE),
('samuel_taylor', 'password19', 'Samuel', 'Taylor', 'samuel@example.com', '753 Laurel Ln', TRUE, FALSE),
('tina_miller', 'password20', 'Tina', 'Miller', 'tina@example.com', '357 Maple St', TRUE, FALSE),
('victor_rogers', 'password21', 'Victor', 'Rogers', 'victor@example.com', '951 Pine Blvd', TRUE, FALSE);

INSERT INTO USER_ROLE (user_id, role_id) VALUES (1, 1); --USER 1 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (2, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (3, 2); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (4, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (5, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (6, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (7, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (8, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (9, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (10, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (11, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (12, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (13, 2); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (14, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (15, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (16, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (17, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (18, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (19, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (20, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (21, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (22, 1); --USER 2 ROLE USER
INSERT INTO USER_ROLE (user_id, role_id) VALUES (23, 1); --USER 2 ROLE USER

INSERT INTO "post"
(registereduserid, description, image, location, timecreated)
VALUES
('1', 'Sharing tips on bunny care', 'images/post1.jpg', 'Belgrade', '2024-10-15 08:30:00'),
('2', 'New bunny play area setup', 'images/post2.jpg', 'Novi Sad', '2024-10-16 09:45:00'),
('4', 'Bunny enjoying fresh carrots', 'images/post3.jpg', 'Kragujevac', '2024-10-17 12:05:00'),
('5', 'Grooming advice for bunnies', 'images/post4.jpg', 'Subotica', '2024-10-18 15:20:00'),
('6', 'Bunny exploring the backyard', 'images/post5.jpg', 'Budva', '2024-10-19 11:10:00'),
('7', 'Building a bunny hideout', 'images/post6.jpg', 'Zlatibor', '2024-10-20 14:30:00'),
('8', 'Bunny hopping around the garden', 'images/post7.jpg', 'Nis', '2024-10-21 07:40:00'),
('9', 'Bunny playdate fun', 'images/post8.jpg', 'Pancevo', '2024-10-22 10:55:00'),
('10', 'Favorite bunny treats', 'images/post9.jpg', 'Backa Topola', '2024-10-23 13:30:00'),
('1', 'Creating a cozy bunny corner', 'images/post10.jpg', 'Belgrade', '2024-10-24 08:00:00'),
('4', 'Bunny enjoying a sunny day', 'images/post11.jpg', 'Kragujevac', '2024-10-25 16:45:00'),
('12', 'Setting up a bunny obstacle course', 'images/post12.jpg', 'Leskovac', '2024-10-26 09:30:00'),
('14', 'Bunny bonding session', 'images/post13.jpg', 'Vrsac', '2024-10-27 11:40:00'),
('15', 'Tips for bunny health checks', 'images/post14.jpg', 'Jagodina', '2024-10-28 14:50:00'),
('2', 'Bunny napping in a hammock', 'images/post15.jpg', 'Novi Sad', '2024-10-29 15:25:00'),
('6', 'Bunny running in the park', 'images/post16.jpg', 'Budva', '2024-10-30 12:15:00'),
('7', 'Bunny playing with new toys', 'images/post17.jpg', 'Zlatibor', '2024-11-01 16:00:00'),
('8', 'Bunny enjoying a new treat', 'images/post18.jpg', 'Nis', '2024-11-03 10:30:00'),
('9', 'Bunny meeting a new friend', 'images/post19.jpg', 'Pancevo', '2024-11-05 13:45:00'),
('10', 'Bunny’s first adventure outside', 'images/post20.jpg', 'Backa Topola', '2024-11-07 09:00:00');


INSERT INTO "following" (idfollower, idfollowing)
VALUES
(1, 2),
(1, 4), 
(2, 1), 
(2, 5), 
(3, 6),
(4, 2), 
(4, 7), 
(5, 8), 
(6, 1), 
(7, 3),
(8, 2),
(9, 4),
(10, 5), 
(11, 6), 
(12, 7), 
(1, 3),
(1, 5),
(2, 3), 
(3, 4), 
(3, 7), 
(4, 5), 
(5, 6), 
(6, 2),
(6, 9), 
(7, 1),
(7, 8),
(8, 3),
(8, 10),
(9, 1),
(9, 7),
(10, 2),
(10, 11),
(11, 4),
(12, 6), 
(12, 9);

INSERT INTO "like" (postid, userid)
VALUES
(1, 2), (1, 3), (1, 4), (1, 5),
(2, 6), (2, 7), (2, 8), (2, 9),
(3, 10), (3, 11), (3, 12), (3, 13),
(4, 14), (4, 15), (4, 16), (4, 17),
(5, 18), (5, 19), (5, 20), (5, 21),
(6, 22), (6, 23), (6, 1), (6, 2),
(7, 3), (7, 4), (7, 5), (7, 6),
(8, 7), (8, 8), (8, 9), (8, 10),
(9, 11), (9, 12), (9, 13), (9, 14),
(10, 15), (10, 16), (10, 17), (10, 18),
(11, 19), (11, 20), (11, 21), (11, 22),
(12, 23), (12, 1), (12, 2), (12, 3),
(13, 4), (13, 5), (13, 6), (13, 7),
(14, 8), (14, 9), (14, 10), (14, 11),
(15, 12), (15, 13), (15, 14), (15, 15),
(16, 16), (16, 17), (16, 18), (16, 19),
(17, 20), (17, 21), (17, 22), (17, 23),
(18, 1), (18, 2), (18, 3), (18, 4),
(19, 5), (19, 6), (19, 7), (19, 8),
(20, 9), (20, 10), (20, 11), (20, 12);

INSERT INTO "comment" (content, userid, postid)
VALUES
('This is a great bunny care tip!', 2, 1),
('I love the bunny play area, so cute!', 3, 2),
('My bunny loves fresh carrots too!', 4, 3),
('Thanks for the grooming advice, it really helped!', 5, 4),
('Your bunny is so cute, I need to try this!', 6, 5),
('This hideout is amazing for bunnies!', 7, 6),
('Bunnies hopping in the garden are so adorable!', 8, 7),
('I’m going to try this bunny treat recipe!', 9, 8),
('Your bunny looks so relaxed in the sun!', 2, 9),
('Great obstacle course setup for bunnies!', 10, 10),
('I love this bonding session, so sweet!', 11, 11),
('How do you make sure the bunny stays healthy?', 12, 12),
('My bunny loves this cozy corner, will try it!', 1, 13),
('Such a cute bunny, thank you for sharing!', 3, 14),
('I need to bunny-proof my home as well!', 5, 15);

