const state = {
    Profile: false,
    Experience: false,
    Project: false,
    Contact: false
};

// ข้อมูลของแต่ละ section
const contentMap = {
    Profile: `
        <div class="flex flex-col gap-0">
            <h2 class="text-xl font-bold text-center">Siwasit Saengnikun</h2>
            <p class="text-gray-600">Software Developer Intern at NETBAY</p>
        </div>
        <hr class="my-4 w-full border-gray-300">

        
        <ul class="list-disc ml-5 text-gray-700">
            <li>Bachelor of Software Engineering, Faculty of Engineering, Thammasat University</li>
            <li>Expected to graduate in 2026</li>
            <li>Enjoy solving problems in a creative or tricky way</li>
        </ul>
    `,
    Experience: `
        <div class="flex flex-col gap-0">
            <h2 class="text-xl font-bold text-center">Experience</h2>
        </div>
        <hr class="my-4 w-full border-gray-300">
        <ul class="list-disc ml-5 text-gray-700">
            <li>Web developer trainee at IDEATRADE (June - August 2025)</li>
            <li>Software developer trainee at NETBAY (January - May 2026)</li>
        </ul>
    `,
    Project: `
        <div class="flex flex-col gap-0">
            <h2 class="text-xl font-bold text-center">Project</h2>
        </div>
        <hr class="my-4 w-full border-gray-300">

        <ul class="list-disc ml-5 text-gray-700">
            <li>Stock web development</li>
            <li>Project IBOX & Project Moodle at NETBAY</li>
            <li>Mobile application development</li>
        </ul>
    `,

    Contact: `
        <div class="flex flex-col gap-0">
            <h2 class="text-xl font-bold text-center">Contact</h2>
        </div>

        <hr class="my-4 w-full border-gray-300">

        <ul class="flex flex-col gap-3 text-gray-700">
            <!-- GitHub -->
            <li class="flex items-center gap-4">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 
                            0-.288-.01-1.05-.015-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 
                            1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 
                            0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 
                            2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.921.43.37.823 1.102.823 2.222 
                            0 1.606-.015 2.898-.015 3.293 0 .322.216.698.825.58C20.565 21.796 24 17.296 24 12 24 5.37 18.627 0 12 0z"/>
                </svg>
                <a href="https://github.com/siwasit" target="_blank" class="hover:underline">https://github.com/siwasit</a>
            </li>

            <!-- LinkedIn -->
            <li class="flex items-center gap-4">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.6v2.2h.05c.5-.95 1.72-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.75V24h-4V13c0-2.65-.05-6.05-3.7-6.05-3.7 0-4.27 2.9-4.27 5.9V24h-4V8h4z"/>
                </svg>
                <a href="https://www.linkedin.com/in/siwasit-saengnikun-130241271" target="_blank" class="hover:underline">https://www.linkedin.com/in/siwasit-saengnikun-130241271</a>
            </li>

            <!-- Email -->
            <li class="flex items-center gap-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" 
                    stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4z"/>
                    <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:siwasit2546@gmail.com" class="hover:underline">siwasit2546@gmail.com</a>
            </li>

            <!-- Telephone -->
            <li class="flex items-center gap-4">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" 
                    stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2A19.88 19.88 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.12.81.37 1.59.72 2.33a2 2 0 01-.45 2.11L9 10a16 16 0 006 6l.84-.84a2 2 0 012.11-.45c.74.35 1.52.6 2.33.72a2 2 0 011.72 2z"/>
                </svg>
                <a href="tel:+66934834385" class="hover:underline">+66 93 483 4385</a>
            </li>
        </ul>

    `
};

document.querySelectorAll('[data-title]').forEach(item => {
    item.addEventListener('click', function () {
        const title = this.dataset.title;
        const container = document.getElementById('dynamic-panel');
        container.innerHTML = '';

        const dynamicDiv = document.createElement('div');
        dynamicDiv.className = `
            p-6 flex flex-col items-center
            opacity-0 translate-y-4
            transition-all duration-500 ease-out
        `;

        // นำ content จาก contentMap ตาม title
        dynamicDiv.innerHTML = contentMap[title] || `<p>No content available</p>`;

        container.appendChild(dynamicDiv);

        // ทำ animation
        requestAnimationFrame(() => {
            dynamicDiv.classList.remove('opacity-0', 'translate-y-4');
            dynamicDiv.classList.add('opacity-100', 'translate-y-0');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-title]').forEach(item => {
        const title = item.dataset.title;
        const textEl = item.querySelector('#subText');

        // คลิกเพื่อ toggle state
        item.addEventListener('click', () => {
            for (let key in state) {
                if (key !== title && state[key]) {
                    state[key] = false;
                    const otherEl = document.querySelector(`[data-title="${key}"] #subText`);
                    otherEl.classList.add('opacity-0', 'translate-x-2');
                    otherEl.classList.remove('opacity-100');
                    setTimeout(() => otherEl.classList.add('hidden'), 0);
                }
            }
            state[title] = !state[title];

            if (state[title]) {
                // ถ้า isClick = true ให้โชว์ข้อความตลอด
                textEl.classList.remove('hidden', 'opacity-0', 'translate-x-2');
                textEl.classList.add('opacity-100', 'translate-x-0');
            } else {
                // ถ้า false ให้กลับไป behave ปกติ
                textEl.classList.add('opacity-0', 'translate-x-2');
                textEl.classList.remove('opacity-100');
                setTimeout(() => textEl.classList.add('hidden'), 300);
            }
        });

        document.querySelectorAll('[data-title]').forEach(item => {
            item.addEventListener('click', function () {
                const title = this.dataset.title;
                const container = document.getElementById('dynamic-panel');
                container.innerHTML = '';

                const dynamicDiv = document.createElement('div');
                dynamicDiv.className = `
            px-6 flex flex-col items-center
            opacity-0 
            transition-all duration-500 ease-out
        `;

                // นำ content จาก contentMap ตาม title
                dynamicDiv.innerHTML = contentMap[title] || `<p>No content available</p>`;

                container.appendChild(dynamicDiv);

                // ทำ animation
                requestAnimationFrame(() => {
                    dynamicDiv.classList.remove('opacity-0', 'translate-y-4');
                    dynamicDiv.classList.add('opacity-100', 'translate-y-0');
                });
            });
        })
    });
});
