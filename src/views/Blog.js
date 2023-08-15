import useFetch from "../customize/fetch";
import "./Blog.scss";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddNewBlog from "./AddNewBlog";
const Blog = () => {
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { data: dataBlog, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
    useEffect(() => {
        if (dataBlog && dataBlog.length > 0) {
            let data = dataBlog.slice(0, 10);
            setNewData(data);
        }
    }, [dataBlog])


    const handleAddNew = (blog) => {
        let data = newData;
        data.unshift(blog);
        setShow(false);
        setNewData(data);
    }
    const handleDeleteBlog = (id) => {

        let data = newData;
        data = data.filter(item => item.id !== id);
        setNewData(data);
    }
    return (
        <>
            <Button variant="primary" className="my-3" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>+ Add new blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNew={handleAddNew} />
                </Modal.Body>

            </Modal>
            <div className="blogs-container">
                {loading === false && newData && newData.length > 0 && newData.map((item) => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title"><span>{item.title}</span><span onClick={() => handleDeleteBlog(item.id)}>X</span></div>
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
export default Blog;
