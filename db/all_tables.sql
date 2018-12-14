-- create users table

create table users (
    id serial primary key,
    username text,
    hash_value text
)

-- create posts table

create table posts (
    post_id serial primary key,
    title text, 
    user_id integer
    REFERENCES users
)

-- join table

select username, title, post_id
from users
join posts ON id = post_id;