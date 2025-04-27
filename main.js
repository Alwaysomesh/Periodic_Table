let renderer, scene, camera;
let currentMolecule = null;

document.addEventListener('DOMContentLoaded', () => {
    initPeriodicTable();
    setupModal();
});

const nobleGasConfigs = {
    'He': '1s2',
    'Ne': '1s2 2s2 2p6',
    'Ar': '1s2 2s2 2p6 3s2 3p6',
    'Kr': '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6',
    'Xe': '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6',
    'Rn': '1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6'
};

function normalizeElectronConfig(config) {
    const superscripts = {
        '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5',
        '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁰': '0'
    };
    return config.replace(/[¹²³⁴⁵⁶⁷⁸⁹⁰]/g, m => superscripts[m]);
}

function expandElectronConfig(config) {
    const match = config.match(/\[([A-Za-z]+)\]\s*(.*)/);
    if (match) {
        const nobleGas = match[1];
        const rest = match[2];
        if (nobleGasConfigs[nobleGas]) {
            return nobleGasConfigs[nobleGas] + ' ' + rest;
        }
    }
    return config; // if no brackets, return as is
}

function initPeriodicTable() {
    const container = document.getElementById('periodic-table');
    
    elements.forEach(element => {
        const el = document.createElement('div');
        el.className = `element ${element.category.replace(' ', '-')}`;
        el.innerHTML = `
            <div class="number">${element.number}</div>
            <div class="symbol">${element.symbol}</div>
        `;
        
        // Position elements using grid properties
        el.style.gridRow = element.gridRow;
        el.style.gridColumn = element.gridColumn;
        
        el.style.backgroundColor = `var(--${element.category})`;
        el.addEventListener('click', () => showElementDetails(element));
        container.appendChild(el);
    });
}

function showElementDetails(element) {
    const modal = document.getElementById('details-modal');
    document.getElementById('element-name').textContent = element.name;
    document.getElementById('atomic-number').textContent = element.number;
    document.getElementById('atomic-weight').textContent = element.weight;
    document.getElementById('category').textContent = element.category;
    document.getElementById('electron-config').textContent = element.config;
    document.getElementById('discovery').textContent = element.discovery;

    if (element.config) init3DModel(element);  // Pass the element to the 3D model function
    modal.style.display = 'block';
}

function init3DModel(element) {
    const expandedConfig = expandElectronConfig(element.config);
    const normalizedConfig = normalizeElectronConfig(expandedConfig);
    const atoms = createAtomsFromElectronConfig(normalizedConfig);

    if (currentMolecule) {
        scene.remove(currentMolecule);
        currentMolecule = null;
    }

    console.log("Initializing 3D model for:", element.name);  // Debug log

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000); // Pure black background


    const container = document.getElementById('model-container');
    container.innerHTML = '';  // Clear old content
    container.appendChild(renderer.domElement);

    // Check if model creation was successful
    console.log("Creating atoms based on electron config:", element.config);  // Debug log

    if (atoms.length === 0) {
        console.log("No atoms created for this configuration.");
    }
    
    currentMolecule = new THREE.Group();

    atoms.forEach(atom => {
        currentMolecule.add(atom);  // Add each atom to the group
    });

    scene.add(currentMolecule);
    const backgroundParticles = createBackgroundParticles(scene);


    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(ambientLight, directionalLight);

    camera.position.z = 2 + (element.number / 10); 
    camera.position.y = 1; // Adjust camera height
    camera.lookAt(0, 0, 0); // Look at the center of the scene

    // Render loop
    function animate() {
        requestAnimationFrame(animate);
        currentMolecule.rotation.y += 0.01;
        backgroundParticles.rotation.y += backgroundParticles.userData.rotationSpeed; // Rotate background particles
        renderer.render(scene, camera);
    }
    animate();
}

function createBackgroundParticles(scene) {
    const particles = new THREE.Group();
    const particleCount = 200; // number of particles
    const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true });

    for (let i = 0; i < particleCount; i++) {
        const particle = new THREE.Mesh(
            new THREE.SphereGeometry(0.02), // tiny particles
            particleMaterial
        );

        // Random position in a sphere
        const radius = Math.random() * 6 + 2; // between 2 and 8
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.random() * Math.PI;

        particle.position.set(
            radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.sin(phi) * Math.sin(theta),
            radius * Math.cos(phi)
        );

        particles.add(particle);
    }

    // Add a slow rotation animation
    particles.userData = { rotationSpeed: 0.0015 }; // custom speed for later use

    scene.add(particles);

    return particles;
}

