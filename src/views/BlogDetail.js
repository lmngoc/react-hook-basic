import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const BlogDetail = () => {
    let { id } = useParams();
    console.log("check param id", id);
    return (
        <div>
            Hello detail blog {id}
        </div>
    )
}
export default BlogDetail;