import test from 'node:test';import assert from 'node:assert/strict';import {DEFAULT,CHALLENGES,normalize,mechanics,solved} from '../model.mjs';const near=(a,b)=>assert(Math.abs(a-b)<1e-9);
test('doubling mass doubles required force',()=>near(mechanics({...DEFAULT,mass:6}).pull,2*mechanics(DEFAULT).pull));
test('halving reach halves torque and force',()=>{const a=mechanics(DEFAULT),b=mechanics({...DEFAULT,reach:15});near(b.torque,a.torque/2);near(b.pull,a.pull/2);});
test('doubling attachment distance halves required pull',()=>near(mechanics({...DEFAULT,pullArm:8}).pull,mechanics({...DEFAULT,pullArm:4}).pull/2));
test('sixty degree angle halves horizontal moment arm',()=>near(mechanics({...DEFAULT,angle:60}).pull,mechanics(DEFAULT).pull/2));
test('pull balances load torque throughout bounded controls',()=>{for(const mass of [1,3,10])for(const reach of [10,25,40])for(const angle of [0,40,80])for(const pullArm of [3,8]){const m=mechanics({mass,reach,angle,pullArm});near(m.pull*pullArm/100,m.torque);assert(Number.isFinite(m.pull));}});
test('normalization excludes singular and nonfinite inputs',()=>assert.deepEqual(normalize({mass:NaN,reach:100,angle:-5,pullArm:0}),{mass:3,reach:40,angle:0,pullArm:3}));
test('each authored challenge starts unsolved and is reachable',()=>{CHALLENGES.forEach((c,i)=>assert.equal(solved(c.start,i),false));assert(solved({...DEFAULT,reach:15},0));assert(solved({...DEFAULT,angle:60},1));assert(solved({...DEFAULT,mass:6,reach:25,angle:60},2));});
test('challenge checks reject altered fixed variables and too-short reach',()=>{assert(!solved({...DEFAULT,mass:1,reach:15},0));assert(!solved({...DEFAULT,mass:6,reach:10,angle:80},2));assert(!solved(DEFAULT,-1));});
