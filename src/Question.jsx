import { useState } from "react";

export default function Question({ question }) {
  const [Open, setOpen] = useState(false);

  return (
    <section>
      <div className={Open ? "open" : "closed"}>
        <h4>{question.title}</h4>
        <button onClick={() => setOpen(!Open)}>{Open ? "-" : "+"}</button>
      </div>
      {Open && <p>{question.info}</p>}
    </section>
  );
}
