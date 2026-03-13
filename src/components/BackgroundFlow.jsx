import React, { useEffect, useRef } from 'react';
import './BackgroundFlow.css';

const BackgroundFlow = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const mouse = { x: 0, y: 0 };
        const onMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', resize);
        resize();

        const colors = [
            { r: 197, g: 160, b: 89 },
            { r: 226, g: 194, b: 117 },
            { r: 212, g: 175, b: 55 },
            { r: 255, g: 215, b: 0 },
        ];

        const particles = [];
        const particleCount = 150;
        const codeSnippets = [
            '{}', '</>', 'fn()', '0x1', '[]', '=>', 'git', 'API', 'npm', 'sql', 'React', 'Node', 'CSS', 'HTML', 'JS', 'Python', 'Java', 'AWS', 'Docker', 'K8s', 'REST', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Linux', 'Agile', 'Scrum', 'CI/CD', 'DevOps'
        ];

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 16 + 8;
                this.speed = Math.random() * 0.84 + 0.32;

                this.colorIndex = Math.floor(Math.random() * colors.length);
                this.color = colors[this.colorIndex];

                this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                this.opacity = Math.random() * 0.3 + 0.2;
                this.angle = Math.random() * Math.PI * 2;
                this.waveSpeed = Math.random() * 0.008;
                this.waveAmp = Math.random() * 50 + 20;
                this.yOffset = 0;
                this.pulsePhase = Math.random() * Math.PI * 2;
            }

            update() {
                this.x -= this.speed;

                const dx = this.x - mouse.x;
                const dy = (this.y + this.yOffset) - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 180) {
                    const force = (180 - distance) / 180;
                    this.x += dx * force * 0.04;
                    this.y += dy * force * 0.04;
                }

                this.angle += this.waveSpeed;
                this.yOffset = Math.sin(this.angle) * this.waveAmp;

                this.pulsePhase += 0.02;
                this.currentOpacity = this.opacity * (0.8 + Math.sin(this.pulsePhase) * 0.2);

                if (this.x < -100) {
                    this.x = canvas.width + 100;
                    this.y = Math.random() * canvas.height;
                    this.colorIndex = Math.floor(Math.random() * colors.length);
                    this.color = colors[this.colorIndex];
                }
            }

            draw() {
                const { r, g, b } = this.color;

                ctx.font = `600 ${this.size}px "JetBrains Mono", monospace`;
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.currentOpacity})`;
                ctx.fillText(this.text, this.x, this.y + this.yOffset);

                ctx.shadowBlur = 15;
                ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            ctx.strokeStyle = 'rgba(197, 160, 89, 0.03)';
            ctx.lineWidth = 1;
            const step = 120;
            for (let x = 0; x < canvas.width; x += step) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            for (let y = 0; y < canvas.height; y += step) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="background-flow-canvas" />;
};

export default BackgroundFlow;
