import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Container from '../../components/Container';
import { Owner} from './styles';

export default class Details extends Component {
  state = {
    details: {}    
  }
  async componentDidMount() {
    const {match} = this.props;
    const userName = decodeURIComponent(match.params.details);
    const details = await api.get(`/api/users/${userName}/details`);

    this.setState({
      details: details.data
    });
  }

  render () {
    const { details } = this.state;
    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos Usuários</Link>
          <h1>{details.login}</h1>
          <p>ID:{details.id}</p>
          <p>Data de Criação: {details.created_at}</p>
          <a href={details.html_url}>Profile: {details.html_url}</a>
          <Link to={`/user/${encodeURIComponent(details.login)}/repos`}>
                Repositórios
          </Link>
        </Owner>
      </Container>
    );
  }
}