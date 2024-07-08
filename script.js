document.addEventListener('DOMContentLoaded', function() {
    const openMenuBtn = document.getElementById('openMenuBtn');
    const sidebar = document.getElementById('sidebar');

    openMenuBtn.addEventListener('click', function() {
        if (sidebar.style.display === 'block') {
            sidebar.style.display = 'none'; 
            openMenuBtn.textContent = 'Abrir Menu';
        } else {
            sidebar.style.display = 'block';
            openMenuBtn.textContent = 'Sair do Menu';
        }
    });

    const dayOptions = document.querySelectorAll('.day-option');
    dayOptions.forEach(function(option) {
        option.addEventListener('click', function(e) {
            const selectedDay = e.target.textContent.trim();

            const schedule = {
                'Segunda-feira': {
                    materia: 'Desenvolvimento Web UX',
                    professor: 'Luiz'
                },
                'Terça-feira': {
                    materia: 'Lógica de Programação',
                    professor: 'Marcos'
                },
                'Quarta-feira': {
                    materia: 'Sistema Operacional',
                    professor: 'Andrei'
                },
                'Quinta-feira': {
                    materia: 'Programação para Computadores',
                    professor: 'Tassiana'
                },
                'Sexta-feira': {
                    materia: 'Agenda',
                    professor: 'X'
                }
            };

            if (schedule[selectedDay]) {
                displaySchedule(selectedDay, schedule[selectedDay].materia, schedule[selectedDay].professor); 
            } else {
                displaySchedule(selectedDay, 'Sem aula', '');
            }

            // Fechar o menu ao clicar em um dia da semana
            sidebar.style.display = 'none';
            openMenuBtn.textContent = 'Abrir Menu';
        });
    });

    function displaySchedule(day, discipline, professor) {
        const scheduleContainer = document.getElementById('scheduleContainer');
        const scheduleHTML = `
            <h2>Horário para ${day}</h2>
            <div class="schedule-info">
                <h3>${discipline}</h3>
                <table class="schedule-table">
                    <thead>
                        <tr>
                            <th>Horário</th>
                            <th>Disciplina</th>
                            <th>Professor</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>18:45</td>
                            <td>${discipline}</td>
                            <td>${professor}</td>
                            <td><a class="detail-btn" href="#" onclick="showDetails('${discipline}', 'Aula 1')">Detalhar</a></td>
                        </tr>
                        <tr>
                            <td>19:45</td>
                            <td>${discipline}</td>
                            <td>${professor}</td>
                            <td><a class="detail-btn" href="#" onclick="showDetails('${discipline}', 'Aula 2')">Detalhar</a></td>
                        </tr>
                        <tr>
                            <td>20:45</td>
                            <td>${discipline}</td>
                            <td>${professor}</td>
                            <td><a class="detail-btn" href="#" onclick="showDetails('${discipline}', 'Aula 3')">Detalhar</a></td>
                        </tr>
                        <tr>
                            <td>21:45</td>
                            <td>${discipline}</td>
                            <td>${professor}</td>
                            <td><a class="detail-btn" href="#" onclick="showDetails('${discipline}', 'Aula 4')">Detalhar</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
        scheduleContainer.innerHTML = scheduleHTML;
    }

    function showDetails(discipline, lesson) {
        alert(`Detalhes de ${discipline}, ${lesson}`);
    }
});
