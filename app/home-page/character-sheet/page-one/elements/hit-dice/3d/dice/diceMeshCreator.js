import THREE from '../libs/three.min';

const d20Labels = [
  ' ',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20'
];
const d100Labels = [
  ' ',
  '00',
  '10',
  '20',
  '30',
  '40',
  '50',
  '60',
  '70',
  '80',
  '90'
];

const materialOptions = {
  specular: '#171d1f',
  color: '#ffffff',
  emissive: '#000000',
  shininess: 70,
  shading: THREE.FlatShading
};
const defaultLabelColor = '#aaaaaa';
const defaultDieColor = '#661017';

function createDieGeom(vertices, faces, radius, tab, af) {
  const geom = new THREE.Geometry();
  for (let i = 0; i < vertices.length; ++i) {
    const vertex = new THREE.Vector3()
      .fromArray(vertices[i])
      .normalize()
      .multiplyScalar(radius);
    vertex.index = geom.vertices.push(vertex) - 1;
  }
  for (let i = 0; i < faces.length; ++i) {
    let ii = faces[i],
      fl = ii.length - 1;
    const aa = Math.PI * 2 / fl;
    for (let j = 0; j < fl - 2; ++j) {
      geom.faces.push(
        new THREE.Face3(
          ii[0],
          ii[j + 1],
          ii[j + 2],
          [
            geom.vertices[ii[0]],
            geom.vertices[ii[j + 1]],
            geom.vertices[ii[j + 2]]
          ],
          0,
          ii[fl] + 1
        )
      );
      geom.faceVertexUvs[0].push([
        new THREE.Vector2(
          (Math.cos(af) + 1 + tab) / 2 / (1 + tab),
          (Math.sin(af) + 1 + tab) / 2 / (1 + tab)
        ),
        new THREE.Vector2(
          (Math.cos(aa * (j + 1) + af) + 1 + tab) / 2 / (1 + tab),
          (Math.sin(aa * (j + 1) + af) + 1 + tab) / 2 / (1 + tab)
        ),
        new THREE.Vector2(
          (Math.cos(aa * (j + 2) + af) + 1 + tab) / 2 / (1 + tab),
          (Math.sin(aa * (j + 2) + af) + 1 + tab) / 2 / (1 + tab)
        )
      ]);
    }
  }
  geom.computeFaceNormals();
  geom.computeVertexNormals();
  geom.boundingSphere = new THREE.Sphere(new THREE.Vector3(), radius);
  return geom;
}

function createDieMaterials(type, scale) {
  if (type === 'd4') {
    return createD4Materials(scale / 2, scale * 2);
  }
  return _createDieMaterials(
    dieInfo[type].labels,
    scale * dieInfo[type].marginFactor,
    scale
  );
}

