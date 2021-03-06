import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import "./HomePage.styles.scss";
import { listUsers } from "../../actions/userActions";

function HomePage({ history }) {
  const [pageId, setPageId] = useState(1);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const usersList = useSelector((state) => state.userList);
  const { users, error } = usersList;

  useEffect(() => {
    if (userInfo) {
      loadUser();
    } else {
      history.push("/login");
    }
  }, [userInfo, history]);

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
              <li key={uuidv4()} className="cards_item">
                <div className="card">
                  <div className="card_image">
                    <img src={user.avatar} alt={user.first_name} />
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
