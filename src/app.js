// ========================================
// AI Game DevTools - Main Application
// ========================================

// Category definitions with icons and colors
const categories = [
    { id: 'llm', name: 'LLM & Tools', icon: '🧠', description: 'Language models & dev tools', accent: 'linear-gradient(135deg, #ffffff, #888888)', iconBg: 'rgba(255, 255, 255, 0.1)' },
    { id: 'vlm', name: 'VLM (Visual)', icon: '👁️', description: 'Visual language models', accent: 'linear-gradient(135deg, #cccccc, #666666)', iconBg: 'rgba(255, 255, 255, 0.08)' },
    { id: 'game', name: 'World Models & Agents', icon: '🎮', description: 'Game AI & world models', accent: 'linear-gradient(135deg, #aaaaaa, #555555)', iconBg: 'rgba(255, 255, 255, 0.12)' },
    { id: 'code', name: 'Code', icon: '💻', description: 'AI coding assistants', accent: 'linear-gradient(135deg, #dddddd, #777777)', iconBg: 'rgba(255, 255, 255, 0.06)' },
    { id: 'image', name: 'Image', icon: '🖼️', description: 'Image generation & editing', accent: 'linear-gradient(135deg, #bbbbbb, #444444)', iconBg: 'rgba(255, 255, 255, 0.1)' },
    { id: 'texture', name: 'Texture', icon: '🎨', description: 'Texture generation tools', accent: 'linear-gradient(135deg, #eeeeee, #999999)', iconBg: 'rgba(255, 255, 255, 0.05)' },
    { id: 'shader', name: 'Shader', icon: '✨', description: 'AI shader generators', accent: 'linear-gradient(135deg, #ffffff, #aaaaaa)', iconBg: 'rgba(255, 255, 255, 0.1)' },
    { id: 'model', name: '3D Model', icon: '🧊', description: '3D model generation', accent: 'linear-gradient(135deg, #cccccc, #888888)', iconBg: 'rgba(255, 255, 255, 0.08)' },
    { id: 'avatar', name: 'Avatar', icon: '👤', description: 'Avatar & character creation', accent: 'linear-gradient(135deg, #aaaaaa, #666666)', iconBg: 'rgba(255, 255, 255, 0.1)' },
    { id: 'animation', name: 'Animation', icon: '🎬', description: 'Animation & motion tools', accent: 'linear-gradient(135deg, #dddddd, #888888)', iconBg: 'rgba(255, 255, 255, 0.07)' },
    { id: 'video', name: 'Video', icon: '📹', description: 'Video generation & editing', accent: 'linear-gradient(135deg, #bbbbbb, #777777)', iconBg: 'rgba(255, 255, 255, 0.09)' },
    { id: 'audio', name: 'Audio', icon: '🔊', description: 'Audio generation tools', accent: 'linear-gradient(135deg, #eeeeee, #aaaaaa)', iconBg: 'rgba(255, 255, 255, 0.06)' },
    { id: 'music', name: 'Music', icon: '🎵', description: 'AI music generation', accent: 'linear-gradient(135deg, #cccccc, #999999)', iconBg: 'rgba(255, 255, 255, 0.08)' },
    { id: 'voice', name: 'Singing Voice', icon: '🎤', description: 'Singing voice synthesis', accent: 'linear-gradient(135deg, #aaaaaa, #555555)', iconBg: 'rgba(255, 255, 255, 0.1)' },
    { id: 'speech', name: 'Speech', icon: '🗣️', description: 'Text-to-speech tools', accent: 'linear-gradient(135deg, #dddddd, #999999)', iconBg: 'rgba(255, 255, 255, 0.07)' },
    { id: 'analytics', name: 'Analytics', icon: '📊', description: 'Game analytics AI', accent: 'linear-gradient(135deg, #bbbbbb, #888888)', iconBg: 'rgba(255, 255, 255, 0.09)' }
];

