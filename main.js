// Datos simulados (ejemplo de base de datos)
const clinicas = {
    clinic1: ["Dr. Pérez", "Dra. Gómez"],
    clinic2: ["Dr. Rodríguez", "Dra. Martínez"]
};

// Elementos del DOM
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");
const clinicSelect = document.getElementById("clinic");
const dentistSelect = document.getElementById("dentist");
const appointmentForm = document.getElementById("appointmentForm");

// Abrir modal al hacer clic en "Iniciar Sesión"
loginBtn.addEventListener("click", () => {
    loginModal.style.display = "block";
});

// Cerrar modal al hacer clic en la "X"
closeBtn.addEventListener("click", () => {
    loginModal.style.display = "none";
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = "none";
    }
});

// Cargar dentistas según la clínica seleccionada
clinicSelect.addEventListener("change", (e) => {
    const clinicId = e.target.value;
    dentistSelect.innerHTML = '<option value="">Selecciona un dentista</option>';

    if (clinicas[clinicId]) {
        clinicas[clinicId].forEach(dentista => {
            const option = document.createElement("option");
            option.value = dentista;
            option.textContent = dentista;
            dentistSelect.appendChild(option);
        });
    }
});

// Simular envío del formulario de citas
appointmentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Cita agendada con éxito! Recibirás un correo de confirmación.");
    appointmentForm.reset();
});