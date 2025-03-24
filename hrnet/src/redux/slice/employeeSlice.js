import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

// Fonction pour formater les dates en DD/MM/YYYY
const formatDate = (timestamp) => {
  if (!timestamp) return "";
  return new Intl.DateTimeFormat("fr-FR").format(timestamp.toDate());
};

// Récupération des employés depuis Firebase en formatant les dates
export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    const employeesRef = collection(db, "employees");
    const querySnapshot = await getDocs(employeesRef);

    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        firstName: data.firstName,
        lastName: data.lastName,
        department: data.department,
        dateOfBirth: formatDate(data.dateOfBirth),
        startDate: formatDate(data.startDate),
        street: data.street,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
      };
    });
  }
);

// Ajout d'un employé dans Firebase
export const addEmployeeToFirebase = createAsyncThunk(
  "employees/addEmployeeToFirebase",
  async (employee) => {
    const docRef = await addDoc(collection(db, "employees"), employee);
    return { id: docRef.id, ...employee };
  }
);

// Création du slice Redux pour gérer les employés
const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    list: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addEmployeeToFirebase.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default employeeSlice.reducer;