// Tools data - curated from README
const toolsData = {
    llm: [
        { name: 'AgentGPT', url: 'https://github.com/reworkd/AgentGPT', description: 'Assemble, configure, and deploy autonomous AI Agents in your browser.', paper: '', engine: '', type: 'Tool' },
        { name: 'AICommand', url: 'https://github.com/keijiro/AICommand', description: 'ChatGPT integration with Unity Editor.', paper: '', engine: 'Unity', type: 'Tool' },
        { name: 'ChatDev', url: 'https://github.com/OpenBMB/ChatDev', description: 'Communicative Agents for Software Development.', paper: 'https://arxiv.org/abs/2307.07924', engine: '', type: 'Tool' },
        { name: 'DeepSeek-R1', url: 'https://github.com/deepseek-ai/DeepSeek-R1', description: 'Model trained via large-scale reinforcement learning without supervised fine-tuning.', paper: '', engine: '', type: 'LLM' },
        { name: 'DeepSeek-V3', url: 'https://github.com/deepseek-ai/DeepSeek-V3', description: 'Strong Mixture-of-Experts language model with 671B total parameters.', paper: 'https://arxiv.org/abs/2412.19437', engine: '', type: 'LLM' },
        { name: 'GPT-4o', url: 'https://openai.com/index/hello-gpt-4o/', description: 'Omni model accepting text, audio, image, and video inputs.', paper: '', engine: '', type: 'Tool' },
        { name: 'Kimi K2', url: 'https://github.com/moonshotai/Kimi-K2', description: 'State-of-the-art MoE language model with 32B activated parameters.', paper: '', engine: '', type: 'LLM' },
        { name: 'Llama 3', url: 'https://github.com/meta-llama/llama3', description: 'The official Meta Llama 3 GitHub site.', paper: '', engine: '', type: 'LLM' },
        { name: 'Qwen3', url: 'https://github.com/QwenLM/Qwen3', description: 'Large language model series developed by Qwen team, Alibaba Cloud.', paper: 'https://arxiv.org/abs/2505.09388', engine: '', type: 'LLM' },
        { name: 'Claude', url: 'https://claude.ai/', description: 'Anthropic\'s AI assistant with advanced reasoning capabilities.', paper: '', engine: '', type: 'Tool' },
        { name: 'Auto-GPT', url: 'https://github.com/Significant-Gravitas/Auto-GPT', description: 'Experimental open-source attempt to make GPT-4 fully autonomous.', paper: '', engine: '', type: 'Tool' },
        { name: 'MetaGPT', url: 'https://github.com/geekan/MetaGPT', description: 'The Multi-Agent Framework.', paper: '', engine: '', type: 'Tool' },
        { name: 'LangChain', url: 'https://github.com/hwchase17/langchain', description: 'Framework for developing applications powered by language models.', paper: '', engine: '', type: 'Tool' },
        { name: 'Ollama', url: 'https://ollama.com/', description: 'Run LLMs locally with ease.', paper: '', engine: '', type: 'Tool' },
        { name: 'Cursor', url: 'https://www.cursor.so/', description: 'AI-first code editor built for productivity.', paper: '', engine: '', type: 'Tool' },
        { name: 'Cline', url: 'https://github.com/cline/cline', description: 'AI assistant that can use CLI, editor, and browser.', paper: '', engine: '', type: 'Tool' },
        { name: 'Continue', url: 'https://github.com/continuedev/continue', description: 'Open-source AI code assistant.', paper: '', engine: '', type: 'Tool' },
        { name: 'Aider', url: 'https://github.com/paul-gauthier/aider', description: 'AI pair programming in your terminal.', paper: '', engine: '', type: 'Tool' },
        { name: 'Devin', url: 'https://devin.ai/', description: 'AI software engineer that can plan, code, test, and deploy.', paper: '', engine: '', type: 'Tool' },
        { name: 'SWE-agent', url: 'https://github.com/princeton-nlp/SWE-agent', description: 'Agent Computer Interfaces Enable Software Engineering Language Models.', paper: 'https://arxiv.org/abs/2405.15793', engine: '', type: 'Tool' }
    ],
    vlm: [
        { name: 'CogVLM2', url: 'https://github.com/THUDM/CogVLM2', description: 'GPT4V-level open-source multi-modal model based on Llama3-8B.', paper: '', engine: '', type: 'Visual' },
        { name: 'LLaVA-OneVision', url: 'https://github.com/LLaVA-VL/LLaVA-NeXT', description: 'Easy Visual Task Transfer.', paper: 'https://arxiv.org/abs/2408.03326', engine: '', type: 'Visual' },
        { name: 'MiniCPM-V 4.0', url: 'https://github.com/OpenBMB/MiniCPM-o', description: 'GPT-4V Level MLLM for Single Image, Multi Image and Video.', paper: '', engine: '', type: 'Visual' },
        { name: 'Qwen-VL', url: 'https://github.com/QwenLM/Qwen-VL', description: 'Versatile Vision-Language Model for Understanding and Localization.', paper: 'https://arxiv.org/abs/2308.12966', engine: '', type: 'Visual' },
        { name: 'Video-LLaVA', url: 'https://github.com/PKU-YuanGroup/Video-LLaVA', description: 'Learning United Visual Representation by Alignment Before Projection.', paper: 'https://arxiv.org/abs/2311.10122', engine: '', type: 'Visual' },
        { name: 'GLM-V', url: 'https://github.com/zai-org/GLM-V', description: 'Towards Versatile Multimodal Reasoning with Scalable RL.', paper: 'https://arxiv.org/abs/2507.01006', engine: '', type: 'VLM' }
    ],
    game: [
        { name: 'GameNGen', url: 'https://gamengen.github.io/', description: 'Diffusion Models Are Real-Time Game Engines.', paper: 'https://arxiv.org/abs/2408.14837', engine: '', type: 'Game' },
        { name: 'Oasis', url: 'https://github.com/etched-ai/open-oasis', description: 'Interactive world model generating gameplay from keyboard input.', paper: '', engine: '', type: 'Game' },
        { name: 'Genie', url: 'https://sites.google.com/view/genie-2024/home', description: 'Generative Interactive Environments by Google DeepMind.', paper: 'https://arxiv.org/abs/2402.15391', engine: '', type: 'Game' },
        { name: 'Genesis', url: 'https://github.com/Genesis-Embodied-AI/Genesis', description: 'Generative and Universal Physics Engine for Robotics and Beyond.', paper: '', engine: '', type: 'Game' },
        { name: 'Matrix-Game', url: 'https://github.com/SkyworkAI/Matrix-Game', description: '17B-parameter interactive world foundation model.', paper: '', engine: '', type: 'Game' },
        { name: 'SIMA', url: 'https://deepmind.google/discover/blog/sima-generalist-ai-agent-for-3d-virtual-environments/', description: 'Generalist AI agent for 3D virtual environments.', paper: '', engine: '', type: 'Agent' },
        { name: 'AutoGen', url: 'https://github.com/microsoft/autogen', description: 'Enable Next-Gen Large Language Model Applications.', paper: 'https://arxiv.org/abs/2308.08155', engine: '', type: 'Agent' },
        { name: 'CrewAI', url: 'https://github.com/joaomdmoura/crewAI', description: 'Framework for orchestrating role-playing autonomous AI agents.', paper: '', engine: '', type: 'Agent' },
        { name: 'Generative Agents', url: 'https://github.com/joonspk-research/generative_agents', description: 'Interactive Simulacra of Human Behavior.', paper: 'https://arxiv.org/abs/2304.03442', engine: '', type: 'Agent' },
        { name: 'AI Town', url: 'https://github.com/a16z-infra/ai-town', description: 'Virtual town where AI characters live, chat and socialize.', paper: '', engine: '', type: 'Agent' },
        { name: 'Rosebud AI', url: 'https://rosebud.ai', description: 'Vibe coding platform for creating 3D games with AI.', paper: '', engine: '', type: 'Game' },
        { name: 'HunyuanWorld 1.0', url: 'https://github.com/Tencent-Hunyuan/HunyuanWorld-1.0', description: 'Generating Immersive, Explorable, and Interactive 3D Worlds.', paper: 'https://arxiv.org/abs/2507.21809', engine: '', type: 'Game' }
    ],
    code: [
        { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', description: 'AI pair programmer powered by OpenAI Codex.', paper: '', engine: '', type: 'Code' },
        { name: 'CodeLlama', url: 'https://github.com/facebookresearch/codellama', description: 'Large language models for code based on Llama 2.', paper: '', engine: '', type: 'Code' },
        { name: 'DeepSeek Coder', url: 'https://github.com/deepseek-ai/DeepSeek-Coder', description: 'Let the Code Write Itself.', paper: 'https://arxiv.org/abs/2401.14196', engine: '', type: 'Code' },
        { name: 'StarCoder 2', url: 'https://github.com/bigcode-project/starcoder2', description: 'Code generation models trained on 600+ programming languages.', paper: 'https://arxiv.org/abs/2402.19173', engine: '', type: 'Code' },
        { name: 'CodeGeeX4', url: 'https://github.com/THUDM/CodeGeeX4', description: 'Open Multilingual Code Generation Model.', paper: '', engine: '', type: 'Code' },
        { name: 'Qwen2.5-Coder', url: 'https://github.com/QwenLM/Qwen2.5-Coder', description: 'Code version of Qwen2.5 large language model.', paper: 'https://arxiv.org/abs/2409.12186', engine: '', type: 'LLM' },
        { name: 'UnityGen AI', url: 'https://github.com/himanshuskyrockets/UnityGen-AI', description: 'AI-powered code generation plugin for Unity.', paper: '', engine: 'Unity', type: 'Code' },
        { name: 'Void', url: 'https://github.com/voideditor/void', description: 'Open source Cursor alternative with full data control.', paper: '', engine: '', type: 'Code' }
    ],
    image: [
        { name: 'Midjourney', url: 'https://www.midjourney.com/', description: 'Independent research lab exploring new mediums of thought.', paper: '', engine: '', type: 'Image' },
        { name: 'DALL·E 3', url: 'https://openai.com/dall-e-3', description: 'AI system creating realistic images from text descriptions.', paper: '', engine: '', type: 'Image' },
        { name: 'Stable Diffusion 3.5', url: 'https://github.com/Stability-AI/sd3.5', description: 'Multiple model variants including Large and Large Turbo.', paper: '', engine: '', type: 'Image' },
        { name: 'Flux', url: 'https://github.com/black-forest-labs/flux', description: 'Text-to-image and image-to-image with latent rectified flow transformers.', paper: '', engine: '', type: 'Image' },
        { name: 'Ideogram', url: 'https://ideogram.ai/', description: 'Helping people become more creative with AI image generation.', paper: '', engine: '', type: 'Image' },
        { name: 'HunyuanImage-3.0', url: 'https://github.com/Tencent-Hunyuan/HunyuanImage-3.0', description: 'Powerful Native Multimodal Model for Image Generation.', paper: '', engine: '', type: 'Image' },
        { name: 'Qwen-Image', url: 'https://github.com/QwenLM/Qwen-Image', description: 'Powerful image generation with complex text rendering.', paper: 'https://arxiv.org/abs/2508.02324', engine: '', type: 'Image' },
        { name: 'ControlNet', url: 'https://github.com/lllyasviel/ControlNet', description: 'Neural network structure to control diffusion models.', paper: 'https://arxiv.org/abs/2302.05543', engine: '', type: 'Image' },
        { name: 'ComfyUI', url: 'https://github.com/comfyanonymous/ComfyUI', description: 'Powerful and modular stable diffusion GUI with nodes.', paper: '', engine: '', type: 'Image' },
        { name: 'Segment Anything 2', url: 'https://github.com/facebookresearch/segment-anything-2', description: 'Segment Anything in Images and Videos.', paper: 'https://arxiv.org/abs/2408.00714', engine: '', type: 'Image' }
    ],
    texture: [
        { name: 'Dream Textures', url: 'https://github.com/carson-katri/dream-textures', description: 'Stable Diffusion built-in to Blender for texture creation.', paper: '', engine: 'Blender', type: 'Texture' },
        { name: 'Texture Lab', url: 'https://www.texturelab.xyz/', description: 'AI-generated textures with text prompts.', paper: '', engine: '', type: 'Texture' },
        { name: 'With Poly', url: 'https://withpoly.com/browse/textures', description: 'Generate 3D materials with AI in a free online editor.', paper: '', engine: '', type: 'Texture' },
        { name: 'Polycam', url: 'https://poly.cam/material-generator', description: 'Create your own 3D textures just by typing.', paper: '', engine: '', type: 'Texture' },
        { name: 'Text2Tex', url: 'https://daveredrum.github.io/Text2Tex/', description: 'Text-driven texture Synthesis via Diffusion Models.', paper: 'https://arxiv.org/abs/2303.11396', engine: '', type: 'Texture' },
        { name: 'DreamMat', url: 'https://github.com/zzzyuqing/DreamMat', description: 'High-quality PBR Material Generation with Diffusion Models.', paper: 'https://arxiv.org/abs/2405.17176', engine: '', type: 'Texture' }
    ],
    shader: [
        { name: 'AI Shader', url: 'https://github.com/keijiro/AIShader', description: 'ChatGPT-powered shader generator for Unity.', paper: '', engine: 'Unity', type: 'Shader' }
    ],
    model: [
        { name: 'Hunyuan3D 2.1', url: 'https://github.com/Tencent-Hunyuan/Hunyuan3D-2.1', description: 'From Images to High-Fidelity 3D Assets with PBR Material.', paper: 'https://arxiv.org/abs/2506.15442', engine: '', type: '3D' },
        { name: 'Meshy', url: 'https://www.meshy.ai/', description: 'Create Stunning 3D Game Assets with AI.', paper: '', engine: '', type: '3D' },
        { name: 'TripoSR', url: 'https://github.com/VAST-AI-Research/TripoSR', description: 'Fast feedforward 3D reconstruction from a single image.', paper: 'https://arxiv.org/abs/2403.02151', engine: '', type: 'Model' },
        { name: 'Luma AI', url: 'https://lumalabs.ai/', description: 'Capture in lifelike 3D with unmatched photorealism.', paper: '', engine: '', type: 'Model' },
        { name: 'Shap-E', url: 'https://github.com/openai/shap-e', description: 'Generate 3D objects conditioned on text or images.', paper: 'https://arxiv.org/abs/2305.02463', engine: '', type: 'Model' },
        { name: 'Point·E', url: 'https://github.com/openai/point-e', description: 'Point cloud diffusion for 3D model synthesis.', paper: '', engine: '', type: 'Model' },
        { name: 'Wonder3D', url: 'https://github.com/xxlong0/Wonder3D', description: 'Single Image to 3D using Cross-Domain Diffusion.', paper: 'https://arxiv.org/abs/2310.15008', engine: '', type: '3D' },
        { name: 'Unique3D', url: 'https://github.com/AiuniAI/Unique3D', description: 'High-Quality 3D Mesh Generation from a Single Image.', paper: 'https://arxiv.org/abs/2405.20343', engine: '', type: '3D' },
        { name: 'CSM', url: 'https://www.csm.ai/', description: 'Generate 3D worlds from images and videos.', paper: '', engine: '', type: '3D' },
        { name: 'Spline AI', url: 'https://spline.design/ai', description: 'Generate objects, animations, and textures using prompts.', paper: '', engine: '', type: 'Model' }
    ],
    avatar: [
        { name: 'LivePortrait', url: 'https://github.com/KwaiVGI/LivePortrait', description: 'Efficient Portrait Animation with Stitching and Retargeting.', paper: 'https://arxiv.org/abs/2407.03168', engine: '', type: 'Avatar' },
        { name: 'Hallo', url: 'https://github.com/fudan-generative-vision/hallo', description: 'Hierarchical Audio-Driven Visual Synthesis for Portrait.', paper: 'https://arxiv.org/abs/2406.08801', engine: '', type: 'Avatar' },
        { name: 'Ready Player Me', url: 'https://readyplayer.me/', description: 'Integrate customizable avatars into your game or app.', paper: '', engine: '', type: 'Avatar' },
        { name: 'GeneFace++', url: 'https://github.com/yerfor/GeneFacePlusPlus', description: 'Generalized Real-Time 3D Talking Face Generation.', paper: '', engine: '', type: 'Avatar' },
        { name: 'VLOGGER', url: 'https://enriccorona.github.io/vlogger/', description: 'Multimodal Diffusion for Embodied Avatar Synthesis.', paper: '', engine: '', type: 'Avatar' },
        { name: 'ChatAvatar', url: 'https://hyperhuman.deemos.com/chatavatar', description: 'Progressive generation of Animatable 3D Faces.', paper: '', engine: '', type: 'Avatar' }
    ],
    animation: [
        { name: 'Animate Anyone', url: 'https://github.com/HumanAIGC/AnimateAnyone', description: 'Consistent Image-to-Video Synthesis for Character Animation.', paper: 'https://arxiv.org/abs/2311.17117', engine: '', type: 'Animation' },
        { name: 'AnimateDiff', url: 'https://github.com/guoyww/animatediff/', description: 'Animate Personalized Text-to-Image Models without Tuning.', paper: 'https://arxiv.org/abs/2307.04725', engine: '', type: 'Animation' },
        { name: 'MagicAnimate', url: 'https://showlab.github.io/magicanimate/', description: 'Temporally Consistent Human Image Animation.', paper: 'https://arxiv.org/abs/2311.16498', engine: '', type: 'Animation' },
        { name: 'Wonder Studio', url: 'https://wonderdynamics.com/', description: 'Automatically animates and composites CG characters.', paper: '', engine: '', type: 'Animation' },
        { name: 'ToonCrafter', url: 'https://github.com/ToonCrafter/ToonCrafter', description: 'Generative Cartoon Interpolation.', paper: 'https://arxiv.org/abs/2405.17933', engine: '', type: 'Animation' },
        { name: 'MusePose', url: 'https://github.com/TMElyralab/MusePose', description: 'Pose-Driven Image-to-Video for Virtual Human Generation.', paper: '', engine: '', type: 'Animation' }
    ],
    video: [
        { name: 'Sora', url: 'https://openai.com/sora', description: 'Text-to-video model creating realistic and imaginative scenes.', paper: '', engine: '', type: 'Video' },
        { name: 'Runway Gen-3', url: 'https://runwayml.com/', description: 'High-fidelity controllable video generation.', paper: '', engine: '', type: 'Video' },
        { name: 'Pika', url: 'https://pika.art/', description: 'AI video generation platform.', paper: '', engine: '', type: 'Video' },
        { name: 'Kling', url: 'https://klingai.com/', description: 'High-quality video generation with realistic motion.', paper: '', engine: '', type: 'Video' },
        { name: 'HunyuanVideo', url: 'https://github.com/Tencent/HunyuanVideo', description: 'Systematic Framework For Large Video Generation Model.', paper: 'https://arxiv.org/abs/2412.03603', engine: '', type: 'Video' },
        { name: 'CogVideoX', url: 'https://github.com/THUDM/CogVideo', description: 'Open-source video generation model.', paper: '', engine: '', type: 'Video' },
        { name: 'Luma Dream Machine', url: 'https://lumalabs.ai/dream-machine', description: 'Fast high-quality video generation from text and images.', paper: '', engine: '', type: 'Video' },
        { name: 'Stable Video Diffusion', url: 'https://stability.ai/news/stable-video-diffusion-open-ai-video-model', description: 'Image-to-video generation model.', paper: '', engine: '', type: 'Video' }
    ],
    audio: [
        { name: 'ElevenLabs', url: 'https://elevenlabs.io/', description: 'AI voice generation with high fidelity.', paper: '', engine: '', type: 'Audio' },
        { name: 'AudioLDM 2', url: 'https://github.com/haoheliu/AudioLDM2', description: 'Text-to-audio generation with latent diffusion.', paper: '', engine: '', type: 'Audio' },
        { name: 'Bark', url: 'https://github.com/suno-ai/bark', description: 'Text-to-audio model by Suno AI.', paper: '', engine: '', type: 'Audio' },
        { name: 'Stable Audio', url: 'https://www.stableaudio.com/', description: 'AI-generated audio by Stability AI.', paper: '', engine: '', type: 'Audio' }
    ],
    music: [
        { name: 'Suno', url: 'https://suno.com/', description: 'AI music generation from text prompts.', paper: '', engine: '', type: 'Music' },
        { name: 'Udio', url: 'https://www.udio.com/', description: 'AI music creation with high fidelity.', paper: '', engine: '', type: 'Music' },
        { name: 'MusicGen', url: 'https://github.com/facebookresearch/audiocraft', description: 'Simple and controllable music generation by Meta.', paper: '', engine: '', type: 'Music' },
        { name: 'Magenta', url: 'https://magenta.tensorflow.org/', description: 'Research project exploring machine learning and music.', paper: '', engine: '', type: 'Music' }
    ],
    voice: [
        { name: 'DiffSinger', url: 'https://github.com/MoonInTheRiver/DiffSinger', description: 'Diffusion-based singing voice synthesis.', paper: '', engine: '', type: 'Voice' },
        { name: 'RVC', url: 'https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI', description: 'Retrieval-based Voice Conversion.', paper: '', engine: '', type: 'Voice' },
        { name: 'So-VITS-SVC', url: 'https://github.com/svc-develop-team/so-vits-svc', description: 'SoftVC VITS Singing Voice Conversion.', paper: '', engine: '', type: 'Voice' }
    ],
    speech: [
        { name: 'Whisper', url: 'https://github.com/openai/whisper', description: 'Robust speech recognition by OpenAI.', paper: '', engine: '', type: 'Speech' },
        { name: 'StyleTTS 2', url: 'https://github.com/yl4579/StyleTTS2', description: 'Text-to-speech with style diffusion and adversarial training.', paper: '', engine: '', type: 'Speech' },
        { name: 'XTTS', url: 'https://github.com/coqui-ai/TTS', description: 'Cross-lingual text-to-speech with voice cloning.', paper: '', engine: '', type: 'Speech' },
        { name: 'MeloTTS', url: 'https://github.com/myshell-ai/MeloTTS', description: 'High-quality multi-lingual text-to-speech.', paper: '', engine: '', type: 'Speech' }
    ],
    analytics: [
        { name: 'GameAnalytics', url: 'https://gameanalytics.com/', description: 'Free analytics tool for game developers.', paper: '', engine: '', type: 'Analytics' },
        { name: 'Unity Analytics', url: 'https://unity.com/products/analytics', description: 'Built-in analytics for Unity games.', paper: '', engine: 'Unity', type: 'Analytics' }
    ]
};

// ========================================
// State Management
// ========================================
let currentCategory = 'all';
let searchQuery = '';
let engineFilter = '';
let displayedCount = 0;
const ITEMS_PER_PAGE = 12;

// ========================================
// DOM Elements
// ========================================
const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
const categoryGrid = document.getElementById('categoryGrid');
const toolsGrid = document.getElementById('toolsGrid');
const currentCategoryTitle = document.getElementById('currentCategoryTitle');
const toolsCount = document.getElementById('toolsCount');
const searchInput = document.getElementById('searchInput');
const engineFilterSelect = document.getElementById('engineFilter');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loadMoreContainer = document.getElementById('loadMoreContainer');
const backToTop = document.getElementById('backToTop');

// ========================================
// Initialization
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderTools();
    initEventListeners();
    initScrollEffects();
    animateStats();
});

