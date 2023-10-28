

export const addAppointment = (newAppointment) => {
  return {
    type: "ADD_APPOINTMENT",
    payload: newAppointment,
  };
};

export const editAppointment = (index, updatedAppointment) => {
  return {
    type: "EDIT_APPOINTMENT",
    payload: { index, updatedAppointment },
  };
};

export const editIndex = (index) => {
  return {
    type: "EDIT_INDEX",
    payload: { index},
  };
};

export const deleteAppointment = (index) => {
  return {
    type: "DELETE_APPOINTMENT",
    payload: index,
  };
};
