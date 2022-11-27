import { Button, Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import { IRepo } from "../models/models";

const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.github);
  const { removeFromFavourites } = useActions();

  const removeFromFavourite = (
    fav: IRepo,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    removeFromFavourites(fav);
  };

  return (
    <Container>
      <h4 className="mt-5 ml-5">List of Favourites Repositories</h4>
      {favourites.length === 0 && <h5>No favourites</h5>}
      <ListGroup className="mt-1 ">
        {favourites.map(fav => (
          <ListGroup.Item
            className="hover:bg-emerald-300 cursor-pointer transition-colors  clearfix"
            key={fav.id}
          >
            <a
              className="no-underline"
              href={fav.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <div>{fav.full_name}</div>
              <Button
                onClick={(e) => removeFromFavourite(fav, e)}
                variant="secondary"
                className="right-1 top-px absolute"
              >
                Remove
              </Button>
            </a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default FavouritesPage;
