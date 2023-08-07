import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../customize/fetch";
import "./Blog.scss";
const BlogDetail = () => {
    let { id } = useParams();
    let history = useHistory();
    //console.log("check param id", id);

    const { data: dataBlogDetail, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log("check datat detail", dataBlogDetail);
    const handleBackData = () => {
        history.push("/blog");
    }
    return (
        <div>
            <div><span onClick={handleBackData}>Back</span></div>
            <div className="blog-detail">
                {dataBlogDetail &&
                    <>
                        <div className="title">Blog ID : {id} --- {loading === true ? "Loading data ... " : dataBlogDetail.title} </div>
                        <div className="content">{dataBlogDetail.body}</div>
                    </>
                }
            </div>
        </div >
    )
}
export default BlogDetail;