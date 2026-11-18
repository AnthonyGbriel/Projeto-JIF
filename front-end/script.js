        document.getElementById('formLogin').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            if (email && senha) {
                window.location.href = 'menu.html?email=' + encodeURIComponent(email);
            }
        });
        
        const email = new URLSearchParams(window.location.search).get('email') || 'usuario@exemplo.com';
        document.getElementById('userInfo').textContent = `Logado como: ${email}`;

        function logout() {
            window.location.href = 'index.html';
        }

  