"use strict";

import { gsap } from 'gsap';

const tl = gsap.timeline();

      tl.from('.discover', { opacity: 0, scale: 1, duration: 0.8 });

      tl.to('.discover', { opacity: 1, scale: 2, duration: 0.8 });