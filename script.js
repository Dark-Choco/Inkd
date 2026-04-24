window.addEventListener('scroll', () => {
    const scrollVal = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollVal / maxScroll) * 100;
    
    // Update Diver Position
    const diver = document.getElementById('diver-sprite');
    diver.style.top = `calc(${scrollPercent}% - 25px)`; // Subtract half height to center
    
    // Update Depth Text (Simulation)
    const depthText = document.getElementById('depth-text');
    const depthMeters = Math.floor(scrollPercent * 50); // Simulating 5000m depth
    depthText.innerText = `${depthMeters}m`;

    // Trigger "Abyss" UI changes earlier and more subtly
    if (scrollPercent > 40) {
        document.body.classList.add('abyss-mode');
    } else {
        document.body.classList.remove('abyss-mode');
    }
});

console.log("INK'D SYSTEM_STABLE: Modular spawning logic initialized.");