function createAtomsFromElectronConfig(config) {
    const atoms = [];
    const orbitals = config.split(' ');  // Split by spaces (like 1s2 2s2 2p6)

    orbitals.forEach(orbital => {
        const match = orbital.match(/^(\d)([spdf])(\d+)$/);
        if (match) {
            const [_, shell, orbitalType, electrons] = match;
            const shellNumber = parseInt(shell);
            const electronCountInOrbital = parseInt(electrons);

            if (orbitalType === 's') {
                createSOrbital(atoms, shellNumber, electronCountInOrbital);
            } else if (orbitalType === 'p') {
                createPOrbital(atoms, shellNumber, electronCountInOrbital);
            } else if (orbitalType === 'd') {
                createDOrbital(atoms, shellNumber, electronCountInOrbital);
            } else {
                // fallback
                for (let i = 0; i < electronCountInOrbital; i++) {
                    const electron = createElectron(shellNumber * 1.5);
                    electron.position.set(
                        Math.cos((2 * Math.PI * i) / electronCountInOrbital) * shellNumber,
                        Math.sin((2 * Math.PI * i) / electronCountInOrbital) * shellNumber,
                        0
                    );
                    atoms.push(electron);
                }
            }
        }
    });

    return atoms;
}

function parseElectronConfig(config) {
    const orbitalConfigs = [];
    const regex = /(\d+)([spdf])(\d+)/g;
    let match;
    
    while ((match = regex.exec(config)) !== null) {
        orbitalConfigs.push({
            shell: parseInt(match[1]),
            type: match[2],
            electrons: parseInt(match[3]),
        });
    }

    return orbitalConfigs;
}

function createSOrbital(atoms, shell, electrons) {
    const radius = shell * 1.5;
    for (let i = 0; i < electrons; i++) {
        const electron = createElectron(radius, 's');
        const angle = (i / electrons) * Math.PI * 2;
        electron.position.set(radius * Math.cos(angle), radius * Math.sin(angle), 0);
        atoms.push(electron);
    }
}

function createPOrbital(atoms, shell, electrons) {
    const radius = shell * 2.0;
    const axes = ['x', 'y', 'z'];
    for (let i = 0; i < electrons; i++) {
        const axis = axes[i % 3];
        const electron = createElectron(radius, 'p');
        if (axis === 'x') {
            electron.position.set(radius * Math.cos(i), 0, 0);
        } else if (axis === 'y') {
            electron.position.set(0, radius * Math.cos(i), 0);
        } else {
            electron.position.set(0, 0, radius * Math.cos(i));
        }
        atoms.push(electron);
    }
}

function createDOrbital(atoms, shell, electrons) {
    const radius = shell * 2.5;
    for (let i = 0; i < electrons; i++) {
        const electron = createElectron(radius, 'd');
        const angle = (i / electrons) * Math.PI * 2;
        electron.position.set(radius * Math.cos(angle), radius * Math.sin(angle), 0);
        atoms.push(electron);
    }
}

function createElectron(radius, orbitalType = 's') {
    const electronGeometry = new THREE.SphereGeometry(0.08); // slightly smaller spheres
    let color = 0xffffff; // default white

    if (orbitalType === 'p') color = 0x00aaff;   // Blue
    else if (orbitalType === 'd') color = 0xaa00ff; // Purple
    else if (orbitalType === 'f') color = 0xff5555; // Red

    const electronMaterial = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.5,
        metalness: 0.3,
        roughness: 0.6
    });

    return new THREE.Mesh(electronGeometry, electronMaterial);
}

function getAtomColor(elementSymbol) {
    const colors = {
        'H': 0xFFFFFF,   // White
        'O': 0xFF0000,   // Red
        'Na': 0x0000FF,  // Blue
        // Add more element colors
    };
    return colors[elementSymbol] || 0x888888;
}

function setupModal() {
    const modal = document.getElementById('details-modal');
    document.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
        if(renderer) renderer.dispose();
    });

    window.onclick = (event) => {
        if(event.target === modal) {
            modal.style.display = 'none';
            if(renderer) renderer.dispose();
        }
    }
}
