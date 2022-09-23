import React from 'react'
import '../table.scss'

const RecordTable = props => (
  <table className='center-table'>
    <thead>
      <tr>
        <th>id</th>
        <th>website</th>
        <th>username</th>
        <th>password</th>
      </tr>
    </thead>
    <tbody>
      {props.records.length > 0 ? (
        props.records.map(record => (
          <tr key={record.id}>
            <td data-th="id">{record.id}</td>
            <td data-th="website">{record.website}</td>
            <td data-th="username">{record.username}</td>
            <td data-th="password">{record.password}</td>
            <td>
              <button className="button-6"
                onClick={() => {
                  props.editRow(record)
                }}
              >
                Edit
              </button>

              <button className="button-6"
                onClick={() => 
                  props.deleteRecord(record.id)
                }
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No record</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default RecordTable