// ========================================
// Category Rendering
// ========================================
function renderCategories() {
    categoryGrid.innerHTML = categories.map(cat => `
        <div class="category-card ${currentCategory === cat.id ? 'active' : ''}" 
             data-category="${cat.id}"
             style="--card-accent: ${cat.accent}; --icon-bg: ${cat.iconBg}">
            <div class="category-icon">${cat.icon}</div>
            <h3>${cat.name}</h3>
            <p>${cat.description}</p>
        </div>
    `).join('');

    // Add click handlers
    categoryGrid.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const catId = card.dataset.category;
            selectCategory(catId);
        });
    });
}

function selectCategory(catId) {
    currentCategory = catId;
    displayedCount = 0;
    
    // Update active state
    categoryGrid.querySelectorAll('.category-card').forEach(card => {
        card.classList.toggle('active', card.dataset.category === catId);
    });

    // Update title
    const cat = categories.find(c => c.id === catId);
    currentCategoryTitle.textContent = cat ? cat.name : 'All Tools';

    // Scroll to tools section
    document.getElementById('toolsSection').scrollIntoView({ behavior: 'smooth' });

    renderTools();
}

// ========================================
// Tools Rendering
// ========================================
function getFilteredTools() {
    let tools = [];
    
    if (currentCategory === 'all') {
        Object.values(toolsData).forEach(catTools => {
            tools = tools.concat(catTools);
        });
    } else {
        tools = toolsData[currentCategory] || [];
    }

    // Apply search filter
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        tools = tools.filter(t => 
            t.name.toLowerCase().includes(query) ||
            t.description.toLowerCase().includes(query)
        );
    }

    // Apply engine filter
    if (engineFilter) {
        tools = tools.filter(t => t.engine === engineFilter);
    }

    return tools;
}

