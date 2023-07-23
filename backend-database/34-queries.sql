--1 all classrooms
SELECT *
FROM class_rooms

--2 count of classrooms
SELECT COUNT(class_id)
FROM class_rooms

--3 all classrooms for a specific teacher
SELECT class_id
FROM people
WHERE user_id = ? AND user_role_id = 1

--4 count of classrooms for a specific teacher
SELECT COUNT(class_id)
FROM people
WHERE user_id = ? AND user_role_id = 1

--5 all classrooms for a specific teacher or co-teacher
SELECT class_id
FROM people
WHERE user_id = ? AND (user_role_id = 1 OR user_role_id = 2)

--6 count of classrooms for a specific teacher or co-teacher
SELECT COUNT(class_id)
FROM people
WHERE user_id = ? AND (user_role_id = 1 OR user_role_id = 2)

--7 all classrooms for a specific student
SELECT class_id
FROM people
WHERE user_id = ? AND user_role_id = 3

--8 count of classrooms for a specific student
SELECT COUNT(class_id)
FROM people
WHERE user_id = ? AND user_role_id = 3

--9 all people in a specific classroom
SELECT user_id, user_role_id
FROM people
WHERE class_id = ?

--10 count of people in a specific classroom
SELECT COUNT(user_id)
FROM people
WHERE class_id = ?

--11 all teachers in a specific classroom
SELECT user_id
FROM people
WHERE class_id = ? AND user_role_id = 1

--12 count of teachers in a specific classroom
SELECT COUNT(user_id)
FROM people
WHERE class_id = ? AND user_role_id = 1

--13 all teachers or co-teachers in a specific classroom
SELECT user_id
FROM people
WHERE class_id = ? AND (user_role_id = 1 OR user_role_id = 2)

--14 count of teachers or co-teachers in a specific classroom
SELECT COUNT(user_id)
FROM people
WHERE class_id = ? AND (user_role_id = 1 OR user_role_id = 2)

--15 all students in a specific classroom
SELECT user_id
FROM people
WHERE class_id = ? AND user_role_id = 3

--16 count of students in a specific classroom
SELECT COUNT(user_id)
FROM people
WHERE class_id = ? AND user_role_id = 3

--17 all posts in a specific classroom (stream page)
SELECT post_id
FROM class_rooms_posts
WHERE class_id = ?

--18 count of posts in a specific classroom (stream page)
SELECT COUNT(post_id)
FROM class_rooms_posts
WHERE class_id = ?

--19 all posts from a specific post_types in a specific classroom (can be used for all post_types such as assignments, materials, ...)
SELECT CRP.post_id
FROM class_rooms_posts CRP, posts P
WHERE CRP.post_id = P.post_id AND class_id = ? AND post_type_id = ?

--20 count of a specific post_types in a specific classroom (can be used for all post_types such as assignments, materials, ...)
SELECT COUNT(CRP.post_id)
FROM class_rooms_posts CRP, posts P
WHERE CRP.post_id = P.post_id AND class_id = ? AND post_type_id = ?

--21 all assignments not ended yet in a specific classroom
SELECT CRP.post_id
FROM class_rooms_posts CRP, posts P
WHERE CRP.post_id = P.post_id AND class_id = ? AND post_type_id = 1 AND end_date > now()

--22 count of assignments not ended yet in a specific classroom
SELECT COUNT(CRP.post_id)
FROM class_rooms_posts CRP, posts P
WHERE CRP.post_id = P.post_id AND class_id = ? AND post_type_id = 1 AND end_date > now()

--23 all assignments ended in a specific classroom
SELECT CRP.post_id
FROM class_rooms_posts CRP, posts P
WHERE CRP.post_id = P.post_id AND class_id = ? AND post_type_id = 1 AND end_date < now()

--24 count of assignments ended in a specific classroom
SELECT COUNT(CRP.post_id)
FROM class_rooms_posts CRP, posts P
WHERE CRP.post_id = P.post_id AND class_id = ? AND post_type_id = 1 AND end_date < now()

