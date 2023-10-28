const initialState = {
  appointments: [],
  editingIndex: -1,
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
      };

    case 'EDIT_APPOINTMENT':
      const { index, updatedAppointment } = action.payload;
      const updatedAppointments = [...state.appointments];
      updatedAppointments[index] = updatedAppointment;
      return {
        ...state,
        appointments: updatedAppointments,
      };

    case 'EDIT_INDEX':
      return {
        ...state,
        editingIndex: action.payload.index,
      };

    case 'DELETE_APPOINTMENT':
      const deletedIndex = action.payload;
      const filteredAppointments = state.appointments.filter(
        (_, index) => index !== deletedIndex
      );
      return {
        ...state,
        appointments: filteredAppointments,
      };

    default:
      return state;
  }
};

export default appointmentReducer;
