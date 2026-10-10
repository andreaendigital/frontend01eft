import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const validateForm = ({ name, email, message }) => {
  const errors = {};
  const normalizedName = name.trim();
  const normalizedEmail = email.trim();
  const normalizedMessage = message.trim();

  if (!normalizedName) {
    errors.name = "Ingresa tu nombre completo.";
  } else if (normalizedName.length < 2 || normalizedName.length > 80) {
    errors.name = "El nombre debe tener entre 2 y 80 caracteres.";
  } else if (!/^[\p{L}\s'-]+$/u.test(normalizedName)) {
    errors.name = "El nombre solo puede contener letras, espacios y guiones.";
  }

  if (!normalizedEmail) {
    errors.email = "Ingresa tu correo electrónico.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(normalizedEmail)
  ) {
    errors.email = "Ingresa un correo electrónico válido, por ejemplo: nombre@dominio.cl.";
  }

  if (!normalizedMessage) {
    errors.message = "Escribe un mensaje para poder ayudarte.";
  } else if (normalizedMessage.length < 10 || normalizedMessage.length > 500) {
    errors.message = "El mensaje debe tener entre 10 y 500 caracteres.";
  }

  return errors;
};

const simulateSubmission = async (formData) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return formData;
};

function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submissionState, setSubmissionState] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentForm) => ({ ...currentForm, [name]: value }));
    setErrors((currentErrors) => {
      if (!currentErrors[name]) return currentErrors;
      const nextErrors = { ...currentErrors };
      delete nextErrors[name];
      return nextErrors;
    });
    setSubmissionState("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmissionState("error");
      return;
    }

    setErrors({});
    setSubmissionState("sending");

    try {
      await simulateSubmission({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });
      setFormData(initialForm);
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  };

  return (
    <form className="contact-form text-start" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="contact-name">Nombre completo</label>
        <input
          id="contact-name"
          name="name"
          className={`form-control${errors.name ? " is-invalid" : ""}`}
          placeholder="Ej. Juan Pérez"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name && (
          <p id="contact-name-error" className="invalid-feedback d-block mb-0">
            {errors.name}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-email">Correo electrónico</label>
        <input
          id="contact-email"
          name="email"
          className={`form-control${errors.email ? " is-invalid" : ""}`}
          type="email"
          placeholder="nombre@correo.com"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errors.email && (
          <p id="contact-email-error" className="invalid-feedback d-block mb-0">
            {errors.email}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">Mensaje</label>
        <textarea
          id="contact-message"
          name="message"
          className={`form-control${errors.message ? " is-invalid" : ""}`}
          rows="4"
          minLength="10"
          maxLength="500"
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
        />
        {errors.message && (
          <p
            id="contact-message-error"
            className="invalid-feedback d-block mb-0"
          >
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary w-100"
        disabled={submissionState === "sending"}
      >
        {submissionState === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>

      {submissionState === "success" && (
        <p className="form-feedback form-feedback-success" role="status">
          ¡Gracias! Tu mensaje fue registrado correctamente para esta
          demostración.
        </p>
      )}
      {submissionState === "error" &&
        Object.keys(errors).length === 0 && (
          <p className="form-feedback form-feedback-error" role="alert">
            No fue posible completar el envío. Inténtalo nuevamente.
          </p>
        )}
    </form>
  );
}

export default ContactForm;
