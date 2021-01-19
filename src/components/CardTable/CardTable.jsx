import React from 'react';
import Button from '../Button/Button';
import styles from './CardTable.module.css';

const CardTable = () => {
    return (
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
                        <Button title="Change Role" style={{ padding:'5px', backgroundColor:'#D8CBD6' }} />
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>John Carter</td>
                    <td>johncarter@email.com</td>
                    <td>Subscriber</td>
                    <td>
                        <Button title="Change Role" style={{ padding:'5px', backgroundColor:'#D8CBD6' }} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
 
export default CardTable;