import Lists from '../Lists/TempLists.jsx';

const ListsLoad = (props) => {
  const posts = props.posts;

  return (
    <div className="posts">
      {posts.map((post) => (
        <Lists key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ListsLoad;
