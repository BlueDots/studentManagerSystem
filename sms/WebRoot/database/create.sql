drop table if exists t_user;

create table t_user(
	id int primary key auto_increment,
	username varchar(30),
	age int
)