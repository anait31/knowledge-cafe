import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({blog, handleBookmarks}) => {
    const { title, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className="space-y-4 mb-6">
            <img className="w-full rounded-md" src={blog.cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex space-x-2 items-center">
                    <img className="w-12" src={blog.author_img} alt="" />
                    <div>
                        <h4 className="text-md font-bold">{author}</h4>
                        <p className="text-sm">{posted_date}</p>
                    </div>
                </div>
                <div className="flex space-x-3">
                    <p>{reading_time} min read</p>
                    <button onClick={() => handleBookmarks(title)}><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
            <p>{
                hashtags.map((has, idx) => <a key={idx} href=""><span className="px-2 font-semibold">#{has}</span></a>)    
            }</p>
            <button className="text-[#6047EC] font-semibold underline">Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleBookmarks: PropTypes.func
}
export default Blog;