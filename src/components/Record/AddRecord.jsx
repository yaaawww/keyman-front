import React, {useState} from "react";

const AddRecordForm = props => {
    const initFormState = {website: '', username: '', password: '', iv: ''};
    const [new_record, setnew_record] = useState(initFormState); 

    const handleInputChange = event => {
        const { name, value } = event.target;
        
        setnew_record({ ...new_record, [name]: value })
    }

    return(
        <form className="form__group"
			onSubmit={event => {
				event.preventDefault()
				if (!new_record.website || !new_record.username) return

				props.addRecord(new_record)
				setnew_record(initFormState)
			}}
		>
			<input className="form__input" type="text" placeholder="website" name="website" value={new_record.website} onChange={handleInputChange} /> <br />
			<input className="form__input" type="text" placeholder="username" name="username" value={new_record.username} onChange={handleInputChange} />
			<button className="button-6">Add new user</button>
		</form>
    );
}

export default AddRecordForm;
