// Original procedural scene. Three.js is locally vendored; see vendor/THREE-LICENSE.txt.
export function createStudioWorld(host) {
  if (!host) return;
  let disposed = false, cleanup = () => {};
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  host.dataset.paused = String(reduced.matches);
  import('./vendor/three.js').then(T => {
    if (disposed) return;
    let renderer;
    try { renderer = new T.WebGLRenderer({ antialias:true, alpha:true, powerPreference:'low-power' }); }
    catch { host.dataset.state='fallback'; host.parentElement.querySelector('.world-motion').hidden=true; return; }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.setClearColor(0,0); renderer.outputColorSpace=T.SRGBColorSpace;
    renderer.toneMapping=T.ACESFilmicToneMapping; renderer.toneMappingExposure=1.35;
    host.append(renderer.domElement); host.dataset.state='ready';
    const scene=new T.Scene(), camera=new T.PerspectiveCamera(33,1,.1,100);
    camera.position.set(8,7.8,10.5); camera.lookAt(0,.2,0);
    scene.add(new T.HemisphereLight(0xdad7ff,0x28203c,3));
    const key=new T.DirectionalLight(0xffdeae,5);key.position.set(3,8,5);scene.add(key);
    const rim=new T.DirectionalLight(0xafa1ff,4);rim.position.set(-5,4,-4);scene.add(rim);
    const world=new T.Group();scene.add(world);
    const materials=[];
    function mat(color,metalness=.1,roughness=.6){const m=new T.MeshStandardMaterial({color,metalness,roughness});materials.push(m);return m;}
    const stone=mat(0xcfc5dc), edge=mat(0x68617f), dark=mat(0x25253a), gold=mat(0xdcb080,.65,.3), leaf=mat(0x688b87), lavender=mat(0xa495c4), white=mat(0xe8e0db);
    function mesh(geo,material,x=0,y=0,z=0,parent=world){const m=new T.Mesh(geo,material);m.position.set(x,y,z);parent.add(m);return m;}
    function box(w,h,d,m,x,y,z,p=world){return mesh(new T.BoxGeometry(w,h,d),m,x,y,z,p);}
    function cylinder(rt,rb,h,m,x,y,z,n=8,p=world){return mesh(new T.CylinderGeometry(rt,rb,h,n),m,x,y,z,p);}
    // A floating hexagonal workshop, formed entirely from geometry.
    cylinder(3.35,3.1,.35,stone,0,-.6,0,6);
    cylinder(3.1,2.35,.65,edge,0,-1.1,0,6);
    cylinder(2.35,.65,1.2,dark,0,-2,0,6);
    cylinder(.65,0,.8,lavender,0,-2.95,0,6);
    const platform=cylinder(3.39,3.39,.035,gold,0,-.42,0,6);
    // Isometric desk with a working-screen illustration, not a client screenshot.
    box(2.8,.16,1.35,gold,.15,.55,.25);
    for(const x of [-1,1.25])for(const z of [-.15,.72])box(.09,.95,.09,dark,x,0,z);
    box(1.65,1.05,.13,dark,.05,1.35,-.12);
    const screenMat=new T.MeshStandardMaterial({color:0x161d2d,emissive:0x263959,emissiveIntensity:.6});materials.push(screenMat);
    box(1.48,.88,.02,screenMat,.05,1.35,-.042);
    box(.1,.35,.12,dark,.05,.73,-.12);box(.65,.04,.38,dark,.05,.64,-.12);
    const cyan=new T.MeshBasicMaterial({color:0x9cd4d4}),pink=new T.MeshBasicMaterial({color:0xc7b0eb});materials.push(cyan,pink);
    for(let i=0;i<6;i++){box(.12,.027,.015,pink,-.52,1.63-i*.11,-.025);box(.35+(i%3)*.15,.027,.015,i%2?cyan:gold,-.1,1.63-i*.11,-.025);}
    box(1,.045,.37,dark,.1,.67,.65);for(let i=0;i<8;i++)box(.06,.015,.24,edge,-.32+i*.11,.701,.65);
    cylinder(.12,.12,.22,white,1.14,.75,.3,16);const handle=mesh(new T.TorusGeometry(.085,.025,8,20),white,1.27,.77,.3);handle.rotation.y=Math.PI/2;
    // Chair, stepped plinth, studio foliage, and softly floating code glyphs.
    box(.8,.16,.75,lavender,.2,.04,1.6);box(.8,.85,.12,lavender,.2,.5,1.93);cylinder(.08,.1,.65,dark,.2,-.32,1.6);box(.8,.06,.6,dark,.2,-.62,1.6);
    for(let i=0;i<3;i++)box(.9,.13,.45,stone,1.8,-.3+i*.13,1.3-i*.35);
    for(const [x,z,s] of [[-2,-.75,1],[2.1,-1,.7],[-1.6,1.6,.5]]){
      cylinder(.27*s,.21*s,.5*s,white,x,-.17,z,10);
      cylinder(.045,.06,1.5*s,gold,x,.5*s,z,7);
      for(let i=0;i<5;i++){const a=i*2.4;const l=mesh(new T.SphereGeometry(.35*s,8,5),i%2?leaf:lavender,x+Math.cos(a)*.18*s,.6*s+i*.16*s,z+Math.sin(a)*.18*s);l.scale.set(1,.55,1);}
    }
    // Architectural arch gives the tiny world a recognizable silhouette.
    const arch=new T.Group();world.add(arch);arch.position.set(.2,-.35,-1.5);
    for(const x of [-1.35,1.35])box(.15,2.5,.15,gold,x,1.25,0,arch);
    const arc=mesh(new T.TorusGeometry(1.35,.075,8,48,Math.PI),gold,0,2.5,0,arch);
    const orbit=new T.Group();world.add(orbit);
    for(let i=0;i<16;i++){const a=i*2.399;const r=3.5+(i%3)*.16;const dot=mesh(new T.IcosahedronGeometry(.04+(i%3)*.025,0),i%2?gold:lavender,Math.cos(a)*r,.3+(i%5)*.5,Math.sin(a)*r,orbit);}
    const glyph=new T.Group();world.add(glyph);glyph.position.set(-1.9,2.3,.3);
    for(const side of [-1,1]){const g=new T.Group();glyph.add(g);g.position.x=side*.5;for(const up of [-1,1]){const bar=box(.09,.42,.09,cyan,0,up*.13,0,g);bar.rotation.z=side*up*.65;}}
    // Contact shadow is a soft procedural texture, so no external model/image request is needed.
    const shadowCanvas=document.createElement('canvas');shadowCanvas.width=128;shadowCanvas.height=128;const ctx=shadowCanvas.getContext('2d');
    const grad=ctx.createRadialGradient(64,64,0,64,64,64);grad.addColorStop(0,'rgba(0,0,0,.5)');grad.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=grad;ctx.fillRect(0,0,128,128);
    const tex=new T.CanvasTexture(shadowCanvas),sm=new T.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false});materials.push(sm);
    const shadow=mesh(new T.PlaneGeometry(9,9),sm,0,-3.8,0,scene);shadow.rotation.x=-Math.PI/2;
    let pointerX=0,pointerY=0,visible=true,frame=0,last=0,t=0;
    function move(e){const b=host.getBoundingClientRect();pointerX=((e.clientX-b.left)/b.width-.5);pointerY=((e.clientY-b.top)/b.height-.5);}
    function leave(){pointerX=0;pointerY=0;}
    host.addEventListener('pointermove',move);host.addEventListener('pointerleave',leave);
    function size(){const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.position.set(8,7.8,10.5);camera.zoom=w<420?.88:1;camera.updateProjectionMatrix();}
    const resize=new ResizeObserver(size);resize.observe(host);size();
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;});observer.observe(host);
    const onReduced=()=>{host.dataset.paused=String(reduced.matches);const b=host.parentElement.querySelector('.world-motion');b.textContent=reduced.matches?'Play motion':'Pause motion';b.setAttribute('aria-pressed',String(reduced.matches));};reduced.addEventListener('change',onReduced);onReduced();
    function animate(now){if(disposed)return;frame=requestAnimationFrame(animate);if(now-last<33)return;const dt=Math.min((now-last)/1000,.1);last=now;if(!visible||document.hidden)return;const paused=host.dataset.paused==='true';if(!paused)t+=dt;
      const target=paused?0:pointerX*.35;world.rotation.y+=(target-world.rotation.y)*.06;world.rotation.x+=((paused?0:pointerY*.08)-world.rotation.x)*.06;world.position.y=paused?0:Math.sin(t*.7)*.09;glyph.position.y=2.3+(paused?0:Math.sin(t*1.2)*.12);orbit.rotation.y=paused?orbit.rotation.y:t*.035;renderer.render(scene,camera);}
    frame=requestAnimationFrame(animate);
    function lost(e){e.preventDefault();cancelAnimationFrame(frame);host.dataset.state='fallback';renderer.domElement.style.display='none';host.parentElement.querySelector('.world-motion').hidden=true;}renderer.domElement.addEventListener('webglcontextlost',lost);
    cleanup=()=>{cancelAnimationFrame(frame);resize.disconnect();observer.disconnect();reduced.removeEventListener('change',onReduced);host.removeEventListener('pointermove',move);host.removeEventListener('pointerleave',leave);renderer.domElement.removeEventListener('webglcontextlost',lost);scene.traverse(o=>o.geometry?.dispose());materials.forEach(m=>m.dispose());tex.dispose();renderer.dispose();renderer.domElement.remove();};
  }).catch(()=>{if(!disposed){host.dataset.state='fallback';host.parentElement.querySelector('.world-motion').hidden=true;}});
  return()=>{disposed=true;cleanup();};
}
