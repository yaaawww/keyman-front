import React, { useState } from "react";
import PasswordService from "../services/keyman_service";
import AddRecordForm from "./Record/AddRecord";
import FindRecord from "./Record/FindRecord";

const ResList = () => {
  const getAllRecord = setRecords => {
    PasswordService.getAll()
      .then(response => {
        setRecords(response.data);
      })
      .catch(e => {
        console.log(e);
      })
  }
  
  const getRecord = (site_name, setRecords) => {
    PasswordService.findBySite(site_name)
      .then(response => {
        setRecords(response.data);
      })
      .catch(e => {
        console.log(e);
      })
  }
  
  const addRecord = new_record => {
    PasswordService.create(new_record)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      })
  }
  

  return (
    <div className="">
      <h1> Your password Database </h1>
      <div>
        <FindRecord getAllRecord={getAllRecord} getRecord={getRecord} httpDelete={PasswordService.deleteById} httpUpdate={PasswordService.update}/>
      </div><br />
      <div>
        <AddRecordForm addRecord={addRecord} />
      </div>
    </div>
  );
}

export default ResList;