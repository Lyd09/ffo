
import {
  Cpu,
  MemoryStick,
  Monitor,
  Video,
  Keyboard,
  Mouse,
  Headphones,
  Mic,
  Laptop,
  HardDrive,
  Camera,
  Radio,
  Videotape,
  Scissors,
  Layers,
  Sparkles,
  Image as ImageIcon,
} from 'lucide-react';

export const workstationData = [
  {
    title: 'Workstation AMD Ryzen 5 5600G',
    description: 'Montado para renderização pesada e multitarefa intensiva, garantindo fluidez em 4K.',
    specs: [
      { icon: Cpu, label: 'Processador', value: 'Ryzen 5 5600G' },
      { icon: Video, label: 'Placa de Vídeo', value: 'INNO3D NVIDIA GeForce RTX 4060 COMPACT 8GB' },
      { icon: MemoryStick, label: 'RAM', value: '32GB Asgard' },
      { icon: Monitor, label: 'Monitor 1', value: 'ASRock Phantom Gaming PG27FF1A 27" 165Hz IPS' },
      { icon: Monitor, label: 'Monitor 2', value: 'LG 23.8" 75Hz' },
      { icon: Keyboard, label: 'Teclado', value: 'SuperFrame PLAYER 1 Mecânico Switch Blue' },
      { icon: Mouse, label: 'Mouse', value: 'RED Dragon King Cobra M711-FPS-1' },
      { icon: Mic, label: 'Microfone', value: 'FIFINE A6T' },
      { icon: Headphones, label: 'Headset', value: 'Hyperx Cloud Stinger' },
    ],
  },
  {
    title: 'Workstation Intel Core i5 12400F',
    description: 'Focado em estabilidade e velocidade de resposta para edições ágeis e gerenciamento de projetos.',
    specs: [
      { icon: Cpu, label: 'Processador', value: 'Intel Core i5 12400F' },
      { icon: Video, label: 'Placa de Vídeo', value: 'NVIDIA GeForce RTX 4060' },
      { icon: MemoryStick, label: 'RAM', value: '16GB' },
      { icon: Monitor, label: 'Monitor 1', value: 'ASUS 24" 144Hz' },
      { icon: Monitor, label: 'Monitor 2', value: 'Samsung 22" 60Hz' },
      { icon: Keyboard, label: 'Teclado', value: 'MOTOSPEED CK61' },
      { icon: Mouse, label: 'Mouse', value: 'Logitech G PRO' },
      { icon: Mic, label: 'Microfone', value: 'FIFINE A6T' },
      { icon: Headphones, label: 'Headset', value: 'Astro A10 - Logitech' },
    ],
  },
  {
    title: 'Samsung Galaxy Book4 (Core i5)',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'samsung laptop',
    description: 'A workstation portátil para edições em campo e apresentações, sem sacrificar performance.',
    specs: [
      { icon: Cpu, label: 'Processador', value: 'Intel Core i5-120U' },
      { icon: Video, label: 'Placa de Vídeo', value: 'NVIDIA GeForce MX570 (Dedicada)' },
      { icon: MemoryStick, label: 'RAM', value: '16GB LPDDR4x' },
      { icon: HardDrive, label: 'Armazenamento', value: '512GB NVMe SSD' },
      { icon: Laptop, label: 'Tela', value: '15.6" Full HD (1920x1080) IPS Antirreflexo' },
    ],
  },
  {
    title: 'MacBook Air (Apple M1)',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'macbook air',
    description: 'O padrão de mercado para agilidade, design e integração perfeita com softwares criativos.',
    specs: [
      { icon: Cpu, label: 'Processador', value: 'Apple M1 (8-core CPU)' },
      { icon: Video, label: 'GPU', value: 'GPU de 7 núcleos (Integrada)' },
      { icon: MemoryStick, label: 'Memória Unificada', value: '8GB' },
      { icon: HardDrive, label: 'Armazenamento', value: '256GB SSD' },
      { icon: Laptop, label: 'Tela', value: '13.3" Retina com True Tone' },
    ],
  },
];

export const fieldEquipmentData = [
  {
    category: 'Câmera',
    icon: Camera,
    name: 'Sony A6500',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'sony camera',
    description: 'Pequena no tamanho, gigante na entrega. Estabilização no corpo e 4K na veia pra capturar cada detalhe.',
  },
  {
    category: 'Áudio',
    icon: Radio,
    name: 'Hollyland LARK M2',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'wireless microphone',
    description: 'Captura de voz cristalina até no improviso. Porque o áudio também conta história.',
  },
  {
    category: 'Estabilização',
    icon: Videotape,
    name: 'Gimbal Scorp Mini',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'camera gimbal',
    description: 'Firmeza nos passos, liberdade no movimento. Porque a câmera também merece dançar sem tropeçar.',
  },
];

export const softwareData = [
    {
      name: 'Adobe Premiere Pro',
      imageUrl: 'https://placehold.co/400x400.png',
      dataAiHint: 'software logo',
      description: 'Se tem play no final, é porque teve Premiere no começo.',
    },
    {
      name: 'Adobe After Effects',
      imageUrl: 'https://placehold.co/400x400.png',
      dataAiHint: 'software logo',
      description: 'A mágica visual que o público vê, mas não imagina como foi feita.',
    },
    {
      name: 'Adobe Photoshop',
      imageUrl: 'https://placehold.co/400x400.png',
      dataAiHint: 'software logo',
      description: 'Para deixar tudo exatamente como imaginamos — ou melhor.',
    },
    {
      name: 'Adobe Lightroom',
      imageUrl: 'https://placehold.co/400x400.png',
      dataAiHint: 'software logo',
      description: 'Um toque nas cores, um ajuste na luz — e pronto: identidade.',
    },
  ];
