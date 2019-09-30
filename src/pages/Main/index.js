import React, { Component } from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import {  List } from './styles';

export default class Main extends Component {
  state = { 
    users: [],
    error: null,
  };

  componentDidMount() {
    this.usersGithub();
  }



  usersGithub = async e => {
    try 
    {
      const response = await api.get('/api/users');
      const data = response.data;
      this.setState({users: data});
    } catch (error) {
      this.setState({ error: true });
    } 
  };

  render() {
    const {  users } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Usuários
        </h1>
        <List>
          {
          
            users.map(user => (
            
            
            <li key={user.login}>
              <span>Login :{user.login}</span>
              <span>ID :{user.id}</span>
              <Link to={`/user/${encodeURIComponent(user.login)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
