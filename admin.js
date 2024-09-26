// Sample registration data
const registrations = [
    { sponsorId: 'S123', sponsorName: 'John Doe', position: 'Left', package: 'Kavach (3000.00)', name: 'Alice', phone: '1234567890', email: 'alice@example.com', address: '123 Street, City' },
    { sponsorId: 'S124', sponsorName: 'Jane Doe', position: 'Right', package: 'Kavach (3000.00)', name: 'Bob', phone: '0987654321', email: 'bob@example.com', address: '456 Avenue, City' },
    // Add more entries here
];

function populateTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    
    registrations.forEach(reg => {
        const row = `
            <tr>
                <td>${reg.sponsorId}</td>
                <td>${reg.sponsorName}</td>
                <td>${reg.position}</td>
                <td>${reg.package}</td>
                <td>${reg.name}</td>
                <td>${reg.phone}</td>
                <td>${reg.email}</td>
                <td>${reg.address}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function filterByPosition() {
    const filter = document.getElementById('filterPosition').value;
    const filteredRegistrations = filter
        ? registrations.filter(reg => reg.position === filter)
        : registrations;

    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    filteredRegistrations.forEach(reg => {
        const row = `
            <tr>
                <td>${reg.sponsorId}</td>
                <td>${reg.sponsorName}</td>
                <td>${reg.position}</td>
                <td>${reg.package}</td>
                <td>${reg.name}</td>
                <td>${reg.phone}</td>
                <td>${reg.email}</td>
                <td>${reg.address}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Initial population of table
window.onload = function() {
    populateTable();
};
