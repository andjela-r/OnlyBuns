-- INSERT INTO registereduser 
-- (username, password, name, surname, email, address, isActivated, isAdmin) 
-- VALUES
-- ('alice_smith', 'password1', 'Alice', 'Smith', 'alice@example.com', '123 Main St', TRUE, FALSE),
-- ('bob_brown', 'password2', 'Bob', 'Brown', 'bob@example.com', '456 Oak Ave', TRUE, FALSE),
-- ('admin_user', 'adminpass', 'Admin', 'RegisteredUser', 'admin@example.com', '789 Admin Rd', TRUE, TRUE);

INSERT INTO public.post
(registereduserid, description)
VALUES
('003f9aff-5be5-4e32-b811-8b368fba4ad6', 'First Post'),
('003f9aff-5be5-4e32-b811-8b368fba4ad6', 'Second Post'),
('003f9aff-5be5-4e32-b811-8b368fba4ad6', 'Third Post');