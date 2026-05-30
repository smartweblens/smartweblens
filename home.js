document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('contactModal');
    const openModalBtn = document.getElementById('openContactModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const whatsappForm = document.getElementById('whatsappForm');

    // Open Modal
    if (openModalBtn) {
        openModalBtn.onclick = () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        };
    }

    // Close Modal
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    if (closeModalBtn) {
        closeModalBtn.onclick = closeModal;
    }

    // Close on outside click
    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };

    // Form Submission
    if (whatsappForm) {
        whatsappForm.onsubmit = (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            const whatsappNumber = '918228985946';
            const text = `Hi SmartWebLens, I'm interested in your services.
            
*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Subject:* ${subject}
*Message:* ${message}`;

            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

            window.open(whatsappUrl, '_blank');
            closeModal();
            whatsappForm.reset();
        };
    }
});