function _createDieMaterials(faceLabels, margin, scale) {
  function createTextTexture(text) {
    if (text === undefined) {
      return null;
    }
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const size = scale / 2;
    canvas.width = size + margin;
    canvas.height = size + margin;
    context.font = `${size}pt Arial`;
    context.fillStyle = defaultDieColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = defaultLabelColor;
    context.fillText(text, canvas.width / 2, canvas.height / 2);
    if (text === '6' || text === '9') {
      context.fillText('  .', canvas.width / 2, canvas.height / 2);
    }
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  const materials = [];
  for (let i = 0; i < faceLabels.length; ++i) {
    materials.push(
      new THREE.MeshPhongMaterial({
        ...materialOptions,
        map: createTextTexture(faceLabels[i])
      })
    );
  }
  return materials;
}

function createD4Materials(size, margin) {
  function createD4Text(text) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = size + margin;
    canvas.height = size + margin;
    context.font = `${size}pt Arial`;
    context.fillStyle = defaultDieColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = defaultLabelColor;
    context.translate(0, size / 10);
    for (const i in text) {
      context.fillText(
        text[i],
        canvas.width / 2,
        canvas.height / 2 - size - margin / 10
      );
      context.translate(canvas.width / 2, canvas.height / 2);
      context.rotate(Math.PI * 2 / 3);
      context.translate(-canvas.width / 2, -canvas.height / 2);
    }
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  const materials = [];
  const labels = [[], [0, 0, 0], [2, 4, 3], [1, 3, 4], [2, 1, 4], [1, 2, 3]];
  for (let i = 0; i < labels.length; ++i) {
    materials.push(
      new THREE.MeshPhongMaterial({
        ...materialOptions,
        map: createD4Text(labels[i])
      })
    );
  }
  return materials;
}

function createDieGeometry(type, radius) {
  const geometryCreators = {
    d4: createD4Geometry,
    d6: createD6Geometry,
    d8: createD8Geometry,
    d10: createD10Geometry,
    d12: createD12Geometry,
    d20: createD20Geometry,
    d100: createD10Geometry
  };

  return geometryCreators[type](radius);
}

function createD4Geometry(radius) {
  const vertices = [[1, 1, 1], [-1, -1, 1], [-1, 1, -1], [1, -1, -1]];
  const faces = [[1, 0, 2, 1], [0, 1, 3, 2], [0, 3, 2, 3], [1, 2, 3, 4]];
  return createDieGeom(vertices, faces, radius, -0.1, Math.PI * 7 / 6);
}

function createD6Geometry(radius) {
  const vertices = [
    [-1, -1, -1],
    [1, -1, -1],
    [1, 1, -1],
    [-1, 1, -1],
    [-1, -1, 1],
    [1, -1, 1],
    [1, 1, 1],
    [-1, 1, 1]
  ];
  const faces = [
    [0, 3, 2, 1, 1],
    [1, 2, 6, 5, 2],
    [0, 1, 5, 4, 3],
    [3, 7, 6, 2, 4],
    [0, 4, 7, 3, 5],
    [4, 5, 6, 7, 6]
  ];
  return createDieGeom(vertices, faces, radius, 0.1, Math.PI / 4);
}

function createD8Geometry(radius) {
  const vertices = [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1]
  ];
  const faces = [
    [0, 2, 4, 1],
    [0, 4, 3, 2],
    [0, 3, 5, 3],
    [0, 5, 2, 4],
    [1, 3, 4, 5],
    [1, 4, 2, 6],
    [1, 2, 5, 7],
    [1, 5, 3, 8]
  ];
  return createDieGeom(vertices, faces, radius, 0, -Math.PI / 4 / 2);
}

function createD10Geometry(radius) {
  const a = Math.PI * 2 / 10,
    h = 0.105,
    v = -1;
  const vertices = [];
  for (let i = 0, b = 0; i < 10; ++i, b += a) {
    vertices.push([Math.cos(b), Math.sin(b), h * (i % 2 ? 1 : -1)]);
  }
  vertices.push([0, 0, -1]);
  vertices.push([0, 0, 1]);
  const faces = [
    [5, 7, 11, 0],
    [4, 2, 10, 1],
    [1, 3, 11, 2],
    [0, 8, 10, 3],
    [7, 9, 11, 4],
    [8, 6, 10, 5],
    [9, 1, 11, 6],
    [2, 0, 10, 7],
    [3, 5, 11, 8],
    [6, 4, 10, 9],
    [1, 0, 2, v],
    [1, 2, 3, v],
    [3, 2, 4, v],
    [3, 4, 5, v],
    [5, 4, 6, v],
    [5, 6, 7, v],
    [7, 6, 8, v],
    [7, 8, 9, v],
    [9, 8, 0, v],
    [9, 0, 1, v]
  ];
  return createDieGeom(vertices, faces, radius, 0, Math.PI * 6 / 5);
}

function createD12Geometry(radius) {
  const p = (1 + Math.sqrt(5)) / 2,
    q = 1 / p;
  const vertices = [
    [0, q, p],
    [0, q, -p],
    [0, -q, p],
    [0, -q, -p],
    [p, 0, q],
    [p, 0, -q],
    [-p, 0, q],
    [-p, 0, -q],
    [q, p, 0],
    [q, -p, 0],
    [-q, p, 0],
    [-q, -p, 0],
    [1, 1, 1],
    [1, 1, -1],
    [1, -1, 1],
    [1, -1, -1],
    [-1, 1, 1],
    [-1, 1, -1],
    [-1, -1, 1],
    [-1, -1, -1]
  ];
  const faces = [
    [2, 14, 4, 12, 0, 1],
    [15, 9, 11, 19, 3, 2],
    [16, 10, 17, 7, 6, 3],
    [6, 7, 19, 11, 18, 4],
    [6, 18, 2, 0, 16, 5],
    [18, 11, 9, 14, 2, 6],
    [1, 17, 10, 8, 13, 7],
    [1, 13, 5, 15, 3, 8],
    [13, 8, 12, 4, 5, 9],
    [5, 4, 14, 9, 15, 10],
    [0, 12, 8, 10, 16, 11],
    [3, 19, 7, 17, 1, 12]
  ];
  return createDieGeom(vertices, faces, radius, 0.2, -Math.PI / 4 / 2);
}

