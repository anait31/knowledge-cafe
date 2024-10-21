import PropTypes from "prop-types";
const Bookmarks = ({ bookmars }) => {
    return (
        <div className="w-1/3">
            <h2 className="text-[#6047EC] border-1 p-3 rounded-md font-bold text-xl text-center  mb-3 bg-[#6047EC20] border-b-gray-[]#">Time Spent Reading: min</h2>
            <div className="bg-gray-100 py-4 px-6 rounded-md min-h-96 overflow-y-auto">
                <h2 className="font-bold text-xl">Bookmarked Blogs: {bookmars.length}</h2>
                <div className="font-semibold bg-white p-3 rounded-md my-2">
                    <h3>{bookmars}</h3>
                </div>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmars: PropTypes.array
}

export default Bookmarks;