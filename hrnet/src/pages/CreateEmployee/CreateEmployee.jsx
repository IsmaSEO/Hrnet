import MyModal from "isma-react-modal-hrnet-1";
import { useState } from "react";
import CreateEmployeeForm from "../../components/CreateEmployeeForm/CreateEmployeeForm";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./CreateEmployee.css";

const CreateEmployee = () => {
  // Ajout de l'état pour gérer l'affichage de la modale
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour afficher la modale après l'ajout d'un employé
  const handleEmployeeAdded = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="create-employee-page">
      <Navbar />
      <main className="main-content">
        <section className="header">
          <div className="logo-container">
            <img
              src="src/assets/img/logo.webp"
              alt="Wealth Health Logo"
              className="logo"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h1 className="app-title">WealthHealth IntraNetwork</h1>
          <p className="app-description">
            Your application to manage human resources
          </p>
        </section>

        <section className="form-section">
          <h2 className="form-title">HRnet | Create Employee</h2>
          <div className="form-container">
            {/* Ajout handleEmployeeAdded en prop pour afficher la modale */}
            <CreateEmployeeForm onEmployeeAdded={handleEmployeeAdded} />
          </div>
        </section>
      </main>

      {/* Affichage de la modale après l'ajout d'un employé */}
      {isModalOpen && (
        <MyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Employee Created"
        >
          <p>The employee has been successfully added.</p>
        </MyModal>
      )}

      <Footer />
    </div>
  );
};

export default CreateEmployee;
