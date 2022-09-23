import React, { useState } from 'react'
import RecordTable from './RecordTable'
import EditRecordForm from './EditRecordForm';


const FindRecord = props => {
    const initFormState = { id: null, website: '', username:'', password: ''};
    const recordData = [
        initFormState,
    ]
    const [records, setRecords] = useState(recordData); 
    const [site_name, setSite_name] = useState("");
    const [currentRecord, setCurrentRecord] = useState(initFormState);
    const [editing, setEditing] = useState(false);

    const deleteRecord = (id) => {
        setEditing(false);
        props.httpDelete(id)
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log(e);
          })

        setRecords(records.filter(record => (record.id != id)))
    }
    
    const updateRecord = (id, updatedRecord) => {
        console.log(updatedRecord);
        const data = {...updatedRecord, iv: ''};
        props.httpUpdate(data)
          .then(response => {
             console.log(response);
          })
          .catch(e => {
             console.log(e);
          })

        setRecords(records.map(record => (record.id === id ? updatedRecord : record)));
    }  
    
    const editRow = record => {
        setEditing(true)
        setCurrentRecord({ id: record.id, website: record.website, username: record.username, password: record.password })
    }

    return (
        <div>
            <div>
                <form className="form__group"
                    onSubmit={event => {
                        event.preventDefault();
                        props.getRecord(site_name, setRecords);
                        console.log(records);
                }}>
                    <input
                        type="text"
                        placeholder="website name"
                        id="name"
                        value={site_name} 
                        className="form__input"
                        onChange={(e) => {
                            setSite_name(e.target.value);
                        }} 
                    />
                    <label htmlFor="name" className="form__label"> website name </label>
                </form>
                    <RecordTable records={records} deleteRecord={deleteRecord} editRow={editRow}/>
            </div>
            <div>
                {editing ? (
                    <div>
                        <h2>Edit user</h2>
                        <EditRecordForm 
                            editing={editing}
                            setEditing={setEditing}
                            currentRecord={currentRecord}
                            updateRecord={updateRecord}
                        />
                    </div>
                ): (
                    <p>nothing</p>
                )}
            </div>
        </div>
    )
}

export default FindRecord;