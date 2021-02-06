import * as THREE from 'three';
import { TweenLite } from 'gsap';

import InteractiveControls from './controls/InteractiveControls';
import Particles from './particles/Particles';

const glslify = require('glslify');

export default class WebGLView {
  constructor(app) {
    this.app = app;

    this.currSample = null;

    // this.samples = ["sample-03.png"];
    // this.samples = ["cat.jpg"];
    // this.samples = ["cat2.jpeg"];
    this.samples = ["cat3.webp"];

    this.initThree();
    this.initParticles();
    this.initControls();

    const rnd = ~~(Math.random() * this.samples.length);
    this.goto(rnd);
  }

  initThree() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window,
      innerHeight,
      1,
      10000
    );
    this.camera.position.z = 300;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    this.clock = new THREE.Clock(true);
  }

  initControls() {
    this.interactive = new InteractiveControls(
      this.camera,
      this.renderer.domElement
    );
  }

  initParticles() {
    this.particles = new Particles(this);
    this.scene.add(this.particles.container);
  }

  update() {
    const delta = this.clock.getDelta();

    if (this.particles) this.particles.update(delta);
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }

  goto(index) {
    console.log("index", index);
    console.log("this.currSample", this.currSample);

    if (this.currSample === null) {
      this.particles.init(this.samples[index]);
    } else {
      //this.particles.hide(true).then(() => {
      //  this.particles.init(this.samples[index]);
      //});
    }

    this.currSample = index;
  }

  next() {
    if (this.currSample < this.samples.length - 1) {
      this.goto(this.currSample + 1);
    } else {
      this.goto(0);
    }
  }

  resize() {
    if (!this.renderer) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.fovHeight =
      2 *
      Math.tan((this.camera.fov * Math.PI) / 180 / 2) *
      this.camera.position.z;

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    if (this.interactive) this.interactive.resize();
    if (this.particles) this.particles.resize();
  }
}