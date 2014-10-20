create table game_session (
  id int primary key,
  start datetime not null,
  end datetime null
);

create table level_attempt(
  id int primary key,
  program text not null,
  number int,
  start datetime not null,
  end datetime not null
);

create table session_level(
  id int primary key,
  session_id int not null,
  level_id varchar(100) not null,
  start datetime not null,
  end datetime null,
  success_attempt_id int null,
  foreign key (session_id) references game_session (id),
  foreign key (success_attempt_id) references level_attempt (id)
);