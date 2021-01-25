import React, {useState} from 'react';
import Popup from './../Popup/Popup';
import Button from '../Button/Button';
import styles from './CardTable.module.css';

const CardTable = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOnClick = () => {
        setIsPopupOpen(true);
    }

    const handleOnDelete = () => {
        console.log("delete");
        setIsPopupOpen(false);
    }

    return (
        <>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Carter</td>
                        <td>johncarter@email.com</td>
                        <td>Subscriber</td>
                        <td>
                            <Button title="Change Role" style={{ padding:'5px', backgroundColor:'#D8CBD6' }} onClick={handleOnClick} />
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>John Carter</td>
                        <td>johncarter@email.com</td>
                        <td>Subscriber</td>
                        <td>
                            <Button title="Change Role" style={{ padding:'5px', backgroundColor:'#D8CBD6' }} onClick={handleOnClick} />
                        </td>
                    </tr>
                </tbody>
            </table>

            {isPopupOpen ?
                <Popup title="Are you sure to delete this user?">
                    <div>
                        <Button 
                            title="cancel" 
                            btnColor="danger"
                            onClick={() => setIsPopupOpen(false)} 
                        />
                        <Button 
                            title="delete" 
                            onClick={handleOnDelete}
                            style={{ marginLeft:'10px' }}
                        />
                    </div>
                </Popup> :
                null
            }
        </>
    );
}
 
export default CardTable;