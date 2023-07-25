/*==============================================================*/
/*	Author:		Sally Abd Al Hafeez                     */
/*										    */
/*	Purpose:	To create the database schema                 */
/*                To create the database schema objects 	    */
/*			such as tables, primary keys, unique keys,    */
/*			indexes, DEFAULTs, and foreign keys.          */
/*==============================================================*/

/*==============================================================*/
/*	Database: classroom_db						    */
/*==============================================================*/
drop database if exists classroom_db;
create database classroom_db character set utf8 collate utf8_general_ci;
use classroom_db;

/*==============================================================*/
/* Drop all the tables	                                        */
/*==============================================================*/
drop table if exists class_rooms;
drop table if exists class_rooms_posts;
drop table if exists people;
drop table if exists posts;
drop table if exists post_types;
drop table if exists responses;
drop table if exists response_types;
drop table if exists users;
drop table if exists user_actions;
drop table if exists user_roles;

/*==============================================================*/
/* Table: class_rooms                                           */
/*==============================================================*/
create table class_rooms
(
   class_id             int auto_increment not null,
   class_code           varchar(255) not null,
   class_link           varchar(255),
   class_name           varchar(255) not null,
   class_section        varchar(255),
   class_subject        varchar(255),
   room                 varchar(255),
   class_photo          varchar(255),
   google_meet_link     varchar(255),
   can_post             bool not null default true,
   can_comment          bool not null default true,
   primary key (class_id),
   unique key (class_code),
   unique key (class_link),
   unique key (google_meet_link)
)
Engine = innodb;

/*==============================================================*/
/* Table: class_rooms_posts                                     */
/*==============================================================*/
create table class_rooms_posts
(
   class_id             int not null,
   post_id              int not null,
   primary key (class_id, post_id)
)
Engine = innodb;

/*==============================================================*/
/* Table: people                                                */
/*==============================================================*/
create table people
(
   user_role_id         int not null,
   class_id             int not null,
   user_id              int not null,
   primary key (user_role_id, class_id, user_id)
)
Engine = innodb;

/*==============================================================*/
/* Table: posts                                                 */
/*==============================================================*/
create table posts
(
   post_id              int auto_increment not null,
   post_type_id         int not null,
   teacher_id           int not null,
   start_date           datetime not null,
   end_date             datetime,
   post_title           varchar(255) not null,
   post_body            varchar(1024),
   post_attachment      varchar(255),
   post_grade           float,
   primary key (post_id),
   unique key (post_title)
)
Engine = innodb;

/*==============================================================*/
/* Table: post_types                                            */
/*==============================================================*/
create table post_types
(
   post_type_id         int auto_increment not null,
   post_type_desc       varchar(255) not null,
   primary key (post_type_id),
   unique key (post_type_desc)
)
Engine = innodb;

/*==============================================================*/
/* Table: responses                                             */
/*==============================================================*/
create table responses
(
   response_id          int auto_increment not null,
   response_type_id     int not null,
   file                 varchar(255),
   comment              varchar(255),
   mark                 float,
   primary key (response_id)
)
Engine = innodb;

/*==============================================================*/
/* Table: response_types                                        */
/*==============================================================*/
create table response_types
(
   response_type_id     int auto_increment not null,
   response_type_desc   varchar(255) not null,
   primary key (response_type_id),
   unique key (response_type_desc)
)
Engine = innodb;

/*==============================================================*/
/* Table: users                                                 */
/*==============================================================*/
create table users
(
   user_id              int auto_increment not null,
   user_email           varchar(255) not null,
   user_password        blob not null,
   f_name               varchar(255) not null,
   l_name               varchar(255) not null,
   phone_number         varchar(255) not null,
   dob                  date not null,
   photo                varchar(255),
   token                varchar(255),
   primary key (user_id),
   unique key (user_email)
)
Engine = innodb;

/*==============================================================*/
/* Table: user_actions                                          */
/*==============================================================*/
create table user_actions
(
   user_id              int not null,
   response_id          int not null,
   post_id              int not null,
   primary key (user_id, response_id, post_id)
)
Engine = innodb;

/*==============================================================*/
/* Table: user_roles                                            */
/*==============================================================*/
create table user_roles
(
   user_role_id         int auto_increment not null,
   user_role_desc       varchar(255) not null,
   primary key (user_role_id),
   unique key (user_role_desc)
)
Engine = innodb;

alter table class_rooms_posts add constraint fk_class_rooms_posts foreign key (class_id)
      references class_rooms (class_id) on delete restrict on update restrict;

alter table class_rooms_posts add constraint fk_class_rooms_posts2 foreign key (post_id)
      references posts (post_id) on delete restrict on update restrict;

alter table people add constraint fk_people foreign key (user_role_id)
      references user_roles (user_role_id) on delete restrict on update restrict;

alter table people add constraint fk_people2 foreign key (class_id)
      references class_rooms (class_id) on delete restrict on update restrict;

alter table people add constraint fk_people3 foreign key (user_id)
      references users (user_id) on delete restrict on update restrict;

alter table posts add constraint fk_p_type foreign key (post_type_id)
      references post_types (post_type_id) on delete restrict on update restrict;

alter table posts add constraint fk_teacher_can_do foreign key (teacher_id)
      references users (user_id) on delete restrict on update restrict;

alter table responses add constraint fk_r_type foreign key (response_type_id)
      references response_types (response_type_id) on delete restrict on update restrict;

alter table user_actions add constraint fk_user_actions foreign key (user_id)
      references users (user_id) on delete restrict on update restrict;

alter table user_actions add constraint fk_user_actions2 foreign key (response_id)
      references responses (response_id) on delete restrict on update restrict;

alter table user_actions add constraint fk_user_actions3 foreign key (post_id)
      references posts (post_id) on delete restrict on update restrict;

