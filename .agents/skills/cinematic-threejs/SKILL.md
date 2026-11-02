---
name: cinematic-threejs
description: Build premium cinematic 3D web experiences using Three.js, React Three Fiber, Drei, GSAP and ScrollTrigger. Use for interactive 3D scenes, scroll-driven camera animation, WebGL optimization and cinematic landing pages.
---

# Cinematic Three.js Web Development

You are building a production-quality cinematic 3D website.

Primary stack:

- React
- Next.js
- TypeScript
- Three.js
- React Three Fiber
- @react-three/drei
- GSAP
- GSAP ScrollTrigger

## Architecture

Keep 3D functionality modular.

Prefer:

components/three/
- HeroScene
- CameraRig
- Car
- Road
- Environment
- Lake
- Landmark
- Lighting
- Effects

Keep animation logic separate from rendering logic where practical.

## 3D principles

Prefer lightweight procedural geometry when a detailed GLB is unnecessary.

Use GLB/GLTF for important hero objects.

Use instancing for repeated objects such as:

- trees
- street lights
- buildings
- road props

Avoid unnecessarily heavy geometry.

## Animation

Use GSAP and ScrollTrigger for cinematic scroll-driven experiences.

Prefer one coordinated journey timeline rather than many competing ScrollTriggers.

Animate:

- camera
- vehicle position
- vehicle rotation
- wheel rotation
- environment transitions
- text transitions

Use smooth interpolation.

Avoid abrupt camera movement.

## Camera

Use programmatic camera control.

Do not use OrbitControls as the primary experience for a cinematic landing page.

The camera should:

- follow the subject
- maintain cinematic framing
- avoid clipping
- use damping/interpolation
- transition smoothly between scenes

## Vehicle

If a GLB is available:

Load it using useGLTF.

Do not assume wheel rotation axes without inspecting the model.

Use separate steering groups and wheel rotation groups when possible.

Preferred hierarchy:

Car
├── Body
├── Steering_FL
│   └── Wheel_FL
├── Steering_FR
│   └── Wheel_FR
├── Wheel_RL
└── Wheel_RR

Steering and wheel rolling should be independent transforms.

## Performance

Prioritize performance over unnecessary visual complexity.

Use:

- lazy loading
- Suspense
- optimized GLB
- compressed textures
- instancing
- frustum culling where appropriate
- limited dynamic lights
- reasonable shadow quality
- reduced effects on mobile

Avoid:

- huge textures
- excessive particles
- excessive post-processing
- hundreds of dynamic lights
- unnecessarily complex geometry

## Mobile

Always provide a reduced-quality mobile experience.

Reduce:

- shadows
- particles
- reflections
- polygon complexity
- dynamic lights

Respect:

prefers-reduced-motion

Provide a fallback when WebGL performance is poor.

## Visual quality

The target aesthetic is:

premium
cinematic
minimal
luxury travel
realistic lighting
smooth motion

Avoid:

- game-like UI
- excessive neon
- excessive glow
- unnecessary animations
- flashy effects

## Code quality

Before considering the task complete:

1. Run the application.
2. Check the browser console.
3. Check for WebGL errors.
4. Check desktop rendering.
5. Check mobile rendering.
6. Verify animations.
7. Verify ScrollTrigger cleanup.
8. Verify assets load correctly.
9. Verify no unnecessary network requests.
10. Fix errors before finishing.