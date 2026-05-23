import { type RefObject, useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { SpiralItem } from '../types';

interface UseSpiralProps {
  mountRef: RefObject<HTMLDivElement | null>;
  items: SpiralItem[];
  onHover: (idx: number) => void;
  onClick: (idx: number) => void;
  onSectionChange: (year: number | string) => void;
}

export function useSpiral({ mountRef, items, onHover, onClick, onSectionChange }: UseSpiralProps) {
  const onHoverRef = useRef(onHover);
  const onClickRef = useRef(onClick);

  useEffect(() => {
    onHoverRef.current = onHover;
    onClickRef.current = onClick;
  }, [onHover, onClick]);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode || items.length === 0) return;

    // --- SCENE SETUP ---
    const width = mountNode.clientWidth;
    const height = mountNode.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountNode.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const isMobile = window.innerWidth < 768;
    const cameraZ = isMobile ? 12 : 9;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(5.5, 0, cameraZ);
    camera.lookAt(0, 0, 0);

    const group = new THREE.Group();
    scene.add(group);

    // --- HELIX SETUP ---
    const R = isMobile ? 2.2 : 2.8;
    const TURNS = 2.2;
    const TH = items.length * 2.8;

    const points = [];
    for (let i = 0; i <= 400; i++) {
      const t = i / 400;
      const x = R * Math.cos(t * TURNS * 2 * Math.PI);
      const y = (1 - t) * TH - TH / 2;
      const z = R * Math.sin(t * TURNS * 2 * Math.PI);
      points.push(new THREE.Vector3(x, y, z));
    }

    const curve = new THREE.CatmullRomCurve3(points);

    // --- SPIRAL LINE STYLE ---
    const innerTubeGeo = new THREE.TubeGeometry(curve, 500, 0.022, 8, false);
    const outerTubeGeo = new THREE.TubeGeometry(curve, 200, 0.10, 8, false);

    const innerTubeMat = new THREE.MeshBasicMaterial({
      color: 0xc8deff,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const outerTubeMat = new THREE.MeshBasicMaterial({
      color: 0x1a4f9c,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const innerTube = new THREE.Mesh(innerTubeGeo, innerTubeMat);
    const outerTube = new THREE.Mesh(outerTubeGeo, outerTubeMat);
    group.add(innerTube);
    group.add(outerTube);

    // Lights for cable volume
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x7eb8f7, 20);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // --- ICONS & NODES SETUP ---
    const getIconEmoji = (item: SpiralItem) => {
      const cat = item.cat?.toLowerCase() || '';
      if (cat.includes('web')) return '🌐';
      if (cat.includes('mobile')) return '📱';
      if (cat.includes('desktop')) return '💻';
      if (cat.includes('api')) return '⚙️';
      if (cat.includes('open source')) return '📖';
      return item.kind === 'project' ? '📁' : '🏆';
    };

    const createIconTexture = (emoji: string, color: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d')!;
      
      // Glow
      ctx.shadowBlur = 20;
      ctx.shadowColor = color;
      
      ctx.fillStyle = color;
      ctx.font = '80px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(emoji, 64, 64);
      
      return new THREE.CanvasTexture(canvas);
    };

    const N = items.length;
    const clickables: THREE.Mesh[] = [];
    const nodeGroups: THREE.Group[] = [];
    const mainMeshes: THREE.Object3D[] = [];

    items.forEach((item, i) => {
      const t = (i + 0.5) / N;
      const pos = curve.getPoint(t);

      const nodeGroup = new THREE.Group();
      nodeGroup.position.copy(pos);

      // Icon Sprite
      const texture = createIconTexture(getIconEmoji(item), item.color);
      const spriteMat = new THREE.SpriteMaterial({ 
        map: texture, 
        transparent: true, 
        blending: THREE.AdditiveBlending 
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(0.6, 0.6, 1);
      nodeGroup.add(sprite);

      // Invisible Click Mesh
      const clickGeo = new THREE.SphereGeometry(0.4, 8, 8);
      const clickMat = new THREE.MeshBasicMaterial({ visible: false });
      const clickMesh = new THREE.Mesh(clickGeo, clickMat);
      clickMesh.userData = { idx: i };
      nodeGroup.add(clickMesh);
      clickables.push(clickMesh);
      mainMeshes.push(sprite);

      // Halo
      const haloGeo = new THREE.SphereGeometry(0.3, 12, 12);
      const haloMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(item.color),
        transparent: true,
        opacity: 0.1,
        blending: THREE.AdditiveBlending,
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      nodeGroup.add(halo);

      group.add(nodeGroup);
      nodeGroups.push(nodeGroup);
    });

    // --- STARS SETUP ---
    const starsGeo = new THREE.BufferGeometry();
    const starsCount = 1800;
    const posArray = new Float32Array(starsCount * 3);
    const colArray = new Float32Array(starsCount * 3);
    const tempColor = new THREE.Color();

    for (let i = 0; i < starsCount; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 80;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 80;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const hue = 0.56 + Math.random() * 0.10; // [0.56, 0.66]
      const sat = 0.7;
      const lum = 0.35 + Math.random() * 0.30; // [0.35, 0.65]
      tempColor.setHSL(hue, sat, lum);
      colArray[i * 3] = tempColor.r;
      colArray[i * 3 + 1] = tempColor.g;
      colArray[i * 3 + 2] = tempColor.b;
    }

    starsGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    starsGeo.setAttribute('color', new THREE.BufferAttribute(colArray, 3));

    const starsMat = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });
    const stars = new THREE.Points(starsGeo, starsMat);
    scene.add(stars);

    // --- SCROLL LOGIC ---
    const maxScroll = TH * 0.44;
    const scroll = { target: maxScroll, current: maxScroll }; // Start at Top (Recent)

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      scroll.target -= e.deltaY * 0.02; // Inverted: scroll down (positive delta) moves spiral up
      scroll.target = Math.max(-maxScroll, Math.min(maxScroll, scroll.target));
    };
    mountNode.addEventListener('wheel', onWheel, { passive: false });

    // --- RAYCASTING ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-2, -2);
    let hoveredIdx = -1;

    const onMouseMove = (e: MouseEvent) => {
      const rect = mountNode.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    mountNode.addEventListener('mousemove', onMouseMove);

    const onMouseClick = () => {
      if (hoveredIdx !== -1) {
        onClickRef.current(hoveredIdx);
      }
    };
    mountNode.addEventListener('click', onMouseClick);

    // --- RESIZE ---
    const onResize = () => {
      const w = mountNode.clientWidth;
      const h = mountNode.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // --- ANIMATION LOOP ---
    const clock = new THREE.Clock();
    let reqId: number;

    let activeYear = '';

    const tick = () => {
      const time = clock.getElapsedTime();

      // Scroll interpolation
      scroll.current += (scroll.target - scroll.current) * 0.06;
      group.position.y = -scroll.current;
      
      // Rotation linked to scroll (no auto-rotation when idle)
      group.rotation.y = scroll.current * 0.15;

      // Stars rotation still animated
      stars.rotation.y = time * 0.015;

      // Section (Year) detection
      // Progress 0 at Top (maxScroll), Progress 1 at Bottom (-maxScroll)
      const progress = (maxScroll - scroll.current) / (maxScroll * 2);
      const currentIdx = Math.floor(progress * items.length);
      const currentItem = items[Math.max(0, Math.min(items.length - 1, currentIdx))];
      if (currentItem && currentItem.year.toString() !== activeYear) {
        activeYear = currentItem.year.toString();
        onSectionChange(activeYear);
      }

      // Raycasting
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(clickables);
      let newHovered = -1;
      if (intersects.length > 0) {
        newHovered = intersects[0].object.userData.idx;
      }

      if (newHovered !== hoveredIdx) {
        hoveredIdx = newHovered;
        onHoverRef.current(hoveredIdx);
        mountNode.style.cursor = hoveredIdx !== -1 ? 'pointer' : 'default';
      }

      // Nodes animation
      nodeGroups.forEach((nodeGroup, i) => {
        const isHovered = hoveredIdx === i;
        const targetScale = isHovered ? 2 : 1;

        const scale = targetScale + 0.06 * Math.sin(time * 2.5 + i * 1.4);
        nodeGroup.scale.set(scale, scale, scale);

        const mesh = mainMeshes[i];
        if (mesh.userData.kind === 'accomplishment') {
          mesh.rotation.y = time * 1.5;
        }
      });

      renderer.render(scene, camera);
      reqId = requestAnimationFrame(tick);
    };
    tick();

    // --- CLEANUP ---
    return () => {
      cancelAnimationFrame(reqId);
      mountNode.removeEventListener('wheel', onWheel);
      mountNode.removeEventListener('mousemove', onMouseMove);
      mountNode.removeEventListener('click', onMouseClick);
      window.removeEventListener('resize', onResize);
      if (mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

