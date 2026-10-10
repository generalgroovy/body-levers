# Body Levers

Explore how load, position and leverage change the force needed to balance a simple mechanism.

Serve this folder with `python -m http.server 8000`, then open http://localhost:8000. No account, installation or runtime dependency is required.

The first challenge starts with one distance slider: move the load closer until the required pull is at most 100 N. Fixed values stay visible as a short note; only controls relevant to the current challenge appear. Choose **Explore freely** to adjust load, distance and angle together. **Change the pull attachment** exposes its distance from the hinge. All sliders support native keyboard controls. Choose one of three challenges to work with constrained controls; **Next challenge** appears when its target is met and focuses the next editable control. Completing the last challenge offers **Explore freely**. **Reset setup** restores the current setup. **Undo** reverses a slider change, reset, or challenge selection. Reload returns to the first challenge; no data is stored.

The model assumes a massless rigid lever, a fixed ideal hinge, a point load under 9.81 m/s² gravity, and a pull perpendicular to the lever. Force equals load torque divided by the pull's lever arm. No friction, movement or anatomical geometry is modeled. The title is inspired by learning how the body moves, but this illustration is a mechanical model, not a depiction of a person's muscles. Outputs are not physiological effort, lifting advice or safety assessments.

Run `npm test` or `node --test`. Tests check force/torque invariants, finite bounded behavior and each challenge's reachable solution and constraints. Three event-handler tests use a minimal DOM double to check relevant-control disclosure, input-only Undo, and progression back to exploration; rendered acceptance remains separate.

Original code and vector artwork, inspired by GeneralGroovy's Muscle Atlas and its direct visual exploration. This project teaches mechanical relationships rather than duplicating an exercise catalogue.
