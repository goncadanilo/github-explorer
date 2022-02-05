import { BiBookBookmark, BiGitRepoForked } from 'react-icons/bi';
import { FaRegStar, FaCircle } from 'react-icons/fa';

export function RepositoryItem(props) {
  return (
    <div className="repository-item">
      <a href={props.repository.html_url}>
        <BiBookBookmark />&nbsp;
        {props.repository.name}
      </a>

      <p>{props.repository.description}</p>

      <div className="repository-info">
        {props.repository.language && (
          <p>
            <FaCircle fontSize={10} />&nbsp;
            {props.repository.language}
          </p>
        )}

        {props.repository.stargazers_count ? (
          <p>
            <FaRegStar />&nbsp;
            {props.repository.stargazers_count}
          </p>
        ) : null}

        {props.repository.forks > 0 && (
          <p>
            <BiGitRepoForked />&nbsp;
            {props.repository.forks}
          </p>
        )}
      </div>
    </div>
  );
}
