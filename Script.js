import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const viewer = document.getElementById('anatomy-viewer');

if (viewer) {

  const bones = [
    {
      n: 1,
      name: "Skull",
      x: -0.28,
      y: 2.62,
      z: 0.10,
      side: "left",
      info: "Protects the brain and forms the framework of the head."
    },

    {
      n: 2,
      name: "Cervical Vertebrae",
      x: -0.38,
      y: 2.12,
      z: 0.08,
      side: "left",
      info: "The seven vertebrae in the neck that support the head and protect the spinal cord.s"
    },

    {
      n: 3,
      name: "Manubri Sterni",
      x: -0.42,
      y: 1.80,
      z: 0.10,
      side: "left",
      info: "The upper part of the sternum that connects to the clavicles and first ribs."
    },

    {
      n: 4,
      name: "Body of Sternum",
      x: -0.15,
      y: 1.50,
      z: 0.34,
      side: "left",
      info: "The long, central part of the sternum that forms most of the breastbone."
    },

    {
      n: 5,
      name: "Xiphoid Process",
      x: -0.25,
      y: 1.30,
      z: 0.34,
      side: "left",
      info: "The small, pointed lower part of the sternum."
    },

    {
      n: 6,
      name: "Lumbar Vertebrae",
      x: -0.40,
      y: 0.75,
      z: 0.08,
      side: "left",
      info: "The five large vertebrae in the lower back that support much of the body’s weight."
    },

    {
      n: 7,
      name: "Ilium",
      x: -0.1000,
      y: 0.50,
      z: 0.10,
      side: "left",
      info: "The large, upper part of the hip bone that supports and connects the pelvis."
    },

    {
      n: 8,
      name: "Sacrum",
      x: -0.1500,
      y: 0.30,
      z: 0.05,
      side: "left",
      info: "A triangular bone at the base of the spine that connects the spine to the pelvis."
    },

    {
      n: 9,
      name: "Coccyx",
      x: -0.1500,
      y: 0.15,
      z: 0.100,
      side: "left",
      info: "The small, triangular bone at the bottom of the spine, commonly known as the tailbone."
    },

    {
      n: 10,
      name: "Pubis",
      x: -0.1505,
      y: 0.00,
      z: 0.34,
      side: "left",
      info: "The front part of the pelvis that helps form the pelvic bone."
    },

    {
      n: 11,
      name: "Femur",
      x: -0.43,
      y: -0.55,
      z: 0.02,
      side: "left",
      info: "The longest and strongest bone in the human body."
    },

    {
      n: 12,
      name: "Patella",
      x: -0.1540,
      y: -1.25,
      z: 0.30,
      side: "left",
      info: "The kneecap that protects the knee joint."
    },

    {
      n: 13,
      name: "Tarsus",
      x: -0.36,
      y: -2.57,
      z: 0.10,
      side: "left",
      info: "The group of seven bones that form the ankle and back part of the foot."
    },

    {
      n: 14,
      name: "Metarsus",
      x: -0.28,
      y: -2.91,
      z: 0.20,
      side: "left",
      info: "The group of five long bones that form the middle part of the foot."
    },

    {
      n: 15,
      name: "Phalanges",
      x: -0.42,
      y: -4.00,
      z: 0.24,
      side: "right",
      info: "The bones of the fingers and toes that enable movement and grip."
    },

    {
      n: 16,
      name: "Orbital Cavity",
      x: 0.20,
      y: 2.55,
      z: 0.25,
      side: "right",
      info: "The bony socket in the skull that surrounds and protects the eye."
    },

    {
      n: 17,
      name: "Nasal Cavity",
      x: 0.12,
      y: 2.42,
      z: 0.28,
      side: "right",
      info: "The space inside the nose that allows air to enter, warm, filter, and moisten before reaching the lungs."
    },

    {
      n: 18,
      name: "Clavicle",
      x: 0.00,
      y: 2.10,
      z: -0.50,
      side: "right",
      info: "The collarbone that connects the shoulder to the upper chest and helps support the arm."
    },

    {
      n: 19,
      name: "Shoulder Blade",
      x: 0.60,
      y: 1.85,
      z: -0.05,
      side: "right",
      info: "The flat, triangular bone in the upper back that connects the arm to the collarbone and helps the shoulder move."
    },

    {
      n: 20,
      name: "Rib",
      x: -0.00,
      y: 1.30,
      z: 0.18,
      side: "right",
      info: "Bones forming the rib cage and protecting the heart and lungs."
    },

    {
      n: 21,
      name: "Humerus",
      x: 0.50,
      y: 1.10,
      z: 0.05,
      side: "right",
      info: "The long bone of the upper arm that connects the shoulder to the elbow."
    },

    {
      n: 22,
      name: "Ulna",
      x: 0.50,
      y: 0.37,
      z: 0.05,
      side: "right",
      info: "The forearm bone on the side of the little finger that helps form the elbow joint."
    },

    {
      n: 23,
      name: "Radius",
      x: 0.50,
      y: 0.25,
      z: 0.18,
      side: "right",
      info: "The forearm bone on the thumb side that helps form the wrist and elbow joints."
    },

    {
      n: 24,
      name: "Carpus",
      x: 0.50,
      y: 0.02,
      z: 0.12,
      side: "right",
      info: "The group of eight small bones that make up the wrist and connect the forearm to the hand."
    },

    {
      n: 25,
      name: "Metacarpus",
      x: 0.65,
      y: -0.25,
      z: 0.15,
      side: "right",
      info: "Five bones forming the palm of the hand."
    },

    {
      n: 26,
      name: "Phalanges",
      x: 0.65,
      y: -0.43,
      z: 0.16,
      side: "right",
      info: "The bones of the fingers and toes that allow movement and help with grip."
    },

    {
      n: 27,
      name: "Fibula",
      x: 0.20,
      y: -1.80,
      z: 0.02,
      side: "right",
      info: "The thinner bone on the outer side of the lower leg."
    },

    {
      n: 28,
      name: "Tibia",
      x: 0.05,
      y: -2.10,
      z: 0.08,
      side: "right",
      info: "The larger, weight-bearing bone in the lower leg that connects the knee to the ankle."
    }
  ];

  const labelLayer =
    viewer.querySelector(".anatomy-label-layer");

  const boneInfo =
    viewer.querySelector(".bone-info");

  const boneInfoNumber =
    viewer.querySelector(".bone-info-number");

  const boneInfoTitle =
    boneInfo?.querySelector("strong");

  const boneInfoText =
    boneInfo?.querySelector("small");

  const labelElements = [];

  bones.forEach((bone) => {

    const label = document.createElement("button");

    label.type = "button";

    label.className =
      `anatomy-callout ${bone.side}`;

    label.innerHTML = `
      <span class="callout-line"></span>
      <span class="callout-number">
        ${String(bone.n).padStart(2, "0")}
      </span>
      <span class="callout-name">
        ${bone.name}
      </span>
    `;

    label.addEventListener("click", () => {

      document
        .querySelectorAll(".anatomy-callout")
        .forEach((item) =>
          item.classList.remove("selected")
        );

      label.classList.add("selected");

      boneInfo.classList.add("visible");

      boneInfoNumber.textContent =
        String(bone.n).padStart(2, "0");

      boneInfoTitle.textContent =
        bone.name;

      boneInfoText.textContent =
        bone.info;

    });

    labelLayer.appendChild(label);

    labelElements.push({
      bone: bone,
      element: label,
      anchor: new THREE.Vector3(
        bone.x,
        bone.y,
        bone.z
      )
    });

  });

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#071321');

  const camera = new THREE.PerspectiveCamera(
    45,
    viewer.clientWidth / viewer.clientHeight,
    0.01,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(viewer.clientWidth, viewer.clientHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  viewer.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.enablePan = false;

  controls.minDistance = 1;
  controls.maxDistance = 15;

  const hemiLight = new THREE.HemisphereLight(
    0xc9edff,
    0x14213b,
    2
  );

  scene.add(hemiLight);

  const keyLight = new THREE.DirectionalLight(
    0xffffff,
    3
  );

  keyLight.position.set(4, 6, 5);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(
    0x32bfff,
    3
  );

  rimLight.position.set(-4, 2, -4);
  scene.add(rimLight);

  const fillLight = new THREE.PointLight(
    0x168bff,
    12,
    15
  );

  fillLight.position.set(0, 2, 3);
  scene.add(fillLight);

  const grid = new THREE.GridHelper(
    8,
    24,
    0x147db5,
    0x10334d
  );

  grid.position.y = -2.5;
  scene.add(grid);

  const loader = new GLTFLoader();

  loader.load(
    './models/Human%20skeleton.glb',

    (gltf) => {

      const model = gltf.scene;

      console.log("Skeleton loaded!");

      const originalBounds =
        new THREE.Box3().setFromObject(model);

      const originalSize =
        originalBounds.getSize(new THREE.Vector3());

      console.log("Original model size:", originalSize);

      const desiredHeight = 5.8;

      const scale =
        desiredHeight / originalSize.y;

      model.scale.setScalar(scale);

      const scaledBounds =
        new THREE.Box3().setFromObject(model);

      const scaledCenter =
        scaledBounds.getCenter(new THREE.Vector3());

      model.position.x -= scaledCenter.x;
      model.position.y -= scaledCenter.y;
      model.position.z -= scaledCenter.z;

      scene.add(model);

      model.traverse((child) => {
  if (child.isMesh) {
    console.log("MESH:", child.name);
  }
});

      const finalBounds =
        new THREE.Box3().setFromObject(model);

      const finalSize =
        finalBounds.getSize(new THREE.Vector3());

      const finalCenter =
        finalBounds.getCenter(new THREE.Vector3());

      console.log("Final skeleton size:", finalSize);

      const maxDimension = Math.max(
        finalSize.x,
        finalSize.y,
        finalSize.z
      );

      const fovRadians =
        THREE.MathUtils.degToRad(camera.fov);

      const distance =
  finalSize.y /
  (2 * Math.tan(fovRadians / 2) * 0.86);

      camera.position.set(
        finalCenter.x,
        finalCenter.y,
        finalCenter.z + distance
      );

      camera.near = 0.01;
      camera.far = 1000;

      camera.updateProjectionMatrix();
      controls.target.copy(finalCenter);

      controls.update();

      const loading =
        viewer.querySelector('.viewer-loading');

      if (loading) {
        loading.remove();
      }
      const hint =
        document.createElement('div');

      hint.className = 'viewer-controls-hint';


      viewer.appendChild(hint);

    },

    undefined,

    (error) => {

      console.error(
        'Could not load the skeleton model:',
        error
      );

      const placeholder =
  viewer.querySelector('.model-placeholder');

if (placeholder) {
  placeholder.remove();
}

      const message =
        document.createElement('div');

      message.className = 'viewer-error';

      message.textContent =
        'Could not load the skeleton. Check the model filename and run this website with VS Code Live Server.';

      viewer.appendChild(message);
    }
  );

  function resizeViewer() {

    const width = viewer.clientWidth;
    const height = viewer.clientHeight;

    if (!width || !height) return;

    camera.aspect = width / height;

    camera.updateProjectionMatrix();

    renderer.setSize(
      width,
      height
    );
  }

  const resizeObserver =
    new ResizeObserver(resizeViewer);

  resizeObserver.observe(viewer);

  function updateAnatomyLabels() {

  if (!labelElements.length) return;

  const width = viewer.clientWidth;
  const height = viewer.clientHeight;

  const projected = new THREE.Vector3();

  labelElements.forEach(({ bone, element, anchor }) => {

    projected.copy(anchor);
    projected.project(camera);

    const x =
      (projected.x * 0.5 + 0.5) * width;

    const y =
      (-projected.y * 0.5 + 0.5) * height;

    const offset =
      bone.side === "left"
        ? -90
        : 90;

    let finalX = x + offset;

    let finalY = y;

    finalX = Math.max(
      35,
      Math.min(width - 35, finalX)
    );

    finalY = Math.max(
      40,
      Math.min(height - 50, finalY)
    );

    element.style.left =
      `${finalX}px`;

    element.style.top =
      `${finalY}px`;
  });
}

  function animate() {

  requestAnimationFrame(animate);

  controls.update();

  updateAnatomyLabels();

  renderer.render(scene, camera);
}

  animate();
}

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener(
      'click',
      (event) => {

        const target =
          document.querySelector(
            link.getAttribute('href')
          );

        if (target) {

          event.preventDefault();

          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    );
  });
const quizQuestions = [
    {
        question: "Which bone protects the brain?",
        options: ["Femur", "Skull", "Tibia", "Sternum"],
        answer: 1
    },
    {
        question: "Which is the longest bone in the human body?",
        options: ["Humerus", "Femur", "Radius", "Fibula"],
        answer: 1
    },
    {
        question: "What is the kneecap called?",
        options: ["Ulna", "Tibia", "Fibula", "Patella"],
        answer: 3
    },
    {
        question: "Which bones help form the rib cage?",
        options: ["Ribs", "Carpals", "Tarsals", "Metacarpals"],
        answer: 0
    },
    {
        question: "Which bone is found in the upper arm?",
        options: ["Radius", "Ulna", "Humerus", "Tibia"],
        answer: 2
    }
];

document.addEventListener("DOMContentLoaded", () => {

    const questions = [
        {
            question: "Which bone protects the brain?",
            options: [
                "Femur",
                "Skull",
                "Tibia",
                "Sternum"
            ],
            answer: 1
        },

        {
            question: "Which is the longest bone in the human body?",
            options: [
                "Humerus",
                "Femur",
                "Radius",
                "Fibula"
            ],
            answer: 1
        },

        {
            question: "What is the kneecap called?",
            options: [
                "Ulna",
                "Tibia",
                "Fibula",
                "Patella"
            ],
            answer: 3
        },

        {
            question: "Which bones form the rib cage?",
            options: [
                "Ribs",
                "Carpals",
                "Tarsals",
                "Metacarpals"
            ],
            answer: 0
        },

        {
            question: "Which bone is found in the upper arm?",
            options: [
                "Radius",
                "Ulna",
                "Humerus",
                "Tibia"
            ],
            answer: 2
        }
    ];


    const questionText =
        document.getElementById("quiz-question");

    const optionsContainer =
        document.getElementById("quiz-options");

    const nextButton =
        document.getElementById("quiz-next");

    const questionNumber =
        document.getElementById("quiz-question-number");

    const resultBox =
        document.getElementById("quiz-result");

    const scoreText =
        document.getElementById("quiz-score");

    const restartButton =
        document.getElementById("quiz-restart");

    if (
        !questionText ||
        !optionsContainer ||
        !nextButton
    ) {
        return;
    }


    let currentQuestion = 0;
    let score = 0;
    let answered = false;


    function showQuestion() {

        const question = questions[currentQuestion];

        questionText.textContent = question.question;

        questionNumber.textContent =
            currentQuestion + 1;

        optionsContainer.innerHTML = "";

        answered = false;

        nextButton.style.display = "none";


        question.options.forEach((option, index) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className = "quiz-option";

            button.textContent = option;


            button.addEventListener("click", () => {

                if (answered) return;

                answered = true;


                if (index === question.answer) {

                    button.classList.add("correct");

                    score++;

                } else {

                    button.classList.add("wrong");

                    optionsContainer
                        .children[question.answer]
                        .classList.add("correct");
                }


                nextButton.style.display =
                    "inline-block";
            });


            optionsContainer.appendChild(button);
        });
    }


    nextButton.addEventListener("click", () => {

        currentQuestion++;


        if (currentQuestion < questions.length) {

            showQuestion();

        } else {

            questionText.style.display = "none";

            optionsContainer.style.display = "none";

            nextButton.style.display = "none";

            document.querySelector(".quiz-progress")
                .style.display = "none";

            resultBox.style.display = "block";

            scoreText.textContent =
                `${score} / ${questions.length}`;
        }

    });


    if (restartButton) {

        restartButton.addEventListener("click", () => {

            currentQuestion = 0;

            score = 0;

            questionText.style.display = "block";

            optionsContainer.style.display = "grid";

            resultBox.style.display = "none";

            document.querySelector(".quiz-progress")
                .style.display = "block";

            showQuestion();

        });

    }


    showQuestion();

});