import { useEffect, useState } from "react";
import axios from 'axios';
const Covid = () => {
    let [listUser, setListUser] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(false);
    //componentDidMount
    useEffect(() => {
        try {
            async function fetchData() {
                let res = await axios.get('https://reqres.in/api/users?page=2');
                let data = res && res.data && res.data.data ? res.data.data : [];

                setListUser(data);
                setLoading(false);
                setError(false);
            }
            fetchData();
        }
        catch (e) {
            console.log("e mess", e.message);
            setError(true);
            setLoading(false);
        }

    }, []);
    return (

        <table id="customers">
            {console.log('çheck data user', listUser)}
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {error === false && loading === false && listUser && listUser.length > 0 && listUser.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                        </tr>
                    )
                })}

                {loading === true && <tr><td colSpan="5" style={{ textAlign: 'center' }}>Loading ... </td></tr>}
                {error === true && <tr><td colSpan="5" style={{ textAlign: 'center' }}>something swrong</td></tr>}


            </tbody>


        </table>
    )
}
export default Covid;