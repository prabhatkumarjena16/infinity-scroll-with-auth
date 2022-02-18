import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import "./HomePage.styles.scss";
import { listUsers } from "../../actions/userActions";

function HomePage() {
  const [pageId, setPageId] = useState(1);

  const dispatch = useDispatch();

  const usersList = useSelector((state) => state.userList);
  const { loading, users, error } = usersList;
  console.log("users", users);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = () => {
    setPageId(1);
    setTimeout(() => {
      dispatch(listUsers(pageId));
    }, 1000);
  };

  return (
    <div className="main">
      <h1>Infinity Scroll With Auth</h1>

      {error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <InfiniteScroll
          dataLength={users.length}
          next={loadUser}
          hasMore={true}
          loader={<Loader />}
        >
          <ul className="cards">
            {users.map((user) => (
              <li key={user.id} className="cards_item">
                <div className="card">
                  <div className="card_image">
                    <img src={user.avatar} />
                  </div>
                  <div className="card_content">
                    <h2 className="card_title">{`${user.first_name} ${user.last_name}`}</h2>
                    <p className="card_text">
                      <b>Email: </b>
                      {user.email}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default HomePage;
