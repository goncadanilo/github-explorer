import { useEffect, useState } from 'react';
import { RepositoryItem, Repository } from "./RepositoryItem";
import '../styles/repositories.scss';

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/goncadanilo/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Meus Repositórios</h1>

      <div className="repository-container">
        {repositories.map(repository => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </div>
    </section>
  )
}
