:root {
    --primary-color: #4a6fa5;
    --secondary-color: #166088;
    --accent-color: #4cb5f5;
    --light-color: #f8f9fa;
    --dark-color: #343a40;
    --success-color: #28a745;
    --danger-color: #dc3545;
    --warning-color: #ffc107;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f5f7fa;
    color: var(--dark-color);
    line-height: 1.6;
}

.container {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 70px 1fr;
    grid-template-areas: 
        "header header"
        "sidebar main";
    min-height: 100vh;
}

/* Header Styles */
header {
    grid-area: header;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    padding: 0 20px;
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    color: var(--primary-color);
}

.logo span {
    margin-left: 10px;
}

/* Sidebar Styles */
.sidebar {
    grid-area: sidebar;
    background-color: white;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    padding: 20px 0;
}

.nav-menu {
    list-style: none;
}

.nav-item {
    padding: 15px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s;
}

.nav-item:hover {
    background-color: #f0f2f5;
}

.nav-item.active {
    background-color: #e9ecef;
    border-left: 4px solid var(--primary-color);
}

/* Main Content Styles */
main {
    grid-area: main;
    padding: 20px;
    overflow-y: auto;
}

.page {
    display: none;
}

.page.active {
    display: block;
}

.page-title {
    margin-bottom: 20px;
    color: var(--dark-color);
    font-size: 28px;
    font-weight: 600;
}

.card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    padding: 20px;
    margin-bottom: 20px;
}

.card h2 {
    margin-bottom: 15px;
    color: var(--dark-color);
    font-size: 20px;
}

/* Form Styles */
.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    color: var(--dark-color);
}

input, select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s;
}

input:focus, select:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(74, 111, 165, 0.2);
}

/* Button Styles */
.btn {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    display: inline-block;
    text-align: center;
    text-decoration: none;
}

.btn:hover {
    background-color: var(--secondary-color);
}

.btn-success {
    background-color: var(--success-color);
}

.btn-success:hover {
    background-color: #218838;
}

.btn-danger {
    background-color: var(--danger-color);
}

.btn-danger:hover {
    background-color: #c82333;
}

.btn-warning {
    background-color: var(--warning-color);
    color: var(--dark-color);
}

.btn-warning:hover {
    background-color: #e0a800;
}

/* Table Styles */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #f8f9fa;
    font-weight: 600;
    color: var(--dark-color);
}

tr:hover {
    background-color: #f5f5f5;
}

/* Summary Styles */
.summary-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
}

.summary-card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    padding: 20px;
    text-align: center;
    border-left: 4px solid var(--primary-color);
}

.summary-card h3 {
    font-size: 14px;
    color: #6c757d;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.summary-card p {
    font-size: 24px;
    font-weight: bold;
    color: var(--dark-color);
}

.profit {
    color: var(--success-color);
}

.loss {
    color: var(--danger-color);
}

/* Action Buttons */
.action-buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
}

/* Modal Styles */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 1000;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
}

.modal-header h2 {
    color: var(--dark-color);
    margin: 0;
}

.close-modal {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #6c757d;
    padding: 0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.close-modal:hover {
    color: var(--danger-color);
}

/* Responsive Styles */
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
        grid-template-areas: 
            "header"
            "main";
    }
    
    .sidebar {
        display: none;
    }
    
    .summary-container {
        grid-template-columns: 1fr;
    }
    
    .action-buttons {
        flex-direction: column;
    }
    
    table {
        display: block;
        overflow-x: auto;
    }
}

/* Empty State */
.empty-state {
    text-align: center;
    padding: 40px 20px;
    color: #6c757d;
}

.empty-state p {
    margin-top: 10px;
    font-size: 16px;
}
