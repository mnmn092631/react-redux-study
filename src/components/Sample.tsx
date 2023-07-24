import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getPost, getUsers } from "../store/sample";

const Sample = () => {
  const dispatch = useDispatch();

  const post = useSelector((state: RootState) => state.sample.post);
  const users = useSelector((state: RootState) => state.sample.users);
  const loadingPost = useSelector(
    (state: RootState) => state.sample.loading.GET_POST
  );
  const loadingUsers = useSelector(
    (state: RootState) => state.sample.loading.GET_USERS
  );

  useEffect(() => {
    dispatch(getPost(1));
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <section>
        <h1>포스트</h1>
        {loadingPost && "로딩 중..."}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>사용자 목록</h1>
        {loadingUsers && "로딩 중..."}
        {!loadingUsers && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username}({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;
