document.addEventListener('DOMContentLoaded', () => {
    initializeStars();
    initialize3DGlobe();
});

function initializeStars() {
    const canvas = document.getElementById('stars-canvas');
    const container = document.getElementById('globe-container');
    if (!canvas || !container) {
        console.error('Stars canvas or globe container not found');
        return;
    }
    const ctx = canvas.getContext('2d');
    let stars = [];

    function resizeCanvas() {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    }
    resizeCanvas();

    function generateStars() {
        stars = [];
        const numStars = window.innerWidth < 768 ? 500 : 1000;
        for (let i = 0; i < numStars; i++) {
            stars.push({
                type: 'star',
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5 + 0.5,
                alpha: Math.random() * 0.5 + 0.2,
                depth: Math.random() * 15 + 1
            });
        }
        const numClouds = window.innerWidth < 768 ? 2 : 5;
        for (let i = 0; i < numClouds; i++) {
            stars.push({
                type: 'cloud',
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 80 + 160,
                alpha: 0.08,
                depth: Math.random() * 2 + 0.5
            });
        }
        stars.sort((a, b) => a.depth - b.depth);
    }

    function drawScene(offsetX = 0, offsetY = 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let item of stars) {
            const x = item.x + offsetX / item.depth;
            const y = item.y + offsetY / item.depth;

            if (item.type === 'star') {
                ctx.beginPath();
                ctx.arc(x, y, item.size, 0, 2 * Math.PI);
                ctx.fillStyle = `rgba(255, 255, 255, ${item.alpha})`;
                ctx.fill();
            } else if (item.type === 'cloud') {
                const gradient = ctx.createRadialGradient(x, y, item.size * 0.3, x, y, item.size);
                gradient.addColorStop(0, `rgba(255,255,255,${item.alpha})`);
                gradient.addColorStop(1, 'rgba(255,255,255,0)');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(x, y, item.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    generateStars();
    drawScene();

    let mouseX = 0;
    let mouseY = 0;
    container.addEventListener('mousemove', e => {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX = (e.clientX - centerX) * 0.1;
        mouseY = (e.clientY - centerY) * 0.1;
        drawScene(mouseX, mouseY);
    });

    window.addEventListener('resize', () => {
        resizeCanvas();
        generateStars();
        drawScene();
    });
}

function initialize3DGlobe() {
    const globeContainer = document.getElementById('globe');
    if (!globeContainer) {
        console.error('3D Globe container not found');
        return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, globeContainer.clientWidth / globeContainer.clientHeight, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(globeContainer.clientWidth, globeContainer.clientHeight);
    renderer.setClearColor(0x000000, 0);
    globeContainer.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(10, 10, 20);
    scene.add(pointLight);

    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg');
    const geometry = new THREE.SphereGeometry(5, 64, 64);
    const material = new THREE.MeshStandardMaterial({
        map: earthTexture,
        metalness: 0.3,
        roughness: 0.7
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    const animate = () => {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.001;
        renderer.render(scene, camera);
    };
    animate();

    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        pointLight.position.x = 10 + mouseX * 5;
        pointLight.position.y = 10 + mouseY * 5;
    });

    window.addEventListener('resize', () => {
        if (globeContainer.clientWidth > 0 && globeContainer.clientHeight > 0) {
            camera.aspect = globeContainer.clientWidth / globeContainer.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(globeContainer.clientWidth, globeContainer.clientHeight);
        }
    });
}
