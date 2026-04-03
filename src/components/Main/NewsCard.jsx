import { FaEye, FaStar, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";
import { FaRegBookmark } from "react-icons/fa6";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  
  const {
    id,
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="card bg-base-100 border-2 rounded border-base-200">
      
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold ">{author.name}</h4>
            <p className="text-sm text-accent">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaRegBookmark size={20} className="text-accent cursor-pointer" />
          <FaShareAlt size={20} className="text-accent cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="font-bold text-xl leading-snug">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt="thumbnail"
          className="rounded-xl w-full object-cover max-h-[300px]"
        />
      </figure>

      {/* Details */}
      <div className="px-4 py-4 ">
        <p className="text-accent">
          {details.length > 300 ? `${details.slice(0, 300)}...` : details}
          <Link to={`/news-details/${id}`} className="btn btn-link text-orange-500 p-0 ml-2">Read More</Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 pb-4 border-t-2 border-base-200 pt-3">
        
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar />  <FaStar /> <FaStar /> <FaStar />
          <span>{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-accent">
          <FaEye size={20}/>
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;