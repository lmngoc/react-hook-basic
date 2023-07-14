
import useFetch from "../customize/fetch";

const Covid = () => {

    const { data: listUser, loading, error } = useFetch('https://reqres.in/api/users?page=2');

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