import Post from "../Post";
import {useEffect, useState} from "react";
import Pagination from "./paginations/pagination";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  const [page, setPage] = useState(1)
  const [totalPosts,setTotalPosts] = useState([0]);
  useEffect(() => {
    fetch(`http://localhost:4000/post?page=${page}`).then(response => {
      response.json().then(posts => {
        console.log(posts.posts.total);
        setPosts(posts.posts.page);
        setTotalPosts(posts.posts.total)
      });
    });
  }, [page]);
  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
      {posts.length > 0 && <Pagination
      total={totalPosts}
      setTotal={setTotalPosts}
      setPage={setPage}
      />}
    </>
  );
}