-- all classrooms
SELECT *
FROM class_rooms

-- all classrooms for a specific teacher
SELECT *
FROM people
WHERE user_id = ? AND user_role_id = 1

-- all classrooms for a specific teacher & co-teacher
SELECT *
FROM people
WHERE user_id = ? AND user_role_id = 1 AND user_role_id = 2

-- all classrooms for a specific student
SELECT *
FROM people
WHERE user_id = ? AND user_role_id = 3

-- all people in a specific classroom
SELECT *
FROM people
WHERE class_id = ?

-- all teachers in a specific classroom
SELECT *
FROM people
WHERE class_id = ? AND user_role_id = 1

-- all teachers & co-teachers in a specific classroom
SELECT *
FROM people
WHERE class_id = ? AND user_role_id = 1 AND user_role_id = 2

-- all students in a specific classroom
SELECT *
FROM people
WHERE class_id = ? AND user_role_id = 3

-- all posts in a specific classroom (stream page)
SELECT *
FROM class_rooms_posts
WHERE class_id = ?

-- all posts from a specific post_types in a specific classroom (can be used for all post_types such as assignments, materials, ...)
SELECT CRP.post_id
FROM class_rooms_posts CRP, posts P
WHERE CRP.post_id = P.post_id AND class_id = ? AND post_type_id = ?

-- all assignments not ended yet
SELECT CRP.post_id
FROM class_rooms_posts CRP, posts P
WHERE CRP.post_id = P.post_id AND class_id = ? AND post_type_id = 1 AND end_date > now()

-- all solutions in a specific assignment
SELECT UA.response_id
FROM class_rooms_posts CRP, posts P, user_actions UA, responses R
WHERE CRP.post_id = P.post_id AND P.post_id = UA.post_id AND R.response_id = UA.response_id AND class_id = ? AND UA.post_id = ? AND post_type_id = 1 AND response_type_id = 1

-- mark for a specific student in a specific assignment
SELECT mark
FROM people PL, class_rooms CR, class_rooms_posts CRP, posts P, user_actions UA, responses R
WHERE   PL.class_id = CR.class_id AND 
        CR.class_id = CRP.class_id AND 
        CRP.post_id = P.post_id AND 
        P.post_id = UA.post_id AND 
        UA.response_id = R.response_id AND 
        PL.class_id = ? AND PL.user_role_id = 3 AND UA.response_id = ? AND response_type_id = 1 AND
        UA.post_id = ? AND post_type_id = 1 AND PL.user_id = ?

-- signin
SELECT *
FROM users
WHERE user_email = ? AND user_password = ?

