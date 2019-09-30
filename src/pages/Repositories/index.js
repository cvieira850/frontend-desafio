import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Container from '../../components/Container';
import { Owner} from './styles';

export default class Repositories extends Component {
  state = {
    repositorios: []
  
  }
  async componentDidMount() {
    const {match} = this.props;
    const userName = decodeURIComponent(match.params.details);
    const repositorios = await api.get(`/api/users/${userName}/repos`);
    this.setState({
      repositorios: repositorios.data
    });
  }

  render () {
    const { repositorios } = this.state;
    return (
      <Container>

        <Owner>
        <Link to="/">Voltar aos Usuários</Link>
  
        <table>
          <thead>  
            <tr>
              <th>id</th>
              <th>Nome do Repositório</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            { repositorios.map((repositorio, i) => 
              (<tr key={i}> 
                <td key={repositorio.id+i}><p>{repositorio.id}</p></td>
                <td key={repositorio.name+i}><p>{repositorio.name}</p></td>
                <td key={repositorio.html_url+i}><p><a href={repositorio.html_url}>{repositorio.html_url}</a></p></td>
              </tr>)
            )}
          </tbody>
        </table> 
        </Owner>
        
        
      </Container>
    );
  }
}