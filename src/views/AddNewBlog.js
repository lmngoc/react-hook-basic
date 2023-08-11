import "./Blog.scss";
import { useState } from "react";
const AddNewBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleButtonSubmit = () => {
        if (!title) {
            console.log("empty title");
            return;
        }
        if (!content) {
            console.log("empty content");
            return;
        }
        console.log("check data state: ", title, content);
    }
    return (
        <div className="add-new-container">
            <div className="text-add-new">------- Add new blog -------------</div>
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
