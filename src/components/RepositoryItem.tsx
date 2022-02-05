import { BiBookBookmark, BiGitRepoForked } from 'react-icons/bi';
import { FaRegStar, FaCircle } from 'react-icons/fa';

export type Repository = {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks: number;
  html_url: string;
};

type RepositoryItemProps = {
  repository: Repository;
};

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <div className="repository-item">
      <a href={repository.html_url} target="_blank">
        <BiBookBookmark />&nbsp;
        {repository.name}
      </a>

      <p>{repository.description}</p>

      <div className="repository-info">
        {repository.language && (
          <p>
            <FaCircle fontSize={10} />&nbsp;
            {repository.language}
          </p>
        )}

        {repository.stargazers_count > 0 && (
          <p>
            <FaRegStar />&nbsp;
            {repository.stargazers_count}
          </p>
        )}

        {repository.forks > 0 && (
          <p>
            <BiGitRepoForked />&nbsp;
            {repository.forks}
          </p>
        )}
      </div>
    </div>
  );
}
