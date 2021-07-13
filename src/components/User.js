import React, { Fragment, Component } from 'react';
import Spinner from './layouts/Spinner';
import Repos from './repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repo: PropTypes.array.isRequired,
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      company,
    } = this.props.user;
    const { loading, repos } = this.props;
    if (loading) {
      return <Spinner />;
    }
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to search
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className="fas fa-check text-sucess" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="roung-img"
              alt=""
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>{location}</p>
          </div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit github profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>username:</strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>company:</strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Blog:</strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers:{followers}</div>
          <div className="badge badge-success">Following:{following}</div>
          <div className="badge badge-light">Public Repos:{public_repos}</div>
          <div className="badge badge-dark">Public Gists :{public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default User;
