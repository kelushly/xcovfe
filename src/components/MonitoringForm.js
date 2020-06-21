import React from 'react';
import { Form } from "react-bootstrap";
import { Field, FormRow, MultipleFields, Select } from "./form";
import { stageNames } from "../data/stages";

const AdmissionForm = ({ tickets, ticketId, editTicket }) => {
  const ticket = tickets.find(({ id }) => ticketId == id);
  const withEvent = method => event => method(event.target.value);

  const setRMDutyDoctor = withEvent(rmDutyDoctor => editTicket({ ...ticket, rmDutyDoctor }));
  const setVitalStats = withEvent(vitalStats => editTicket({ ...ticket, vitalStats }));
  const setRoutineDailyTestsRecord = withEvent(routineDailyTestsRecord => editTicket({ ...ticket, routineDailyTestsRecord }));
  const setDoctorRecordForDailyRounds = withEvent(doctorRecordForDailyRounds => editTicket({ ...ticket, doctorRecordForDailyRounds }));
  const setActiveNursingDetails = withEvent(activeNursingDetails => editTicket({ ...ticket, activeNursingDetails }));
  const setParamedicalStaff = withEvent(paramedicalStaff => editTicket({ ...ticket, paramedicalStaff }));
  const setPeriodicCovidReport = withEvent(periodicCovidReport => editTicket({ ...ticket, periodicCovidReport }));

  return (
    <Form>
      <h3>Test Result Form</h3>
      <FormRow>
        <Field label="RM/On duty Doctor" value={ticket.rmDutyDoctor} onChange={setRMDutyDoctor} />
        <Field label="Vital Stats 8 hourly record" value={ticket.vitalStats} onChange={setVitalStats} />
      </FormRow>
      <FormRow>
        <Field label="Routine Daily tests record" value={ticket.routineDailyTestsRecord} onChange={setRoutineDailyTestsRecord} />
        <Field label="Doctor record for Daily rounds" value={ticket.doctorRecordForDailyRounds} onChange={setDoctorRecordForDailyRounds} />
      </FormRow>
      <FormRow>
        <Field label="Active nursing details" value={ticket.activeNursingDetails} onChange={setActiveNursingDetails} />
        <Field label="Paramedical staff" value={ticket.paramedicalStaff} onChange={setParamedicalStaff} />
      </FormRow>
      <FormRow>
        <Field label="Periodic Covid Report" value={ticket.periodicCovidReport} onChange={setPeriodicCovidReport} />
      </FormRow>
    </Form>
  )
};

export default AdmissionForm;
