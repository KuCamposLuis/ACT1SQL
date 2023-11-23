document.addEventListener('DOMContentLoaded', function() {
    fetch('listar.php')
    .then(res => res.json())
    .then(data => {
        let str ='';
        data.map(item => {
            str += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.nombre}</td>
                    <td>${item.totalmacenaje}</td>
                    <td>${item.placas}</td>
                    <td>${item.marca}</td>
                </tr>
            `;
        });
        document.getElementById('table-data').innerHTML = str;

        // Agrega la lógica de búsqueda
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', function() {
            const searchText = this.value.toLowerCase();
            const rows = document.querySelectorAll('#table-data tr');

            rows.forEach(row => {
                // Obtén las primeras letras o números de id y placas
                const idText = row.querySelector('td:first-child').textContent.toLowerCase().slice(0, searchText.length);
                const placasText = row.querySelector('td:nth-child(4)').textContent.toLowerCase().slice(0, searchText.length);
                
                // Compara con las primeras letras o números de id, placas, y nombre
                const match = idText.includes(searchText) || placasText.includes(searchText);
                row.style.display = match ? '' : 'none';
            });
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});