--25 all solutions in a specific assignment
SELECT UA.response_id
FROM class_rooms_posts CRP, posts P, user_actions UA, responses R
WHERE   CRP.post_id = P.post_id AND P.post_id = UA.post_id AND 
        R.response_id = UA.response_id AND class_id = ? AND 
        UA.post_id = ? AND post_type_id = 1 AND response_type_id = 1

--26 count of solutions in a specific assignment
SELECT COUNT(UA.response_id)
FROM class_rooms_posts CRP, posts P, user_actions UA, responses R
WHERE   CRP.post_id = P.post_id AND P.post_id = UA.post_id AND 
        R.response_id = UA.response_id AND class_id = ? AND 
        UA.post_id = ? AND post_type_id = 1 AND response_type_id = 1

--27 mark for a specific student in a specific assignment
SELECT mark
FROM people PL, users U, user_actions UA, responses R 
WHERE   PL.user_id = U.user_id AND 
        U.user_id = UA.user_id AND
        UA.response_id = R.response_id AND 
        PL.class_id = ? AND PL.user_role_id = 3 AND 
        PL.user_id = ? AND response_type_id = 1 AND UA.response_id = ?

--28 marks for a specific student in all assignments
SELECT mark, UA.response_id
FROM people PL, users U, user_actions UA, responses R 
WHERE   PL.user_id = U.user_id AND 
        U.user_id = UA.user_id AND
        UA.response_id = R.response_id AND 
        PL.class_id = ? AND PL.user_role_id = 3 AND 
        PL.user_id = ? AND response_type_id = 1

--29 sum of marks for a specific student in all assignments
SELECT SUM(mark)
FROM people PL, users U, user_actions UA, responses R 
WHERE   PL.user_id = U.user_id AND 
        U.user_id = UA.user_id AND
        UA.response_id = R.response_id AND 
        PL.class_id = ? AND PL.user_role_id = 3 AND 
        PL.user_id = ? AND response_type_id = 1

--30 signin
SELECT *
FROM users
WHERE user_email = ? AND user_password = ?

--31 all students assign for a specific assignment
SELECT UA.user_id
FROM people PL, users U, user_actions UA, posts P 
WHERE   PL.user_id = U.user_id AND 
        U.user_id = UA.user_id AND 
        UA.post_id = P.post_id AND
        PL.class_id = ? AND PL.user_role_id = 3 AND 
        UA.post_id = ? AND post_type_id = 1

--32 count of students assign for a specific assignment
SELECT COUNT(UA.user_id)
FROM people PL, users U, user_actions UA, posts P 
WHERE   PL.user_id = U.user_id AND 
        U.user_id = UA.user_id AND 
        UA.post_id = P.post_id AND
        PL.class_id = ? AND PL.user_role_id = 3 AND 
        UA.post_id = ? AND post_type_id = 1

--33 all students not assign for a specific assignment
SELECT user_id
FROM people
WHERE class_id = ? AND user_role_id = 3 AND user_id NOT IN (
    SELECT UA.user_id
    FROM people PL, users U, user_actions UA, posts P 
    WHERE   PL.user_id = U.user_id AND 
            U.user_id = UA.user_id AND 
            UA.post_id = P.post_id AND
            PL.class_id = ? AND PL.user_role_id = 3 AND 
            UA.post_id = ? AND post_type_id = 1
)

--34 count of students not assign for a specific assignment
SELECT COUNT(user_id)
FROM people
WHERE class_id = ? AND user_role_id = 3 AND user_id NOT IN (
    SELECT UA.user_id
    FROM people PL, users U, user_actions UA, posts P 
    WHERE   PL.user_id = U.user_id AND 
            U.user_id = UA.user_id AND 
            UA.post_id = P.post_id AND
            PL.class_id = ? AND PL.user_role_id = 3 AND 
            UA.post_id = ? AND post_type_id = 1
)