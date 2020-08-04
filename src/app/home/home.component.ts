import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { objects } from '../objects';
import * as THREE from 'three';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  objects=objects;

  constructor(private dataService: DataService) { }

  ngOnInit() {


  }

  //Displays the 3D object for the associated Id
  display(shape, colour) {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor("#e5e5e5");
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement)
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    })
    var geometry;

    switch (shape) {

      case "Cube": {
        geometry = new THREE.BoxGeometry(1, 1, 1);
        break;
      }

      case "Sphere": {
        geometry = new THREE.SphereGeometry(1, 32, 32);
        break;
      }

      case "Cone": {
        geometry = new THREE.ConeGeometry(1, 4, 50);
        break;
      }

      case "Cylinder": {
        geometry = new THREE.CylinderGeometry(1, 1, 3, 300);
        break;
      }

      case "Ring": {
        geometry = new THREE.RingGeometry(1, 2, 32);
        break;
      }

      case "Tetrahedron": {
        geometry = new THREE.TetrahedronGeometry(1, 0);
        break;
      }
    }

    var material = new THREE.MeshLambertMaterial({ color: colour });
    var design = new THREE.Mesh(geometry, material);
    scene.add(design);

    camera.position.z = 5;

    var light = new THREE.PointLight(0xFFFFFF, 1, 500)
    light.position.set(10, 0, 25);
    scene.add(light);

    var animate = function () {
      requestAnimationFrame(animate);

      design.rotation.x += 0.01;
      design.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
    
  }

  //Reload the page by closing the 3d object window
  Reload() {
    window.location.reload();
  }

}


