
    function showList(sectionId) {
        const section = document.getElementById(sectionId);
        
        // Periksa status display elemen dan toggle
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block'; // Tampilkan elemen
        } else {
            section.style.display = 'none'; // Sembunyikan elemen
        }
    }
    