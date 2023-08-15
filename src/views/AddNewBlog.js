import "./Blog.scss";
import { useState } from "react";
import axios from "axios";
const AddNewBlog = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleButtonSubmit = async () => {
        if (!title) {
            console.log("empty title");
            return;
        }
        if (!content) {
            console.log("empty content");
            return;
        }
        let data = {
            title: title,
            body: content,
            userId: 1
        }
        let res = await axios.post("https://jsonplaceholder.typicode.com/posts", data);

        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNew(newBlog);
        }
    }
    return (
        <div className="add-new-container">
            <div className="text-add-new">------- Add new blog -------</div>
            <div className="input-data">
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="input-data">
                <label>Content:</label>
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <button className="btn-add-new" onClick={handleButtonSubmit}>Submit</button>
        </div>

    )
}
export default AddNewBlog;
