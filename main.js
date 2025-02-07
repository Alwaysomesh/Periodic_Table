let renderer, scene, camera;
let currentMolecule = null;

document.addEventListener('DOMContentLoaded', () => {
    initPeriodicTable();
    setupModal();
});

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

    if(element.molecule) init3DModel(element.molecule);
    modal.style.display = 'block';
}

function init3DModel(moleculeData) {
    if(currentMolecule) {
        scene.remove(currentMolecule);
        currentMolecule = null;
    }

    // Three.js setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(400, 400);
    renderer.setClearColor(0xf0f0f0);

    const container = document.getElementById('model-container');
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Add atoms
    const atoms = moleculeData.atoms.map(atom => {
        const geometry = new THREE.SphereGeometry(0.3);
        const material = new THREE.MeshPhongMaterial({ 
            color: getAtomColor(atom.element), 
            specular: 0x111111,
            shininess: 30
        });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(atom.x, atom.y, atom.z);
        return sphere;
    });

    // Add bonds
    const bonds = moleculeData.bonds.map(bond => {
        const start = moleculeData.atoms[bond[0]];
        const end = moleculeData.atoms[bond[1]];
        
        const direction = new THREE.Vector3(
            end.x - start.x,
            end.y - start.y,
            end.z - start.z
        );
        
        const length = direction.length();
        const geometry = new THREE.CylinderGeometry(0.1, 0.1, length, 8);
        geometry.rotateZ(Math.PI/2);
        const material = new THREE.MeshPhongMaterial({ color: 0x888888 });
        const cylinder = new THREE.Mesh(geometry, material);
        
        cylinder.position.set(
            (start.x + end.x)/2,
            (start.y + end.y)/2,
            (start.z + end.z)/2
        );
        return cylinder;
    });

    currentMolecule = new THREE.Group();
    currentMolecule.add(...atoms, ...bonds);
    scene.add(currentMolecule);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(ambientLight, directionalLight);

    camera.position.z = 5;
    
    // Animation
    function animate() {
        requestAnimationFrame(animate);
        currentMolecule.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
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
