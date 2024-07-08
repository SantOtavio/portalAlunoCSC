document.addEventListener('DOMContentLoaded', function() {
    const openMenuBtn = document.getElementById('openMenuBtn');
    const sidebar = document.getElementById('sidebar');

    openMenuBtn.addEventListener('click', function() {
        if (sidebar.style.display === 'block') {
            sidebar.style.display = 'none';
            openMenuBtn.textContent = 'Abrir quadro';
        } else {
            sidebar.style.display = 'block';
            openMenuBtn.textContent = 'Sair do Menu';
        }
    });

    const dayOptions = document.querySelectorAll('.day-option');
    const scheduleContainer = document.getElementById('scheduleContainer');

    dayOptions.forEach(function(option) {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedDay = e.target.textContent.trim();
            displaySchedule(selectedDay);
            sidebar.style.display = 'none';
            openMenuBtn.textContent = 'Abrir quadro';
        });
    });

    function displaySchedule(day) {
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

        if (schedule[day]) {
            renderSchedule(day, schedule[day].materia, schedule[day].professor);
        } else {
            renderSchedule(day, 'Sem aula', '');
        }
    }

    function renderSchedule(day, discipline, professor) {
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
                            <td data-label="Horário">18:45</td>
                            <td data-label="Disciplina">${discipline}</td>
                            <td data-label="Professor">${professor}</td>
                            <td data-label="Detalhes"><a class="detail-btn" href="#" onclick="showDetails('${discipline}', 'Aula 1')">Detalhar</a></td>
                        </tr>
                        <tr>
                            <td data-label="Horário">19:45</td>
                            <td data-label="Disciplina">${discipline}</td>
                            <td data-label="Professor">${professor}</td>
                            <td data-label="Detalhes"><a class="detail-btn" href="#" onclick="showDetails('${discipline}', 'Aula 2')">Detalhar</a></td>
                        </tr>
                        <tr>
                            <td data-label="Horário">20:45</td>
                            <td data-label="Disciplina">${discipline}</td>
                            <td data-label="Professor">${professor}</td>
                            <td data-label="Detalhes"><a class="detail-btn" href="#" onclick="showDetails('${discipline}', 'Aula 3')">Detalhar</a></td>
                        </tr>
                        <tr>
                            <td data-label="Horário">21:45</td>
                            <td data-label="Disciplina">${discipline}</td>
                            <td data-label="Professor">${professor}</td>
                            <td data-label="Detalhes"><a class="detail-btn" href="#" onclick="showDetails('${discipline}', 'Aula 4')">Detalhar</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;

        scheduleContainer.innerHTML = scheduleHTML;
    }

    function showDetails(discipline, lesson) {
        alert(`Detalhes da ${lesson} de ${discipline}`);
    }

    // Obter o dia da semana atual
    const today = new Date().getDay();
    const daysOfWeek = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
    const currentDay = daysOfWeek[today - 1]; // Subtrair 1 porque getDay() retorna 0 para domingo

    // Exibir o horário do dia atual por padrão
    if (currentDay) {
        displaySchedule(currentDay);
    }
});
