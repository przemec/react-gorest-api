import { useState, useEffect, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../../store";
import * as S from "./styles";
import * as C from "./constants";
import { post, posts_response } from "../../api/gorest_response_models";
import { addPosts, updatePage } from "../../store/posts/actions";
import PostResult from "../../components/PostResult";

const Posts: React.FC<C.PostsProps> = ({ posts, addPosts, requestPage, updatePage }) => {
  const [isLoadingDone, setLoadDone] = useState(false);
  const [observedElement, setElement] = useState<HTMLElement | null>(null);

  const intersectionObserver = useRef(
    new IntersectionObserver(
      (entries) => {
        const first_entry = entries[0];
        first_entry.isIntersecting && loader.current();
      },
      { threshold: 0.5 }
    )
  );

  const loadPosts = useCallback(() => {
    fetch(`https://gorest.co.in/public/v1/posts?page=${requestPage}`, { method: "GET" })
      .then((res) => res.json())
      .then(({ data, meta }: posts_response) => {
        if (data.length === 0) return setLoadDone(true);
        updatePage(meta.pagination.page + 1);
        addPosts(data);
      });
  }, [addPosts, requestPage, updatePage]);
  const loader = useRef(loadPosts);

  useEffect(() => {
    loader.current = loadPosts;
  }, [loadPosts]);

  useEffect(() => {
    const currentElement = observedElement;
    const currentObserver = intersectionObserver.current;

    if (!currentElement) return;

    currentObserver.observe(currentElement);
    return () => {
      currentObserver.unobserve(currentElement);
    };
  }, [observedElement]);

  useEffect(() => {
    if (posts.length !== 0) return;
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <S.ResultsWrapper>
        {posts && posts.length === 0 ? (
          <h1>Loading initial records...</h1>
        ) : (
          posts.map((post, index: number) => <PostResult key={index} data={post} />)
        )}
        {!isLoadingDone && posts.length !== 0 && <h2 ref={setElement}>Loading...</h2>}
      </S.ResultsWrapper>
    </S.Container>
  );
};

const mapSTP = (state: AppState) => ({
  posts: state.posts.list,
  requestPage: state.posts.page,
});

const mapDTP = (dispatch: Dispatch) => ({
  addPosts: (e: post[]) => dispatch(addPosts(e)),
  updatePage: (e: number) => dispatch(updatePage(e)),
});

export default connect(mapSTP, mapDTP)(Posts);
