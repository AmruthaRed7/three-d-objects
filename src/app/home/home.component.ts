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

    //this.dataService.sendGetRequest().subscribe((data: any[]) => {
    //  console.log(data);
    //  this.Objects = data;
    //})
  }

  display(shape, colour) {


    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    var geometry;

    if (shape == "Cube")
    {
      geometry = new THREE.BoxGeometry(1, 1, 1);
    }

    else if (shape == "Sphere")
    {
      geometry = new THREE.SphereGeometry(1, 1, 1);
    }

    else if (shape == "Cone")
    {
       geometry = new THREE.ConeBufferGeometry(2, 6, 10);

    }
    else if (shape == "Cylinder")
    {
      geometry = new THREE.CylinderBufferGeometry(2, 2, 5, 10);
    }

    else if (shape == "Ring")
    {
      geometry = new THREE.RingGeometry(1, 3, 5);
    }

    var material = new THREE.MeshBasicMaterial({ color: colour });
    var design = new THREE.Mesh(geometry, material);
    scene.add(design);

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);

      design.rotation.x += 0.01;
      design.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

  }

}


