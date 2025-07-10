// script.js

const vcData = [
    {
        name: "Sequoia Capital",
        industry: "fintech, ai",
        email: "john@sequoiacap.com",
        email_valid: true,
        linkedin: "https://linkedin.com/sequoiacap"
    },
    {
        name: "Accel",
        industry: "education, health",
        email: "info@accel.com",
        email_valid: false,
        linkedin: "https://linkedin.com/accel"
    },
    {
        name: "Andreessen Horowitz",
        industry: "ai, fintech",
        email: "partner@a16z.com",
        email_valid: true,
        linkedin: "https://linkedin.com/a16z"
    },
    {
        name: "Lightspeed Ventures",
        industry: "retail, ecommerce",
        email: "hello@lightspeed.com",
        email_valid: true,
        linkedin: "https://linkedin.com/lightspeed"
    },
    {
        name: "Matrix Partners",
        industry: "deeptech, robotics",
        email: "matrix@matrix.com",
        email_valid: false,
        linkedin: "https://linkedin.com/matrix"
    }
];

function searchVCs() {
    const industryInput = document.getElementById('industryInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const filteredVCs = vcData.filter(vc =>
        vc.industry.toLowerCase().includes(industryInput)
    );

    if (filteredVCs.length === 0) {
        resultsDiv.innerHTML = '<p>No VCs found for this industry.</p>';
        return;
    }

    filteredVCs.forEach(vc => {
        const vcCard = document.createElement('div');
        vcCard.innerHTML = `
            <h3>${vc.name}</h3>
            <p><strong>Industry:</strong> ${vc.industry}</p>
            <p><strong>Email:</strong> ${vc.email} (${vc.email_valid ? '✅' : '❌'})</p>
            <p><a href="${vc.linkedin}" target="_blank">LinkedIn Profile</a></p>
            <hr>
        `;
        resultsDiv.appendChild(vcCard);
    });
}