function renderTools() {
    const tools = getFilteredTools();
    const totalCount = tools.length;
    
    // Update count
    toolsCount.textContent = `${totalCount} tools`;

    // Show items up to displayedCount + ITEMS_PER_PAGE
    const endIndex = Math.min(displayedCount + ITEMS_PER_PAGE, totalCount);
    const displayTools = tools.slice(0, endIndex);
    displayedCount = endIndex;

    // Render cards
    if (displayTools.length === 0) {
        toolsGrid.innerHTML = `
            <div class="empty-state">
                <p>No tools found matching your criteria.</p>
            </div>
        `;
    } else {
        toolsGrid.innerHTML = displayTools.map(tool => createToolCard(tool)).join('');
    }

    // Show/hide load more button
    loadMoreContainer.style.display = displayedCount < totalCount ? 'block' : 'none';
}

function createToolCard(tool) {
    const hasPaper = tool.paper && tool.paper.includes('arxiv');
    const hasEngine = tool.engine && tool.engine.trim() !== '';
    
    return `
        <div class="tool-card">
            <div class="tool-header">
                <h3 class="tool-name">${tool.name}</h3>
                <div class="tool-badges">
                    ${hasEngine ? `<span class="badge badge-engine">${tool.engine}</span>` : ''}
                    <span class="badge badge-type">${tool.type}</span>
                    ${hasPaper ? `<span class="badge badge-paper">Paper</span>` : ''}
                </div>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-footer">
                <a href="${tool.url}" target="_blank" class="tool-link">
                    Visit
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                </a>
                ${hasPaper ? `
                    <a href="${tool.paper}" target="_blank" class="tool-link" style="color: #cccccc">
                        Paper
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17"/>
                        </svg>
                    </a>
                ` : ''}
            </div>
        </div>
    `;
}

// ========================================
// Event Listeners
// ========================================
function initEventListeners() {
    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        displayedCount = 0;
        renderTools();
    });

    // Engine filter
    engineFilterSelect.addEventListener('change', (e) => {
        engineFilter = e.target.value;
        displayedCount = 0;
        renderTools();
    });

    // Load more
    loadMoreBtn.addEventListener('click', () => {
        renderTools();
    });

    // Back to top
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Footer category links
    document.querySelectorAll('.footer-links a[data-cat]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const catId = link.dataset.cat;
            selectCategory(catId);
        });
    });
}

// ========================================
// Scroll Effects
// ========================================
function initScrollEffects() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top visibility
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-header, .category-card, .tool-card, .feature-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ========================================
// Stats Animation
// ========================================
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.count);
                animateNumber(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
    const duration = 2000;
    const start = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * target);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(update);
}

// ========================================
// Smooth scroll for anchor links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
