import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_INPUT, INSERT, REMOVE, TOGGLE, Todo } from "../store/todos";
import { RootState } from "../store";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        onChange={() => dispatch(TOGGLE(todo.id))}
        checked={todo.done}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => dispatch(REMOVE(todo.id))}>삭제</button>
    </div>
  );
};

const Todos = () => {
  const input = useSelector((state: RootState) => state.todos.input);
  const todos = useSelector((state: RootState) => state.todos.todos);

  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(INSERT(input));
    dispatch(CHANGE_INPUT(""));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={input}
          onChange={(e) => dispatch(CHANGE_INPUT(e.target.value))}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