function createD20Geometry(radius) {
  const t = (1 + Math.sqrt(5)) / 2;
  const vertices = [
    [-1, t, 0],
    [1, t, 0],
    [-1, -t, 0],
    [1, -t, 0],
    [0, -1, t],
    [0, 1, t],
    [0, -1, -t],
    [0, 1, -t],
    [t, 0, -1],
    [t, 0, 1],
    [-t, 0, -1],
    [-t, 0, 1]
  ];
  const faces = [
    [0, 11, 5, 1],
    [0, 5, 1, 2],
    [0, 1, 7, 3],
    [0, 7, 10, 4],
    [0, 10, 11, 5],
    [1, 5, 9, 6],
    [5, 11, 4, 7],
    [11, 10, 2, 8],
    [10, 7, 6, 9],
    [7, 1, 8, 10],
    [3, 9, 4, 11],
    [3, 4, 2, 12],
    [3, 2, 6, 13],
    [3, 6, 8, 14],
    [3, 8, 9, 15],
    [4, 9, 5, 16],
    [2, 4, 11, 17],
    [6, 2, 10, 18],
    [8, 6, 7, 19],
    [9, 8, 1, 20]
  ];
  return createDieGeom(vertices, faces, radius, -0.2, -Math.PI / 4 / 2);
}

const dieInfo = {
  d4: { mass: 300, inertia: 5, radiusFactor: 1.2, marginFactor: null },
  d6: {
    mass: 300,
    inertia: 13,
    radiusFactor: 0.9,
    marginFactor: 1,
    labels: d20Labels
  },
  d8: {
    mass: 340,
    inertia: 10,
    radiusFactor: 1,
    marginFactor: 1,
    labels: d20Labels
  },
  d10: {
    mass: 340,
    inertia: 10,
    radiusFactor: 0.9,
    marginFactor: 1,
    labels: d20Labels
  },
  d12: {
    mass: 340,
    inertia: 10,
    radiusFactor: 0.9,
    marginFactor: 1,
    labels: d20Labels
  },
  d20: {
    mass: 340,
    inertia: 10,
    radiusFactor: 1,
    marginFactor: 1,
    labels: d20Labels
  },
  d100: {
    mass: 340,
    inertia: 10,
    radiusFactor: 0.9,
    marginFactor: 1.5,
    labels: d100Labels
  }
};

function createDie(type, _scale) {
  const material = new THREE.MeshFaceMaterial(createDieMaterials(type, _scale));
  const geometry = createDieGeometry(type, _scale * dieInfo[type].radiusFactor);
  const die = new THREE.Mesh(geometry, material);

  die.userData = {
    type,
    labelColor: defaultLabelColor,
    dieColor: defaultDieColor
  };

  let xRotation = 0.01;
  let yRotation = 0.01;
  const callbacks = [];

  die.update = () => {
    xRotation -= xRotation > 0.01 ? 0.03 : 0;
    yRotation -= yRotation > 0.01 ? 0.03 : 0;

    die.rotation.x += xRotation;
    die.rotation.y += yRotation;

    xRotation = xRotation < 0.01 ? 0.01 : xRotation;
    yRotation = yRotation < 0.01 ? 0.01 : yRotation;
  };

  die.addCallback = (val, right) => {
    callbacks.push({ func: val, right });
  };

  die.onClick = () => {
    yRotation = 0.8;
    callbacks
      .filter(val => !val.right)
      .map(val => val.func)
      .forEach(val => {
        val(die);
      });
  };

  die.onRightClick = () => {
    yRotation = 0.8;
    callbacks
      .filter(val => val.right)
      .map(val => val.func)
      .forEach(val => {
        val(die);
      });
  };

  return die;
}

export default createDie;
