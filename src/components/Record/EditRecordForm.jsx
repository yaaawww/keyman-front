import React, { useState, useEffect } from 'react'

const EditRecordForm = props => {
  const [ record, setRecord ] = useState(props.currentRecord); 

  useEffect(
    () => {
      setRecord(props.currentRecord);
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target;

    setRecord({ ...record, [name]: value }); 
  }

  return (
    <form className="form__group"
      onSubmit={event => {
        event.preventDefault();
        props.updateRecord(record.id, record);
      }}
    >
      <input className="form__input" type="text" placeholder="website"  name="website" value={record.website} onChange={handleInputChange} /><br />
      <input className="form__input" type="text" placeholder="username" name="username" value={record.username} onChange={handleInputChange} /><br />
      <input className="form__input" type="text" placeholder="password" name="password" value={record.password} onChange={handleInputChange} /><br />

      <button className="button-6">Update user</button>
      <button className="button-6" onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  )
}

export default EditRecordForm;