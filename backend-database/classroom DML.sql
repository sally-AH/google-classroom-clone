/*==================================================================*/
/*	Author:		Sally Abd Al Hafeez									*/
/*																	*/
/*	Purpose:	To initialize the database tables with sample data.	*/
/*==================================================================*/

/*==============================================================*/
/*	Database: classroom_db								        */
/*==============================================================*/
use classroom_db;

/*==============================================================*/
/* Clear all the tables	                                        */
/*==============================================================*/
delete from users;
delete from user_roles;
delete from class_rooms;
delete from response_types;
delete from responses;
delete from post_types;
delete from posts;
delete from people;
delete from class_rooms_posts;
delete from user_actions;

/*==============================================================*/
/* Table: users                                    			    */
/*==============================================================*/
insert into users (user_email, user_password, f_name, l_name, phone_number, dob, photo) values
	('l_l@gmail.com', '123', 'Luffy', 'OnePiece', '12345678', '2000-01-01', null),
	('n_n@gmail.com', '123', 'Naruto', 'Uzumaki', '12345678', '2000-01-01', null),
	('e_e@gmail.com', '123', 'Eren', 'Yeager', '12345678', '2000-01-01', null),
	('k_k@gmail.com', '123', 'Light', 'Yagami', '12345678', '2000-01-01', null);

/*==============================================================*/
/* Table: user_roles                                    		*/
/*==============================================================*/
insert into user_roles (user_role_desc) values
	('Teacher'),
	('Co-Teacher'),
	('Student');

/*==============================================================*/
/* Table: response_types                                    	*/
/*==============================================================*/
insert into response_types (response_type_desc) values
	('Solution'),
	('Comment'),
	('Private Comment'),
	('Announcement');

/*==============================================================*/
/* Table: post_types                                    	    */
/*==============================================================*/
insert into post_types (post_type_desc) values
	('Assignment'),
	('Material'),
	('Question'),
    ('Topic'),
	('Quiz');

/*==============================================================*/
/* Table: class_rooms                                    	    */
/*==============================================================*/
insert into class_rooms (class_code, class_link, class_name, class_section, class_subject, room, class_photo, google_meet_link) values
	('A111', 'https://localhost/classroomclone/c/Ab5489', 'FSW 23& 24 | Tech', 'S', 'A', null, null, null),
	('A112', 'https://localhost/classroomclone/c/A05489', 'FSW 24& 25 | Tech', 'A', null, null, null, null),
	('A113', 'https://localhost/classroomclone/c/Aj54y9', 'FSW 25& 26 | Tech', null, 'S', null, null, null),
	('A114', 'https://localhost/classroomclone/c/AbP489', 'FSW 26& 27 | Tech', null, null, null, null, null);

/*==============================================================*/
/* Table: people                                    	        */
/*==============================================================*/
insert into people (user_role_id, class_id, user_id) values
	(1, 1, 1),
	(2, 1, 2),
	(3, 1, 3),
	(3, 1, 4),

    (1, 2, 3),
	(2, 2, 1),
	(3, 2, 2),
	(3, 2, 4),

    (1, 3, 4),
	(3, 3, 1),
	(3, 3, 2),
	(3, 3, 3),

    (1, 4, 1),
	(2, 4, 2),
	(2, 4, 4),
	(3, 4, 3);

/*==============================================================*/
/* Table: posts                                    	            */
/*==============================================================*/
insert into posts (post_type_id, teacher_id, start_date, end_date, post_title, post_body, post_attachment, post_grade) values
	(1, 1, '2023-07-22 16:45:00', null, 'Professional Development Plan', 'Create your PDP as discussed during our training session. Guidelines:
    1. Articulate a single long term goal (LTG) focused on your career development. By long term, we mean 3 years after graduating from SEF.', null, null),
    (2, 3, '2023-07-22 16:45:00', null, 'Professional Development Plan', 'Create your PDP as discussed during our training session. Guidelines:
    1. Articulate a single long term goal (LTG) focused on your career development. By long term, we mean 3 years after graduating from SEF.', null, null),
    (1, 4, '2023-07-22 16:45:00', null, 'Professional Development Plan', 'Create your PDP as discussed during our training session. Guidelines:
    1. Articulate a single long term goal (LTG) focused on your career development. By long term, we mean 3 years after graduating from SEF.', null, null);

/*==============================================================*/
/* Table: class_rooms_posts                                    	*/
/*==============================================================*/
insert into class_rooms_posts (class_id, post_id) values
	(1, 1),
	(2, 2),
	(3, 3);

/*==============================================================*/
/* Table: responses                                    			*/
/*==============================================================*/
insert into responses (response_type_id, file, comment, mark) values
	(1, 'https://localhost/classroomclone/f/sol-1', null, null),
	(1, 'https://localhost/classroomclone/f/sol-2', null, null);

/*==============================================================*/
/* Table: user_actions                                    	    */
/*==============================================================*/
insert into user_actions (user_id, response_id, post_id) values
	(3, 1, 1),
	(4, 2, 1);