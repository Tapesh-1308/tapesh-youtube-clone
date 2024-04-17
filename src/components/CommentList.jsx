const Comment = ({comment}) => {
	const { name, text } = comment;
	return (
		<div className="flex bg-[#232323] rounded-sm p-2 text-white m-2 items-center">
			<img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" className="h-8 w-8"/>
			<div className="px-3">
				<p className="font-bold">{name}</p>
				<p>{text}</p>
			</div>
		</div>
	);
};

const CommentList = ({ comments }) => {
  return comments.map((comment, idx) => (
    <div>
      <Comment key={idx} comment={comment}/>
      <div className="pl-3 border-l border-l-[#555] ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ))
};

export default CommentList;
