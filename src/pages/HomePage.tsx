import { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import Form from "react-bootstrap/esm/Form";
import RepoCard from "../components/RepoCard";
import { useDebounce } from "../hooks/debounce";
import {
  useLazyGetUserReposetoriesQuery,
  useSearchUsersQuery,
} from "../store/github/github.api";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);

  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0);
  }, [debounced, data]);

  const clickHandler = (username: string) => {
    fetchRepositories(username);
    setDropdown(false);
  };

  const [fetchRepositories, { data: repos }] =
    useLazyGetUserReposetoriesQuery();

  return (
    <div>
      {isError && <div> Ooops...Error </div>}

      <Container className="mh-100">
        <Form.Group className="search_input mb-2 mt-5" controlId="formSearch">
          <Form.Control
            type="input"
            placeholder="Type Github username to search (Minimum 4 symbols)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>
        {isLoading && <div>Is Loading...</div>}
        {dropdown && (
          <ListGroup>
            {data?.map((user) => (
              <ListGroup.Item
                className="hover:bg-emerald-300 cursor-pointer transition-colors"
                key={user.id}
                onClick={() => clickHandler(user.login)}
              >
                {user.login}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        {!dropdown && (
          <ListGroup className="overflow-y-auto repo_list">
            {repos?.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </ListGroup>
        )}
      </Container>
    </div>
  );
};

export default HomePage;
