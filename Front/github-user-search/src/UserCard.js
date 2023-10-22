import React from 'react';

const UserCard = ({ user }) => (
  <div className="card">
    <div className="additional">
      <div className="user-card">
        <div className="level center">
          {user.login}
        </div>
        <div className="points center">
          Points: {user.public_repos}
        </div>
        <div className="round">
          <img src={user.avatar_url} alt={user.login} />
        </div>
      </div>
      <div className="more-info">
        <h1>{user.name}</h1>
        <div className="coords">
          Location: {user.location}
          <br />
          Blog: <a href={user.blog}>{user.blog}</a>
        </div>
        <div className="stats">
          <div>
            <div className="title">Followers</div>
            <div className="value">{user.followers}</div>
          </div>
          <div>
            <div className="title">Following</div>
            <div className="value">{user.following}</div>
          </div>
        </div>
      </div>
    </div>
    <div className="general">
      <h1>{user.login}</h1>
      <p>ID: {user.id}</p>
      <p>Created at: {user.created_at}</p>
    </div>
  </div>
);

export default UserCard;