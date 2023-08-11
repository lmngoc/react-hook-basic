import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link, useHistory } from "react-router-dom";
const Blog = () => {
    const { data: dataBlog, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
    let newData = []
    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 10);
        console.log("check new  data", newData);
    }

    let history = useHistory();

    const handleAddNew = () => {
        history.push("/add-new-blog");
    }
    return (
        <>
            <div><button className="btn-add-new" onClick={handleAddNew}>+ Add new blog</button></div>
            <div className="blogs-container">
                {loading === false && newData && newData.length > 0 && newData.map((item) => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">{item.title}</div>
                            <div className="content">{item.body}</div>
                            <button><Link to={`/blog/${item.id}`}>View detail</Link></button>
                        </div>
                    )
                })}
                {loading === true && <div style={{ textAlign: 'center', width: "100%" }}>Loading ...</div>}
            </div>
        </>


    )
}
export default Blog