import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Meus Repositórios</h1>

      <div className="repository-container">
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </div>
    </section>
  )
}
