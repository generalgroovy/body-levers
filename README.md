# Body Levers

Explore how load, position and leverage change the force needed to balance a simple mechanism.

Serve this folder with `python -m http.server 8000`, then open http://localhost:8000. No account, installation or runtime dependency is required.

Move the load, distance and angle sliders to see the diagram and force calculation update. **Change the pull attachment** exposes its distance from the hinge. All sliders support native keyboard controls. Choose one of three challenges to work with constrained controls; **Next challenge** appears when its target is met. **Reset setup** restores the current setup. **Undo** reverses a slider change, reset, or challenge selection. Reload returns to free exploration; no data is stored.

The model assumes a massless rigid lever, a fixed ideal hinge, a point load under 9.81 m/s² gravity, and a pull perpendicular to the lever. Force equals load torque divided by the pull's lever arm. No friction, movement or anatomical geometry is modeled. The title is inspired by learning how the body moves, but this illustration is a mechanical model, not a depiction of a person's muscles. Outputs are not physiological effort, lifting advice or safety assessments.

Run `npm test` or `node --test`. Tests check force/torque invariants, finite bounded behavior and each challenge's reachable solution and constraints.

Original code and vector artwork, inspired by GeneralGroovy's Muscle Atlas and its direct visual exploration. This project teaches mechanical relationships rather than duplicating an exercise catalogue.

Potential depth, not shipped: two-joint mechanisms, user-authored target puzzles, additional force directions, and energy/work demonstrations.
