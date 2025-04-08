document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".form-step");
    const indicators = document.querySelectorAll(".step-indicator span");
    let currentStep = 0;

    function updateStep(newStep) {
        steps.forEach((step, index) => {
            step.classList.toggle("active", index === newStep);
        });

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === newStep);
        });

        currentStep = newStep;
    }

    function validateStep(stepIndex) {
        const inputs = steps[stepIndex].querySelectorAll("input, select");
        let isValid = true;

        inputs.forEach((input) => {
            if (!input.value) {
                input.style.border = "1px solid red";
                isValid = false;
            } else {
                input.style.border = "1px solid #ddd";
            }
        });

        return isValid;
    }

    document.querySelectorAll(".next").forEach((btn) => {
        btn.addEventListener("click", function () {
            if (validateStep(currentStep)) {
                if (currentStep < steps.length - 1) {
                    updateStep(currentStep + 1);
                }
            } else {
                alert("Por favor, preencha todos os campos antes de continuar.");
            }
        });
    });

    document.querySelectorAll(".prev").forEach((btn) => {
        btn.addEventListener("click", function () {
            if (currentStep > 0) {
                updateStep(currentStep - 1);
            }
        });
    });

    document.getElementById("multi-step-form").addEventListener("submit", function (e) {
        e.preventDefault(); // Sempre prevenir o envio automático
    
        if (!validateStep(currentStep)) {
            alert("Por favor, preencha todos os campos antes de enviar.");
        } else {
            alert("Formulário enviado com sucesso!");
            setTimeout(() => {
                window.location.href = "index.html"; // Redireciona após o alerta
            }, 1000); // Espera 1s para o usuário ver o alerta
        }
    });
    
});
