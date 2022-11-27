import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { IRepo } from "../models/models";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { useState } from "react";

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addToFavourites, removeFromFavourites } = useActions();
  const { favourites } = useAppSelector((state) => state.github);

  const [isFav, setIsFav] = useState(favourites.some((i) => i.id === repo.id));

  const addToFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFav(true);
    addToFavourites(repo);
  };

  const removeFromFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFav(false);
    removeFromFavourites(repo);
  };

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="no-underline"
    >
      <ListGroup.Item className="hover:bg-emerald-300 cursor-pointer transition-colors">
        <div className="font-bold">{repo.full_name}</div>
        <div>Description: {repo.description}</div>
        <div>Visibility: {repo.visibility}</div>
        <div>Forks: {repo.forks}</div>
        <div>Watchers: {repo.watchers}</div>

        {!isFav && (
          <Button
            onClick={addToFavourite}
            variant="success"
            className="mt-1"
          >
            Add to Favourites
          </Button>
        )}

        {isFav && (
          <Button onClick={removeFromFavourite} variant="secondary">
            Remove from Favourites
          </Button>
        )}
      </ListGroup.Item>
    </a>
  );
};

export default RepoCard;
