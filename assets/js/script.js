document.addEventListener("DOMContentLoaded", function () {
    fetch('text.json')
        .then(response => response.json())
        .then(data => {
            if (data.number && data.text) {
                const encodedText = encodeURIComponent(data.text);
                const whatsappLink = `https://wa.me/${data.number}?text=${encodedText}`;

                document.querySelectorAll('.whatsapp-btn').forEach(button => {
                    button.setAttribute('href', whatsappLink);
                });
            } else {
                console.error("Dados do JSON estão incompletos.");
            }
        })
        .catch(error => console.error('Erro ao carregar JSON:', error));
});